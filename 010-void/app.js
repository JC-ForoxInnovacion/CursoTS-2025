"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
/**
 * Función tradicional
 * @param none
 * @returns void
 */
function noRetorna() {
    return;
    // return undefined;
    // return null;
    // return false;
}
let res;
res = noRetorna();
console.log({ res }, typeof res);
/**
 * Función anónima
 * @param none
 * @returns void
 */
let funcion = () => {
    return;
};
console.log({ funcion }, typeof funcion);
res = funcion();
console.log({ res }, typeof res);
/**
 * Función anónima autoejecutada
 *
 * @param none
 * @returns ¿A quíen le retorna algo?
 *
 * @Nota Al ser una función anónima autoejecutada
 *       no se ha invocado con la asignación de
 *       una variable, por lo tanto no puedes capturar
 *       el "return"
 */
(() => {
    return;
})();
/**
 * Función anónima autoejecutada
 *
 * @param none
 * @returns void
 *
 * @Nota Otro gallo cantaría si la asignas a
 *       una variable
 */
res = (() => {
    return;
})();
console.log({ res }, typeof res);
//# sourceMappingURL=app.js.map