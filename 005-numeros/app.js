"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
let verdes;
let rojos = 7;
/**
 * Al no especificar el tipo de verdes  vamos a obtener este error
 *  'verdes' is possibly 'undefined'.ts(18048)
 *  let verdes: undefined
 */
verdes = 11;
// verdes = "10";
// verdes = "Hola"; // string vacío = false en cualquier otro
// caso es true (no importa el tamaño del
// string)
// verdes = "Hola a todos los integrantes del equipo verde";
if (verdes > rojos) {
    console.log("verdes > rojos");
}
else if (verdes === rojos) {
    console.log("verdes = rojos");
}
else {
    console.log("verdes < rojos");
}
/**
 * Casting
 *
 * NaN (not a number) se considera un número pero no posee
 * un valor computable válido para un número.
 */
let personas = 0;
console.log({ personas });
personas = Number(true);
console.log({ personas });
personas = Number(false);
console.log({ personas });
personas = Number("Hola");
console.log({ personas });
personas = Number(5 + 5);
console.log({ personas });
personas = Number(5 + "5A");
console.log({ personas });
