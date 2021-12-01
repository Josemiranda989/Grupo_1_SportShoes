document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('formulario')
    .addEventListener('submit', validarFormulario)
})

function validarFormulario(evento) {
  evento.preventDefault()

  /* Email */
  var email = document.getElementById('email').value
  errEmail = document.getElementById('errEmail')
  const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email)
  if (email === '') {
    errEmail.classList.add('show')
    errEmail.classList.remove('hidden')
    errEmail.innerHTML = 'Enter your email F'
    return
  } else if (!charEmail) {
    errEmail.classList.add('show')
    errEmail.classList.remove('hidden')
    errEmail.innerHTML = 'Invalid format F'
    return
  } else {
    errEmail.classList.remove('show')
    errEmail.classList.add('hidden')
  }

  /* Password */
  var password = document.getElementById('password').value
  errPassword = document.getElementById('errPassword')
  const charPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/.test(
    password,
  )
  if (password.length < 8) {
    errPassword.classList.add('show')
    errPassword.classList.remove('hidden')
    errPassword.innerHTML = 'The password must be greater than 8 characters F'
    return
  } else if (!charPass) {
    errPassword.classList.add('show')
    errPassword.classList.remove('hidden')
    errPassword.innerHTML =
      'The password must contain uppercase, lowercase, number and special character F'
    return
  } else {
    errPassword.classList.remove('show')
    errPassword.classList.add('hidden')
  }

  this.submit()
}