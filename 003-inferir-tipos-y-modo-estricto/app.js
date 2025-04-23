"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
const K = 5; // Se infiere el tipo 
let nombre = "JC"; // Se infiere el tipo 
const L = 10; // Se especifica el tipo
let num = 77; // Se especifica el tipo
/**
 * 200 líneas más abajo vas a agradecer la ayuda de
 * VSCode con el tipado en TypeScript
 *
 * Te recordarás de esto 200 líneas más abajo cuando
 * le dejes el ratón encima de algo que hayas tipado :)
 */
// any
/**
 * Cuando solo inicializas la variable sin tiparla o
 * no especificas el tipo en los parámetros de una
 * función ambas aceptarán cualquier tipo de dato
 * válido  (any)
*/
let c;
function myFunction(param) {
    console.log(param);
}
myFunction("Hola");
