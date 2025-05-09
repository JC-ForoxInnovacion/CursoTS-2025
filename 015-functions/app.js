import * as separadores from './separadores.js';
console.log("Función clasica sin argumentos que accede a una variable del scope superior");
separadores.sepLargo();
(() => {
    const nombrePersona = "Cristina";
    function returnName() {
        return nombrePersona;
    }
    separadores.sepCorto();
    const consultarAyuda = () => {
        return "Consuta realizada";
    };
    console.log("consultarAyuda", typeof consultarAyuda);
    let res = consultarAyuda();
    console.log({ res }, typeof res);
})();
//# sourceMappingURL=app.js.map