/* Mostrar 3 numeros por consola, cual es el mayor y cual es el menor */

let numero_1, numero_2, numero_3;

numero_1 = prompt ("Ingrese 1 número para comparar: ");
numero_2 = prompt ("Ingrese el siguiento número: ");
numero_3 = prompt ("Ingrese el número final: ");

numero_1 = parseInt (numero_1);
numero_2 = parseInt (numero_2);
numero_3 = parseInt (numero_3);

/* Obtenemos el número mayor */
    if(numero_1 > numero_2 && numero_1 > numero_3) {
    console.log("El número 1 es el mayor = " + numero_1);
}else if (numero_1 < numero_2 && numero_2 > numero_3){
    console.log("El número 2 es el mayor = " + numero_2);
}else //if (numero_1 < numero_3 && numero_3 > numero_2)
{    console.log("El número 3 es el mayor = " + numero_3);
}

/* Obtenemos el número menor */
if(numero_1 < numero_2 && numero_1 < numero_3) {
    console.log("El número 1 es el menor = " + numero_1);
}else if (numero_1 > numero_2 && numero_2 < numero_3){
    console.log("El número 2 es el menor = " + numero_2);
}else //if (numero_1 < numero_3 && numero_3 > numero_2)
{    console.log("El número 3 es el menor = " + numero_3);
}
