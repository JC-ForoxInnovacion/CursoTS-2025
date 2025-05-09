"use strict";
const paramType = (param) => {
    console.log("param:", param, "->", typeof param);
};
function showFormatMessage(param_obligatorio, param_opcional, param_porDefecto) {
    if (param_porDefecto) {
        console.log(`${param_obligatorio} ${param_opcional}`.toUpperCase());
    }
    else {
        console.log(`${param_obligatorio} ${param_opcional}`);
    }
}
function myFunction(param_obligatorio, param_opcional, param_porDefecto = false) {
    paramType(param_obligatorio);
    paramType(param_opcional);
    paramType(param_porDefecto);
    return { param_obligatorio, param_opcional, param_porDefecto };
}
let resF = myFunction("Hola!", "Carolina");
console.log(resF);
resF = myFunction("Hola!", "Carolina", true);
console.log(resF);
let { param_obligatorio, param_opcional, param_porDefecto } = resF;
console.log(param_obligatorio);
showFormatMessage(param_obligatorio, param_opcional, param_porDefecto);
//# sourceMappingURL=app.js.map