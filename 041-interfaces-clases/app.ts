import { sepCorto, sepLargo } from "./separadores.js";


(()=> {

interface IPersona {
  nombre: string,
  apellidos: string,
  profesion: string
}

class Persona implements IPersona {

  constructor(
      nombre: string,
      apellidos: string,
      profesion: string
  ) {

    console.log(nombre, apellidos, profesion);
  }

}


const jc = new Persona('JC', 'VI', 'Ingeniero')
})();

