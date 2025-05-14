import { sepCorto, sepLargo } from "./separadores.js";

(() => {

  console.log("******* clasesTS-4.js");
  sepLargo();

  /**
   * Forma corta de inicializar propiedades
   * 
   * Se hace directamente desde el constructor,
   * a excepción de las propiedades estáticas
   */
  class VehículosConRuedas {
    // private poseeRuedas: boolean;
    // public tipo: string;
    // public color: string;
    static eje: boolean = true;
    static poseeRuedas: boolean = true;

    constructor(
      public tipo: string,
      public color: string,
    ) {
      this.tipo = tipo;
      this.color = color; 
    }
  }

  const coche = new VehículosConRuedas('coche', 'rojo');
  console.log({coche});


  const moto = new VehículosConRuedas('moto', 'verde');
  console.log({moto});
})();


