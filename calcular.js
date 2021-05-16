

var numero_1;
var numero_2;
var suma;
var resta;
var multiplicacion;
var division;
var resultado;


//Sintaxis de una función de HTML//

function inicio() { 
    numero_1 = prompt ("Ingrese un número: ");
    numero_2 = prompt ("Ingrese otro número: ");

    numero_1 = parseFloat (numero_1);
    numero_2 = parseFloat (numero_2);
}

numero_1 = 1
numero_1 = 4

function sumar() {
    //Sintaxis del IF else//
    if (numero_1 == undefined || numero_2 == undefined){
        alert ("Por favor ingrese un número. Haga click en Iniciar.")
        inicio()
    }else {
        suma = numero_1 + numero_2;
        document.getElementById("resultado").innerHTML = ("El resultado de la suma es: " + suma);
    } 
}

function restar() {
    //Sintaxis del IF else//
    if (!numero_1 || !numero_2){
        //alert ("Por favor ingrese un número. Haga click en Iniciar.");
    }else {
        resta = numero_1 - numero_2;
        document.getElementById("resultado").innerHTML = ("El resultado de la resta es: " + resta);
    }
}

function multiplicar() {
    //Sintaxis del IF else//
    if (!numero_1 || !numero_2){
        //alert ("Por favor ingrese un número. Haga click en Iniciar.");
    }else {
        multiplicacion = numero_1 * numero_2;
        document.getElementById("resultado").innerHTML = ("El resultado de la multiplicación es: " + multiplicacion);
    }
}

function dividir() {
    //Sintaxis del IF else//
    if (!numero_1 || !numero_2){
        //alert ("Por favor ingrese un número. Haga click en Iniciar.");
    }else {
        division = numero_1 / numero_2;
        document.getElementById("resultado").innerHTML = ("El resultado de la división es: " + division);
    }
}



//let resultado = document.getElementById ('resultado'); //Obtengo el elemento de HTML//
//Escribo en el archivo HTML//
//resultado.innerHTML = "El resultado de la operación es: ";
