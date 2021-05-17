//Ejercicio

var clasificacion = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"]; //Array - arreglo

//Mostrarlos en la página
let position = 1;
document.write ("Clasificacion Actual: " + "<br>");
for(let i = 0; i < clasificacion.length; i++) { //i es una variable iterador
    //console.log(`${position++}° = ${clasificacion[i]}`) // Para verlo por consola (quokka)
    document.write(`${position++}° = ${clasificacion[i]}`) //Para imprimir variables `` comillas francesas y $ signo pesos. Los signos ++ se usan para agregar el nro siguiente
};

/* for (const ciclo of clasificacion){
    document.write(`${position++}° = ${clasificacion[ciclo]}`)
}
 */
