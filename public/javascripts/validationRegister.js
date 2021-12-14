document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('formulario')
    .addEventListener('submit', validarFormulario)
})

function validarFormulario(evento) {
  evento.preventDefault()

  /* FullName */
  var fullName = document.getElementById('fullName').value
 var  errFullName = document.getElementById('errFullName')
  if (fullName.length == 0) {
    errFullName.classList.add('show')
    errFullName.classList.remove('hidden')
    errFullName.innerHTML = 'You must enter your name F'
    return
  } else {
    errFullName.classList.remove('show')
    errFullName.classList.add('hidden')
  }

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

  /* Avatar */
  var avatar = document.getElementById('avatar').value
  errAvatar = document.getElementById('errAvatar')
  var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i
  if (!allowedExtensions.exec(avatar)) {
    errAvatar.classList.add('show')
    errAvatar.classList.remove('hidden')
    errAvatar.innerHTML =
      'Please upload file having extensions .jpeg/.jpg/.png/.gif only.'
    return
  } else {
    errAvatar.classList.remove('show')
    errAvatar.classList.add('hidden')
  }

  /* Password */
  var password = document.getElementById('password').value
   var errPassword = document.getElementById('errPassword')
  const charPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(
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

  var rePassword = document.getElementById('rePassword').value
  var errRePassword = document.getElementById('errRePassword')
  
  if(rePassword != password) {
    errRePassword.classList.add('show')
    errRePassword.classList.remove('hidden')
    errRePassword.innerHTML = 'The password does not match'
    return
   
  }else{
    errRePassword.classList.remove('show')
    errRePassword.classList.add('hidden')
  }

  this.submit()
}
