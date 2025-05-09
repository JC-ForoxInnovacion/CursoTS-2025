import * as sep from './separadores.js';
sep.sepCorto();
function isValidStringParam(param) {
    return param.length > 0 && param !== 'null';
}
const fullName = (firstName, lastName) => {
    let resEvalName = {
        boolFirstName: isValidStringParam(firstName),
        boolLastName: isValidStringParam(lastName),
    };
    console.log("resEvalName:", resEvalName);
    if (resEvalName.boolFirstName && resEvalName.boolLastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        if (!resEvalName.boolFirstName && !resEvalName.boolLastName) {
            return 'No has proporcionado ni el nombre ni el apellido';
        }
        else if (!resEvalName.boolFirstName) {
            return 'No has proporcionado el nombre';
        }
        else if (!resEvalName.boolLastName) {
            return 'No has proporcionado el apellido';
        }
    }
    return 'No se han producido errores';
};
let firstName;
let lastName;
let cont;
let res;
do {
    firstName = String(prompt('Nombre:'));
    lastName = String(prompt('Apellido:'));
    res = fullName(firstName, lastName);
    console.log(res);
    cont = prompt('Desea continuar [s/n]');
} while (cont === 's' || cont === 'S');
//# sourceMappingURL=app.js.map