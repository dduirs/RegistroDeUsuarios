"use strict";
var formElement1 = document.forms[0].elements[0];
formElement1.setAttribute("style","color:blue");

var passwordInput = document.getElementById("revealPassword");
var password = document.getElementById("contrasena");
var password2 = document.getElementById("contrasena2");

function ensenarContrasenar(){
    
    if(password.getAttribute("type") == 'password'){
        password.setAttribute("type","text");
        password2.setAttribute("type","text");
    }
    else{
        password.setAttribute("type","password");
        password2.setAttribute("type","password");
    }
}

passwordInput.addEventListener('click',()=>{
    ensenarContrasenar();
});

password2.addEventListener('blur',()=>{
    const errorPassword = document.getElementById("passwordMismatchError");
    errorPassword.textContent = "Password different";
     if(password2.value != password.value){
        password2.setAttribute('isvalid','false');
        // password2.setAttribute('invalid','true');
        password2.setCustomValidity("password mismatch");
        if(password2.getAttribute('isvalid') == 'false'){
            alert("Password mismatch!");
            errorPassword.setAttribute("style","opacity:0.8")
            if(password2.getAttribute("type") == 'password'){
                ensenarContrasenar();
            }
        }
        // password.setAttribute("type","text");
     }
     else{
        errorPassword.setAttribute("style","opacity:0")
        password2.setCustomValidity("");
     }
    });

var formSendBtn = document.getElementById("enviar");
formSendBtn.addEventListener('click',()=>
    {
    // var formValid = true;
    // var a = 0;

        // if(document.forms[0].checkValidity()){
            alert("Los datos han enviado correctamente");c
            // alert("Los datos han enviado correctamente a las "+ new Date().getHours +" y "+ new Date().getMinutes);
        // }
    //     else{
    //         formValid = false;
    //         // break;
    //     }
    //     a++;
    // // for(var element in document.forms[0].elements){
    // //     if(element.checkValidity()){
    // //         alert("Los datos son validos "+a);
    // //     }
    // //     else{
    // //         formValid = false;
    // //         break;
    // //     }
    // //     a++;
    
    // if(formValid){
    //     // alert("Los datos han enviado correctamente");
    //     document.forms[0].requestSubmit(formSendBtn);
    // }
});