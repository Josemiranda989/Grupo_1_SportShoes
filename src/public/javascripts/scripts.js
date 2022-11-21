function productosEnElCarrito() {
  return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}

window.addEventListener("load", () => {
  /* Animatios instalation */
  // new WOW.init()

  toastr.options = {
    positionClass: "toast-bottom-right",
    fadeIn: 300,
    fadeOut: 1000,
    timeOut: 5000,
    extendedTimeOut: 1000,
  };

  let botonesComprar = document.querySelectorAll(".agregar_carrito");
  let cartNumber = document.querySelector(".cart-number");
  cartNumber.innerText = productosEnElCarrito();

  botonesComprar.forEach((boton) => {
    /* escuchar el click en el boton */
    boton.addEventListener("click", (e) => {
      // console.log(e.target.dataset.id);
      /* hay carrito en local storage? */
      if (localStorage.carrito) {
        let carrito = JSON.parse(localStorage.carrito);
        /* Si mi producto está en el carrito le sumo 1, sino lo agrego con push */
        let index = carrito.findIndex((prod) => {
          return prod.id == e.target.dataset.id;
        });
        if (index != -1) {
          carrito[index].quantity++;
        } else {
          carrito.push({ id: e.target.dataset.id, quantity: 1 });
        }
        /* Actualizo el carrito */
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        /* Como no podemos enviar un objeto lo pasamos por stringify */
        localStorage.setItem(
          "carrito",
          JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
        );
      }

      toastr.success("Se agregó este producto al carrito");
    });
  });
});
