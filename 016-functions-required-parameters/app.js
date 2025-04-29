// import { sepCorto, sepLargo } from "./separadores.js";
import * as sep from './separadores.js';
sep.sepCorto();
function isEmptyStringParam(param) {
    if (param.length > 0) {
        return true;
    }
    else {
        return false;
    }
    // return param.length > 0;
}
const fullName = ((firstName, lastName) => {
    let resEvalName = {
        firstName: isEmptyStringParam(firstName),
        lastName: isEmptyStringParam(lastName),
    };
    return `${firstName} ${lastName}`;
});
let res = fullName("JC", "Varela Iglesias");
console.log({ res });
if (!firstName || !lastName) {
    throw new Error('Nombre y/o Apellido requeridos');
}
