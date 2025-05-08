"use strict";
(() => {
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    // error("Auxilio)");
    let res = error("Auxilio)");
    console.log({ res }, typeof res);
})();
//# sourceMappingURL=app.js.map