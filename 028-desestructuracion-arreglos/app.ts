import { sepCorto, sepLargo } from "./separadores.js";

(()=> {

  type Arr = string[];

  const miArr: Arr  = ['La Coruña', 'Lugo', 'Orense', 'Pontevedra'];

  console.log({miArr});


  /**
   * Podemos desestructurar TODOS los elementos
   * o algunos de ellos, posicionalmente y separados
   * por coma (,) 
   */
  let [ , provLugo, , provPonte ] = miArr;

  console.log({provLugo});
  console.log({provPonte});
})()