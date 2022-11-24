function removeItem(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito.length > 1) {
    carrito.splice(index, 1);
    products.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById(`row${index}`).remove();
  } else {
    localStorage.removeItem("carrito");
    products = [];
    setCarritoVacio();
  }

  let cartNumber = document.querySelector(".cart-number");
  cartNumber.innerText = productosEnElCarrito();

  document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
    products
  )}`;

  toastr.success("Se borro el item del carrito");
}

function setCarritoVacio() {
  cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes productos en el carrito</div></td>
    </tr>            
    `;
}
function vaciarCarrito() {
  localStorage.removeItem("carrito");
}

function calcularTotal(products) {
  return products.reduce((acum, product) => {
    return (acum += Number(product.price) * Number(product.quantity));
  }, 0);
}

let cartRows = document.querySelector(".cartRows");

let products = [];

let total = document.querySelector(".totalAmount");
if (localStorage.carrito) {
  let carrito = JSON.parse(localStorage.carrito);
  carrito.forEach((itemL, index) => {
    fetch(`/api/products/${itemL.id}`)
      .then((res) => res.json())
      .then((productDB) => {
        if (productDB) {
          cartRows.innerHTML += `
           <tr id="row${index}">
              <th scope="row">${index + 1}</th>
              <td>${productDB.productName}</td>
              <td>${productDB.price}</td>
              <td class="text-center">${itemL.quantity}</td>
              <td class="text-center">$ ${parseFloat(
                productDB.price * itemL.quantity,
                2
              ).toFixed(2)}</td>
              <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-eye"></i></button></td>
          </tr>
          `;
          products.push({
            productId: productDB.id,
            name: productDB.productName,
            price: productDB.price,
            quantity: itemL.quantity,
          });
        } else {
          /* lo borro del localstorage */
          carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })
      .then(() => {
        total.innerText = `$ ${calcularTotal(products)}`;
      });
  });
}

let checkoutCart = document.querySelector("#checkoutCart");

checkoutCart.onsubmit = (e) => {
  e.preventDefault();
  const formData = {
    orderItems: products,
    paymentMethod: checkoutCart.paymentMethod.value,
    shippingMethod: checkoutCart.shippingMethod.value,
    total: calcularTotal(products),
  };
  fetch("/api/products/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        vaciarCarrito();
        location.href = `/order/${res.order.id}`;
      }
    });
};
