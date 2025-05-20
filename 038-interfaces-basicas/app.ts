import { sepCorto, sepLargo } from "./separadores.js";


(()=>{

  interface Persona {
    primerNombre: string;
    segundoNombre: string | boolean;
    primerApellido: string;
    segundoApellido: string | boolean;
    
    getNombreCompleto: (
      pn?: string, 
      sn?: string | boolean, 
      pa?: string, 
      sa?: string | boolean
    ) => string;
  }

  let maria: Persona = {
    primerNombre: 'María',
    segundoNombre: false,
    primerApellido: 'Martínez',
    segundoApellido: 'Montes de Oca',

    getNombreCompleto: (
      pn = maria.primerNombre,
      sn = maria.segundoNombre,
      pa = maria.primerApellido,
      sa = maria.segundoApellido
     ) => {
      let nombre_completo = '';

      if (pn) {
        nombre_completo = pn;
      }

      if (sn) {
        nombre_completo = nombre_completo + ' ' + sn
      }

      if (pa) {
        nombre_completo = nombre_completo + ' ' + pa
      }

      if (sa) {
        nombre_completo += ' ' + sa
      }
      
      return nombre_completo
    }

  }
  
  console.log(maria.getNombreCompleto());


})();

