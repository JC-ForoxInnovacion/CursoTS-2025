// import { sepCorto, sepLargo } from "./separadores.js";
function isEmptyStringParam(param) {
    return param.length > 0 && param !== 'null'; // true | false
}
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
function errorEvaluation(boolFirstName, boolLastName) {
    if (!boolFirstName && !boolLastName) {
        return "Falta nombre y apellidos";
    }
    else if (!boolFirstName) {
        return "Falta nombre";
    }
    else if (!boolLastName) {
        return "Falta apellidos";
    }
}
function showMessage(msg) {
    console.log(msg || "no Message"); // <= opcional :))))
}
let firstName;
let lastName;
let cont;
let res;
let strFirstName;
let strLastName;
//do {
// Solicitar datos al usuario
firstName = prompt('Nombre:');
lastName = prompt('Apellido:');
strFirstName = String(firstName);
strLastName = String(lastName);
// Construimod objeto con validación
let resEvalName = {
    boolFirstName: isEmptyStringParam(strFirstName),
    boolLastName: isEmptyStringParam(strLastName),
};
console.log(resEvalName);
if (resEvalName.boolFirstName && resEvalName.boolLastName) {
    res = fullName(strFirstName, strLastName);
}
else {
    // throw new Error("Cuñao!, esto ha petao!!!");
    res = errorEvaluation(resEvalName.boolFirstName, resEvalName.boolLastName);
    showMessage(res);
}
showMessage();
export {};
//cont = prompt('Desea continuar [s/n]')
//} while (cont === 's' || cont === 'S');
/**
 * Alternativa para evaluar los parámetros vacíos arrojando
 * un error y deteniendo la aplicación
 *
 * if (!firstName || !lastName) {
 *   throw new Error('No has proporcionado nombre y/o apellidos')
 * }
 */
