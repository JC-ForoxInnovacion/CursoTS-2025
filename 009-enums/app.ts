// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log("Enum ==============================");
  enum AudioLevel {
    min,
    medium,
    max
  }
  
  console.log({AudioLevel}, typeof AudioLevel, Object.keys(AudioLevel).length);
  
  let currentAudio = AudioLevel.min;
  console.log({currentAudio}, typeof currentAudio);

  // No tipado es mutable
  currentAudio = 55;
  console.log({currentAudio}, typeof currentAudio);

  // Tipado es "inmutable"
  currentAudio: AudioLevel = 99;
  console.log({currentAudio}, typeof currentAudio);

})();


(() => {
  console.log("Radio Dial ==============================");

  enum RadioDial {
    "Cadena 100" = 96.5,
    "Rock FM" = 104.7,
    "Los 40" = 99.4
  }

  console.log({RadioDial}, typeof RadioDial, Object.keys(RadioDial).length);

  /**
   * Es posible añadir un elemento al enumerador
   * en dos pasos (*** EN ESTE EJEMPLO ***):
   * 1) Añadiendo la clave alfanumerica con valor en números
   * 2) Añadiendo la clave numérica con valor alfanumérico
   * 
   * OJO: No se incrementa el length del enum
   */
  RadioDial["Manolo FM"] = 100;
  RadioDial[100] = "Manolo FM";

  /**
   * O bien en un solo paso
   * 
   * OJO: No se incrementa el length del enum
   */
  RadioDial[RadioDial["Pepe FM"] = 103] = "Pepe FM";

})();
(() => {
  console.log("Objetos y Arrays ==============================");
  console.log("--- Objeto {}");
  let obj = {
    uno: "Nivel 1",
    dos: "Nivel 2",
    tres: "Nivel 3"
  }
  
  console.log({obj});
  
  console.log("--- Array con índices (clásico)");
  let arrIndices: string[] = ["Nivel 1", "Nivel 2", "Nivel 3"]
  console.log({arrIndices});
  console.log("arrIndices.length:", arrIndices.length);

  console.log(".forEach() ---");
  arrIndices.forEach(e => console.log({e}));

  console.log("for...of ---");
  for (const e of arrIndices) {
    console.log(e, typeof e)
  }

  console.log("for...in ---");
  for (const k in arrIndices) {
    console.log(k, typeof k)
  }

  console.log("--- Array asociativo (como en PHP)");
  /**
   * La longitud en este tipo de Arrays es 0
   */
  let arrAsociativo: string[] = [];
  
  arrAsociativo["uno"] = "Nivel 1";
  arrAsociativo["dos"] = "Nivel 2";
  arrAsociativo["tres"] = "Nivel 3";
  
  console.log({arrAsociativo});
  console.log("arrAsociativo.length:", arrAsociativo.length);

  console.log(".forEach() ---");
  arrIndices.forEach(e => console.log({e}));

  /**
   * Al ser un array asociativo NO se puede recorrer con 
   * for...of
   * 
   * Se recorre con for..in
   * 
   * Si no tiene longitud ¿puedes aplicar una solución con
   * un for clásico?
   */

  console.log("for...of ---");
  for (const e of arrAsociativo) {
    console.log(e, typeof e)
  }

  console.log("for...in ---");
  for (const k in arrAsociativo) {
    console.log(k, typeof k)
  }


})();
