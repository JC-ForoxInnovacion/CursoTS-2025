import * as separadores from './separadores.js'

console.log("Función clasica sin argumentos que accede a una variable del scope superior");

separadores.sepLargo();

(() => {
  const nombrePersona: string = "Cristina"; // Está en el scope superior de la función
  
  function returnName(): string {
    return nombrePersona // Se puede alcanzar 
  }

  separadores.sepCorto()

  const consultarAyuda = (): string => {
    return "Consuta realizada"
  }

  console.log("consultarAyuda", typeof consultarAyuda);

  let res: string = consultarAyuda()

  console.log({res}, typeof res);
})();
