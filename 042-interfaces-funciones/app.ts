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
  //============
  interface agregarDosApellidos {
    (primerApellido: string, segundoApellido: string): string
  }

  let miFuncion: agregarDosApellidos = function funcionAgregarDosApellidos(primerApellido: string, segundoApellido: string) {
    return primerApellido + ' ' + segundoApellido
  }

  console.log(miFuncion('Alberto', 'Alvarez'));



  //============
  interface agregarDosApellidos2 {
    funcionAgregarDosApellidos2(
      primerApellido: string, 
      segundoApellido: string): string;
  }

  const obj: agregarDosApellidos2 = {
    funcionAgregarDosApellidos2(primerApellido, segundoApellido) {
      return primerApellido + ' ' + segundoApellido;
    } 
  };

  console.log(obj.funcionAgregarDosApellidos2('Gómez', 'Pérez'));

})();
