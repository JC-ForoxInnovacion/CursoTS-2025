// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  /**
   * Tipado explícito
   */
  let things: (number | string | boolean | undefined | null)[];

  things = [1, "un string", true, undefined, null];

  console.log({things});

  /**
   * Tipado implícito
   * 
   *    let numbers: (string | number)[]
   */
  let numbers = [0, 1, 2, "3", 4, 5, 6, 7]

  /**
   * Ejemplo con tipado explicito y .forEach()
   */
  let arrStrings: string[] = ["persona 1", "persona 2", "persona 3"];

  console.log('----');
  // arrStrings.forEach((string) => {console.log(string.toLowerCase())});
  // arrStrings.forEach((string) => console.log(string.toLowerCase()));
  arrStrings.forEach(string => console.log(string.toUpperCase()));
})();

