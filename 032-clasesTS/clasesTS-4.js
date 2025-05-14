import { sepLargo } from "./separadores.js";
(() => {
    console.log("******* clasesTS-4.js");
    sepLargo();
    class VehículosConRuedas {
        constructor(tipo, color) {
            this.tipo = tipo;
            this.color = color;
            this.tipo = tipo;
            this.color = color;
        }
    }
    VehículosConRuedas.eje = true;
    VehículosConRuedas.poseeRuedas = true;
    const coche = new VehículosConRuedas('coche', 'rojo');
    console.log({ coche });
    const moto = new VehículosConRuedas('moto', 'verde');
    console.log({ moto });
})();
//# sourceMappingURL=clasesTS-4.js.map