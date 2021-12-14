document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  /* productName */
  var productNameInput = document.getElementById("productName")
  var productName = document.getElementById("productName").value;
  var errProductName = document.getElementById("errProductName");
  if (productName.length == 0) {
    errProductName.classList.add("show");
    errProductName.classList.remove("hidden");
    errProductName.innerHTML = "You must enter your name F";
    productNameInput.focus()
    return;
  } else {
    errProductName.classList.remove("show");
    errProductName.classList.add("hidden");
  }
  
  /* price */
  var priceInput = document.getElementById("price")
  var price = document.getElementById("price").value;
  errPrice = document.getElementById("errPrice");

  if (price === "") {
    errPrice.classList.add("show");
    errPrice.classList.remove("hidden");
    errPrice.innerHTML = "Enter Product price F";
    priceInput.focus()
    return;
  } else {
    errPrice.classList.remove("show");
    errPrice.classList.add("hidden");
  }

  /* size */
  var sizeInput = document.getElementById("size")
  var size = document.getElementById("size").value;
  errSize = document.getElementById("errSize");

  if (size === "") {
    errSize.classList.add("show");
    errSize.classList.remove("hidden");
    errSize.innerHTML = "Enter Product size F";
    sizeInput.focus()
    return;
  } else {
    errSize.classList.remove("show");
    errSize.classList.add("hidden");
  }

  /* colors */
  var colorInput = document.getElementById("color")
  var color = document.getElementById("color").value;
  errColor = document.getElementById("errColor");

  if (color === "") {
    errColor.classList.add("show");
    errColor.classList.remove("hidden");
    errColor.innerHTML = "Enter Product color F";
    colorInput.focus()
    return;
  } else {
    errColor.classList.remove("show");
    errColor.classList.add("hidden");
  }

  /* Brand */
  var brandInput = document.getElementById("brand")
  var brand = document.getElementById("brand").value;
  errBrand = document.getElementById("errBrand");

  if (brand === "") {
    errBrand.classList.add("show");
    errBrand.classList.remove("hidden");
    errBrand.innerHTML = "Enter Product Brand F";
    brandInput.focus()
    return;
  } else {
    errBrand.classList.remove("show");
    errBrand.classList.add("hidden");
  }

  /* Avatar */
  var img1Input = document.getElementById("img1")
  var img1 = document.getElementById("img1").value;
  errImg1 = document.getElementById("errImg1");
  var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
  if (!allowedExtensions.exec(img1)) {
    errImg1.classList.add("show");
    errImg1.classList.remove("hidden");
    errImg1.innerHTML =
      "Please upload file having extensions .jpeg/.jpg/.png/.gif only.";
    img1Input.focus()
    return;
  } else {
    errImg1.classList.remove("show");
    errImg1.classList.add("hidden");
  }

  /* Description */
  var descriptionInput = document.getElementById("description")
  var description = document.getElementById("description").value;
  errDescription = document.getElementById("errDescription");
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(description);
  if (description.length < 20) {
    errDescription.classList.add("show");
    errDescription.classList.remove("hidden");
    errDescription.innerHTML =
      "The description must be greater than 20 characters F";
    descriptionInput.focus()
    return;
  } else {
    errDescription.classList.remove("show");
    errDescription.classList.add("hidden");
  }

  this.submit();
}
