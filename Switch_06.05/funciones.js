//Funcion que necesita parametro o argumento o información
function calcularPrecioTotal(precio){
    var impuestos = 1.16;
    var gastosDeEnvios = 10;
    var PrecioTotal = (precio * impuestos) + gastosDeEnvios;
    console.log (PrecioTotal);
}
calcularPrecioTotal(23.34)




const user0 = {
    nombre: "Marcelo",
    apellido: "Lopez",
    edad: 50,
    nacionalidad: "Argentino",
    hijos: ['María' , 'Francisco' , 'Laura'],
    saludo: function saludar() {
        alert(`Hola, soy ${this.nombre}`)
    }
);


//Funcion constructora
function usuarios(nombre, apellido, edad, nacionalidad , hijos){ //Información para la función
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.hijos = hijos;
}

//Utilizamos la función constructora para crear usuarios
let altaUser1 = new usuarios('Maria','Lopez',40,'Argentina',[]);
let altaUser2 = new usuarios('Lorenzo','Suarez',23,'Argentina',[]);
let altaUser3 = new usuarios('Perla','Ruiz',52,'Argentina',['David','Sofia','Nehuen','Magalí']);
let altaUser4 = new usuarios('Ruben','Rosales',19,'Argentina',['Martín', 'Lucas']);
let altaUser5 = new usuarios('Soledad','Castello',36,'Argentina',[]);

//Creamos el array para guardar los datos de los usuarios
const personas = [];

//Introducimos los datos dentro del array
personas.push(user0);
personas.push(altaUser1);
personas.push(altaUser2);
personas.push(altaUser3);
personas.push(altaUser4);
personas.push(altaUser5);

//Imprimir los datos de los usuarios por la pantalla
personas.forEach(element => {
    document.write(`Nombre: ${element.nombre},<br>
                    Apellido: ${element.apellido},<br>
                    Edad: ${element.edad}, <br>
                    Nacionalidad: ${element.nacionalidad},<br>
                    if(hijos == 0){
                        Hijos: ${element.hijos},<br>`)
                    }
                    ;
)};

for (const iterator of personas) {
    document.write(`${iterator.nombre + " "};
}