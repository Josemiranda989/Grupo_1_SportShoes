document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('formulario')
    .addEventListener('submit', validarFormulario)
})

function validarFormulario(evento) {
    evento.preventDefault()
    
    /* FullName */
  var fullName = document.getElementById('fullName').value
  if (fullName.length == 0) {
    alert('No has escrito nada en el usuario')
    return
    }
    
    /* Password */
    var password = document.getElementById('password').value
    const charPass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password)
  if (password.length < 8) {
    alert('La clave no es valida')
    return
  } else if (!charPass){
      alert('La clave debe contener letra mayuscula, minúscula, numero y caracter especial')
    return
  }

    /* Email */
  var email = document.getElementById('email').value
  const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email)
  if (email === '') {
    alert('No has escrito un email')
    return
  } else if (!charEmail) {
    alert('Ingrese un email valido')
    return
    }
    
    /* Avatar */

  this.submit()
}

/* window.addEventListener('load', function () {
    let forms = document.querySelector('#form-register');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let fullName = document.querySelector('#fullName');
    let avatar = document.querySelector('#avatar');

    let pFullName=document.querySelector('#errorFullName')
    let pEmail=document.querySelector('#errorEmail')
    let pPassword=document.querySelector('#errorPassword')
    let pAvatar = document.querySelector('#errorAvatar')
    
    const ValidateFullName = input =>{
        let name = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.value)
        
        if(input.value === ''){
           pFullName.classList.add("mostrar");
           pFullName.innerHTML= "Please write a character"
            input.style.border = "1px solid tomato";
            errors[select.name] = `${select.name} is required`
        }else if((input.value).length<=2 || !name){
           pFullName.classList.add("mostrar");
           pFullName.innerHTML= "The name must have min 2 character";
            input.style.border = "1px solid tomato";
            input.value = "";
            errors[select.name] = `${select.name} invalid`
            alert('[ERROR] El campo debe tener un valor de...');
            
        }else{
            input.classList.remove('invalid');
            input.style.border = "solid 1px white";
           pFullName.classList.remove("show");
           pFullName.classList.add("hidden");
        }
    }

    fullName.addEventListener("blur", function () { ValidateFullName(fullName); })
    
     function ValidationForm() {
        ValidateFullName()
    }

    forms.addEventListener("submit", function(event) {
        ValidationForm()
        if(Object.keys(errors).length) {
            event.preventDefault();
            event.stopPropagation();
            console.log(errors)
        }
        console.log('Autenticación exitosa')
    })
}) */
