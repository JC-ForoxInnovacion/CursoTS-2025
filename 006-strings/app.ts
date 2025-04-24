// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  // Inferencia de tipo
  const KONSTANTE1 = 'Inferencia de tipo';
  const KONSTANTE2 = "Inferencia de tipo";
  const KONSTANTE3 = `Inferencia de tipo`;

  const KONSTANTE4:string = 'Tipado explícito';
  const KONSTANTE5:string = "Tipado explícito";
  const KONSTANTE6:string = `Tipado explícito`;

  /**
   * Arrija error ya que no puedes aplicar
   * .upperCase() a un dato de tipo undefined
   */
  //console.log(KONSTANTE4[99].toUpperCase());

/**
 * Utilizando el "operador de propiedad opcional" / "operador de 
 * encadenamiento opcional"
 */
  console.log(KONSTANTE4[99]?.toUpperCase());

/**
 * Operador de propiedad opcional y OR
 */

let i:number = 99;
console.log(KONSTANTE4[i]?.toUpperCase() || `No existe la posición [${i}]`);

console.log(KONSTANTE4[i]?.toUpperCase() || null);

console.log(KONSTANTE4[i]?.toUpperCase() || -1);

/**
 * NOTA: Aplica el primer false o el último true
 * 
 * Prueba a cambiar: 
 * i = 4; 
 * e 
 * i = 99;  
 */ 
console.log(KONSTANTE4[i]?.toUpperCase() && " quién lo diría!");
})();