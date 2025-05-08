"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
/**
 * Es usual encapsular dentro de funciones, en
 * este ejemplo, anónimas autoinvocados con la
 * finalidad de que las variables permanezcan
 * dentro del ámbito de la función y no sean
 * accesibles desde el ámbito global (ventana)
 */
(() => {
    let myBoolean = true;
    console.log({ myBoolean });
    myBoolean = (5 + 2) > 0;
    console.log('( 5 + 2 ) > 0', { myBoolean });
    myBoolean = (5 + 2) < 0;
    console.log('( 5 + 2 ) < 0', { myBoolean });
    myBoolean = ("1" == 1);
    console.log('("1" == 1):', { myBoolean });
    myBoolean = ("1" === 1);
    console.log('("1" === 1):', { myBoolean });
})();
//# sourceMappingURL=app.js.map