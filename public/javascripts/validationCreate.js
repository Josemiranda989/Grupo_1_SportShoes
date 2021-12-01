document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  /* productName */
  var productName = document.getElementById("fullName").value;
  var errProductName = document.getElementById("errProductName");
  if (productName.length == 0) {
    errProductName.classList.add("show");
    errProductName.classList.remove("hidden");
    errProductName.innerHTML = "Debe ingresar su nombre";
    return;
  } else {
    errProductName.classList.remove("show");
    errProductName.classList.add("hidden");
  }
  
  /* Brand */
  var brand = document.getElementById("brand").value;
  errBrand = document.getElementById("errBrand");

  if (brand === "") {
    errBrand.classList.add("show");
    errBrand.classList.remove("hidden");
    errBrand.innerHTML = "Ingrese la Marca del Producto";
    return;
  } else {
    errBrand.classList.add("show");
    errBrand.classList.remove("hidden");
  }

  /* Avatar */
  var img1 = document.getElementById("img1").value;
  errImg1 = document.getElementById("errImg1");
  var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
  if (!allowedExtensions.exec(img1)) {
    errImg1.classList.add("show");
    errImg1.classList.remove("hidden");
    errImg1.innerHTML =
      "Please upload file having extensions .jpeg/.jpg/.png/.gif only.";
    return;
  } else {
    errImg1.classList.remove("show");
    errImg1.classList.add("hidden");
  }

  /* Description */

  var description = document.getElementById("description").value;
  errDescription = document.getElementById("errDescription");
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(description);
  if (description.length < 20) {
    errDescription.classList.add("show");
    errDescription.classList.remove("hidden");
    errDescription.innerHTML =
      "La descripcion debe ser superior a 20 carácteres";
    return;
  } else {
    errDescription.classList.remove("show");
    errDescription.classList.add("hidden");
  }

  this.submit();
}
