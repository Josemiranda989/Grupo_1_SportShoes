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
  return products.reduce(
    (acum, product) => {

      return (acum += Number(product.price) * Number(product.quantity))
    },
    0
  );
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
            price:productDB.price,
            quantity: itemL.quantity
          })
        } else {
          /* lo borro del localstorage */
          carrito.splice(index, 1)
          localStorage.setItem('carrito', JSON.stringify(carrito))
        }      
      })
      .then(() => {
        total.innerText = `$ ${calcularTotal(products)}`
      });
  });
}

let checkoutCart = document.querySelector("#checkoutCart");

checkoutCart.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);
}
