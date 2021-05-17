//Ejercicio

var clasificacion = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"]; //Array - arreglo

//Mostrarlos en la página - El bucle FOR recorre una a una las variables que coloco en el array
let position = 1; // Como ARRAY siempre comienza en 0 nosotros le decimos al código que DEBE empezar en 1
document.write ("Clasificacion Actual: " + "<br>");
for(let i = 0; i < clasificacion.length; i++) { //i es una variable iterador
    //console.log(`${position++}° = ${clasificacion[i]}`) // Para verlo por consola (quokka)
    document.write(`${position++}° = ${clasificacion[i]} <br> <hr>`) //Para imprimir variables `` comillas francesas y $ signo pesos. Los signos ++ se usan para agregar el nro siguiente
};


//FOROF
let valor = 1;
//Ejercicio donde CLARA se adelanta a MARIANO - Dentro de los corchetes ponemos el valor que deseamos asignar a cada persona//
clasificacion[2] = "Clara";
clasificacion[3] = "Mariano";
//Ejercicio donde CLARA se adelanta a MARIANO//
document.write ("Bucle con ForOf: " + "<br>");
for (const ciclo of clasificacion){
    document.write(`${valor++}° = ${ciclo} <br> <hr>`)
}


//Ejercicio ANTON es descalificado del concurso
clasificacion.pop(); //la opción POP elimina al último de la lista de arrays

//Agregamos al concurso a ROBERTO y ANALIA
clasificacion.splice(1,0,"Roberto", "Analia");

//Agregamos a Marcela al concurso
//clasificacion.splice(0,0,["Marcela"]);
clasificacion.unshift("Marcela");

//FOREACH
let otro = 1;
document.write ("Bucle con ForEach: " + "<br>");
clasificacion.forEach(element => {
    document.write(`${otro++}° = ${element} <br> <hr>`)
});