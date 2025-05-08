"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
function tipoDato(param) {
    return typeof param;
}
function construirMensaje(data, res) {
    return `"${data}" es de tipo ${res}`;
}
(() => {
    let data;
    let res;
    data = "Tipo string";
    data = true;
    data = 123;
    data = null;
    data = undefined;
    // data = Symbol('MiSimbolo');
    // data = [1,2,3,4,5];
    // data = {key1: "Valor 1", key2: "Valor 2" };
    res = tipoDato(data);
    console.log(construirMensaje(data, res));
    data = 1234567;
    res = tipoDato(data);
    console.log(construirMensaje(data, res));
    let dataString;
    console.log('--- variable as string');
    dataString = data;
    console.log({ dataString });
    res = tipoDato(dataString);
    console.log(construirMensaje(data, res));
    // console.log(dataString.charAt(0)); // Error ya que no se efectúa Casting
    console.log('--- <string>variable');
    dataString = data;
    console.log({ dataString });
    res = tipoDato(dataString);
    console.log(construirMensaje(data, res));
    console.log(dataString.charAt(2));
    console.log('--- String() Rating: 🌟🌟🌟🌟🌟 by JC');
    dataString = String(data);
    console.log({ dataString });
    res = tipoDato(dataString);
    console.log(construirMensaje(data, res));
    console.log(dataString.charAt(2));
})();
//# sourceMappingURL=app.js.map