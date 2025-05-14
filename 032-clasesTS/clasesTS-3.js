import { sepLargo } from "./separadores.js";
(() => {
    console.log("******* clasesTS-3.js");
    sepLargo();
    class VehículosConRuedas {
        constructor(tipo, poseeRuedas) {
            this.poseeRuedas = true;
            this.tipo = tipo;
        }
    }
    const coche = new VehículosConRuedas('coche');
    console.log({ coche });
    const moto = new VehículosConRuedas('moto');
    console.log({ moto });
})();
//# sourceMappingURL=clasesTS-3.js.map