/* Definir 2 constantes, usuario + password, asignar valor administrador y 1234 respectivamente*/

const validarUsuario = "admin";
const validarPassword = "123456";

/* Consultarle al usuario sus datos */

/* let validarUsuario = prompt ("Ingrese su usuario: ");
let validarPassword = prompt ("Ingrese su password: ");
 */
/* Verificar las credenciales del usuario */
/*function usuario(validarUsuario, validarPassword) {*/
/*}*/

function click(event){
    event.preventDefault();

    const Usuario = document.getElementById ('usuario').value;
    const Password = document.getElementById ('password').value;

    if(validarUsuario == usuario && validarPassword == password){
        window.location.href = "Inicio.html";
}else {
    document.getElementById ('error').innerHTML = "<span> Usuario o contraseña invalida </span>";
}
}