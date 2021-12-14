$(window).load(function () {
    document.querySelector("#buy-cart").addEventListener("click", function (e) {
        Swal.fire({
          icon: 'success',
          title: 'Whait a moment please',
          showConfirmButton: false,
          timer: 1500
        })
    });
});



