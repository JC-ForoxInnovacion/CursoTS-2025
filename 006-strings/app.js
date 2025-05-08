"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
(() => {
    var _a, _b, _c, _d, _e;
    // Inferencia de tipo
    const KONSTANTE1 = 'Inferencia de tipo';
    const KONSTANTE2 = "Inferencia de tipo";
    const KONSTANTE3 = `Inferencia de tipo`;
    const KONSTANTE4 = 'Tipado explícito';
    const KONSTANTE5 = "Tipado explícito";
    const KONSTANTE6 = `Tipado explícito`;
    /**
     * Arrija error ya que no puedes aplicar
     * .upperCase() a un dato de tipo undefined
     */
    //console.log(KONSTANTE4[99].toUpperCase());
    /**
     * Utilizando el "operador de propiedad opcional" / "operador de
     * encadenamiento opcional"
     */
    console.log((_a = KONSTANTE4[99]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    /**
     * Operador de propiedad opcional y OR
     */
    let i = 99;
    console.log(((_b = KONSTANTE4[i]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || `No existe la posición [${i}]`);
    console.log(((_c = KONSTANTE4[i]) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || null);
    console.log(((_d = KONSTANTE4[i]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || -1);
    /**
     * NOTA: Aplica el primer false o el último true
     *
     * Prueba a cambiar:
     * i = 4;
     * e
     * i = 99;
     */
    console.log(((_e = KONSTANTE4[i]) === null || _e === void 0 ? void 0 : _e.toUpperCase()) && " quién lo diría!");
})();
//# sourceMappingURL=app.js.map