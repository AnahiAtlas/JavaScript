/* Ejercicio */

var clasificacion = ["Ana", "Pedro","Mariano","Clara","Axel","Anton"]; //array - arreglo

//Mostrarlo en la página

let position = 1;

document.write("Clasificacion Actual: " + "<br>")

for(let i =0; clasificacion.length; i++ ){
    document.write(`${position++}° - ${clasificacion[i]}`)
};