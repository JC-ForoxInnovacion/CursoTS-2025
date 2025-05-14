import { sepCorto, sepLargo } from "./separadores.js";

(() => {

  console.log("******* clasesTS-3.js");
  sepLargo();

  class VehículosConRuedas {
    private poseeRuedas: boolean;
    public tipo: string;

    constructor(tipo:string, poseeRuedas?:boolean) {
      this.poseeRuedas = true;
      this.tipo = tipo; 
    }

  }

  const coche = new VehículosConRuedas('coche');
  console.log({coche});


  const moto = new VehículosConRuedas('moto');
  console.log({moto});
})();


