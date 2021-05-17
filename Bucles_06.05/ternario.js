


//variable con ternario - estructura //

//let resultado = (condition) ? "verdadero": "falso";

/* var menor = (100 < 50) ? "Es menor" : "Es mayor";
console.log(menor);
 *///------------------------------------------------------------------------------------------------//
let numero = 100;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);
//------------------------------------------------------------------------------------------------//
 
 let edad = prompt("Ingresa tu edad: ");

edad > 18 ? (
    alert ("Adelante."),
    //location.assign ("socio.html")
    window.location.href = "socio.html"
) : (
    alert("Lo siento, no puedes seguir."),
    window.location.href = "error.html"
    //,    location.assign('error.html);
);