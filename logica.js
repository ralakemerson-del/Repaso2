let numero1=document.getElementById("numero1")
let numero2=document.getElementById("numero2")
let resultado1=document.getElementById("resultado1")
let boton=document.getElementById("boton")

boton.addEventListener("click", resultado)

function resultado(){

    let suma
    

   numero=Number(numero1.value)
   numero3=Number(numero2.value)

    suma=numero+numero3

    resultado1.textContent=(suma)

}