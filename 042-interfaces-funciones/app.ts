import { sepCorto, sepLargo } from "./separadores.js";


(()=> {
  // Función de flecha
  interface agregarDosNombres {
    ( primerNombre: string, segundoNombre: string): string 
  }

  let funcionAgregarDosNombres: agregarDosNombres;

  funcionAgregarDosNombres = (primerNombre: string, segundoNombre: string) => {
    return primerNombre + ' ' + segundoNombre
  }

  let res = funcionAgregarDosNombres('Luis', 'Alfredo')
  console.log(res);


  // Función Nombrada
  interface agregarDosApellidos {
    funcionAgregarDosApellidos(primerApellido: string, segundoApellido: string): string
  }

  function funcionAgregarDosApellidos(primerApellido: string, segundoApellido: string) {
    return primerApellido + ' ' + segundoApellido
  }

})();
