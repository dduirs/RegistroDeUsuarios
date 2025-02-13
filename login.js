// "use strict";   // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
                // With strict mode, you can not, for example, use undeclared variables.

// alert("Entra tus detalles para registrar usuario nuevo.");

// usar POST no GET

"use strict";
var formElement1 = document.forms[0].elements[0];
formElement1.setAttribute("style","color:blue");

// var miVentana;
// function abrir() { miVentana = window.open( "", "Log in",
//     "height=200,width=700,location=yes,resizable=yes,scrollbars=yes" );
// }
// abrir();

// confirm("Do you want to log in? "+location.pathname);


var passwordLogin = document.getElementById("contrasena");
passwordLogin.setAttribute("style","color:green");

var passwordView = document.getElementById("revealPassword");
var password = document.getElementById("contrasena");

function ensenarContrasenar(){
    
    if(password.getAttribute("type") == 'password'){
        password.setAttribute("type","text");
        passwordView.firstElementChild.innerHTML = `<path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17
            2.17c.47-.14.96-.24 1.47-.24ZM3.42 2.45 2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43
            1.41-1.41L3.42 2.45ZM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14
            16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z" fill="currentColor"></path>`;
    }
    else{
        password.setAttribute("type","password");
        passwordView.firstElementChild.innerHTML = `<path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24
            5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" fill="currentColor"></path>`;
    }
}

passwordView.addEventListener('click',()=>{
    ensenarContrasenar();
});

var email = document.getElementById("correo");

// document.addEventListener('load',()=>{
//     passwordLogin.setAttribute("hidden");
// });

email.addEventListener('blur',()=>{
    passwordLogin.setAttribute("style","opacity:1");
    passwordView.setAttribute("style","opacity:1");
});



// TODO: show welcome message using Username from LocalStorage.



// password2.addEventListener('blur',()=>{
//     const errorPassword = document.getElementById("passwordMismatchError");
//     errorPassword.textContent = "Password different";
//      if(password2.value != password.value){
//         password2.setAttribute('isvalid','false');
//         // password2.setAttribute('invalid','true');
//         password2.setCustomValidity("password mismatch");
//         if(password2.getAttribute('isvalid') == 'false'){
//             alert("Password mismatch!");
//             errorPassword.setAttribute("style","opacity:0.8")
//             if(password2.getAttribute("type") == 'password'){
//                 ensenarContrasenar();
//             }
//         }
//      }
//      else{
//         errorPassword.setAttribute("style","opacity:0")
//         password2.setCustomValidity("");
//      }
//     });

    // Note: Input restrictions are not foolproof, and JavaScript provides many ways to add illegal input. 
    // To safely restrict input, it must also be checked by the receiver (the server)! 

// var formSendBtn = document.getElementById("enviar");
// formSendBtn.addEventListener('click',()=>
//     {
//     alert("Los datos han enviado correctamente");
// });

var formSendBtn = document.getElementById("enviar");
formSendBtn.addEventListener('click',()=>
    {
        if(document.forms[0].checkValidity()){
            alert("Los datos han enviado correctamente");
            // alert("Los datos han enviado correctamente a las "+ new Date().getHours +" y "+ new Date().getMinutes);
        }
});

document.addEventListener("DOMContentLoaded", function () {
    passwordLogin.setAttribute("style","opacity:0");
    passwordView.setAttribute("style","opacity:0");
    // alert("page loaded");
});