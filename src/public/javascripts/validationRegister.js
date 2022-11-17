document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('formulario')
    .addEventListener('submit', validarFormulario)
})

function validarFormulario(evento) {
  evento.preventDefault()

  /* FullName */
  const fullNameInput = document.getElementById('fullName')
  const fullName = document.getElementById('fullName').value
  const errFullName = document.getElementById('errFullName')
  if (fullName.length == 0) {
    errFullName.classList.add('show')
    errFullName.classList.remove('hidden')
    errFullName.innerHTML = 'You must enter your name F'
    fullNameInput.focus()
    return
  } else {
    errFullName.classList.remove('show')
    errFullName.classList.add('hidden')
  }

  /* UserName */
  const userNameInput = document.getElementById('userName')
  const userName = document.getElementById('userName').value
  const errUserName = document.getElementById('errUserName')
  if (userName.length == 0) {
    errUserName.classList.add('show')
    errUserName.classList.remove('hidden')
    errUserName.innerHTML = 'You must enter your name F'
    userNameInput.focus()
    return
  } else {
    errUserName.classList.remove('show')
    errUserName.classList.add('hidden')
  }

  /* Country */
  const countryInput = document.getElementById('country')
  const country = document.getElementById('country').value
  const errCountry = document.getElementById('errCountry')
  if (country.length == 0) {
    errCountry.classList.add('show')
    errCountry.classList.remove('hidden')
    errCountry.innerHTML = 'Select a country'
    countryInput.focus()
    return
  } else {
    errCountry.classList.remove('show')
    errCountry.classList.add('hidden')
  }

  /* Address */
  const addressInput = document.getElementById('address')
  const address = document.getElementById('address').value
  const errAddress = document.getElementById('errAddress')
  if (address.length == 0) {
    errAddress.classList.add('show')
    errAddress.classList.remove('hidden')
    errAddress.innerHTML = 'Select a Address'
    addressInput.focus()
    return
  } else {
    errAddress.classList.remove('show')
    errAddress.classList.add('hidden')
  }

  /* Email */
  const emailInput = document.getElementById('email')
  const email = document.getElementById('email').value
  errEmail = document.getElementById('errEmail')
  const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email)
  if (email === '') {
    errEmail.classList.add('show')
    errEmail.classList.remove('hidden')
    errEmail.innerHTML = 'Enter your email F'
    emailInput.focus()
    return
  } else if (!charEmail) {
    errEmail.classList.add('show')
    errEmail.classList.remove('hidden')
    errEmail.innerHTML = 'Invalid format F'
    emailInput.focus()
    return
  } else {
    errEmail.classList.remove('show')
    errEmail.classList.add('hidden')
  }

  /* Avatar */
  const avatarInput = document.getElementById('avatar')
  const avatar = document.getElementById('avatar').value
  errAvatar = document.getElementById('errAvatar')
  const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i
  if (!allowedExtensions.exec(avatar)) {
    errAvatar.classList.add('show')
    errAvatar.classList.remove('hidden')
    errAvatar.innerHTML =
      'Please upload file having extensions .jpeg/.jpg/.png/.gif only.'
    avatarInput.focus()
    return
  } else {
    errAvatar.classList.remove('show')
    errAvatar.classList.add('hidden')
  }

  /* Password */
  const passwordInput = document.getElementById('password')
  const password = document.getElementById('password').value
  const errPassword = document.getElementById('errPassword')
  const charPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(
    password,
  )
  if (password.length < 8) {
    errPassword.classList.add('show')
    errPassword.classList.remove('hidden')
    errPassword.innerHTML = 'The password must be greater than 8 characters F'
    passwordInput.focus()
    return
  } else if (!charPass) {
    errPassword.classList.add('show')
    errPassword.classList.remove('hidden')
    errPassword.innerHTML =
      'The password must contain uppercase, lowercase, number and special character F'
    passwordInput.focus()
    return
  } else {
    errPassword.classList.remove('show')
    errPassword.classList.add('hidden')
  }

  /* rePassword */
  const rePasswordInput = document.getElementById('rePassword')
  const rePassword = document.getElementById('rePassword').value
  const errRePassword = document.getElementById('errRePassword')

  if (rePassword != password) {
    errRePassword.classList.add('show')
    errRePassword.classList.remove('hidden')
    errRePassword.innerHTML = 'The password does not match'
    rePasswordInput.focus()
    return
  } else {
    errRePassword.classList.remove('show')
    errRePassword.classList.add('hidden')
  }

  this.submit()
}
