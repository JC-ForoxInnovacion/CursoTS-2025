import { sepCorto, sepLargo } from "./separadores.js";


(()=>{

  class Nombre {

    static instance:Nombre;

    /**
     * El constructor privado SOLO puede ser
     * llamado desde la clase
     */
    private constructor(public firstName: string) {


      /**
       * Sino declaramos como public las
       * propiedades en el constructor
       * con:
       *  console.log({jcvi});
       * 
       * Vamos a obntener:
       * 
       * {jcvi: Nombre}
       *  jcvi: Nombre
       *    [[Prototype]]: Object
       *  [[Prototype]]: Object
       */

      console.log('Nombre en constructor', Nombre.instance);
    
    }

    static callNombre(nombre: string): Nombre {

      if (!Nombre.instance) {
        Nombre.instance = new Nombre(nombre)
        console.log('Nombre en callNombre', Nombre.instance);
      } else {
        console.log('La instancia ya existe');
      }


      return Nombre.instance;
    }

    static changeFirstName(nombre: string) {
      Nombre.instance.firstName = nombre;
    }
  }

  let jc = Nombre.callNombre('José Carlos');
  console.log(typeof jc);
  
  const cd = Nombre.callNombre('Carmen');

  const oi = Nombre.changeFirstName('Olga');
  
  Nombre.changeFirstName('Juan Carlos');
  console.log({jc});


})();

