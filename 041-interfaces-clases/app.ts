import { sepCorto, sepLargo } from "./separadores.js";


(()=> {

interface IPersona {
  nombre: string,
  apellidos: string,
  profesion: string
}

class Persona implements IPersona {

  constructor(
      public nombre: string,
      public apellidos: string,
      public profesion: string
  ) {

    console.log(nombre, apellidos, profesion);
  }


  // nombre: string;
  // apellidos: string;
  // profesion: string;
  
  // constructor( nomb: string, apel: string, prof: string) {
  //   this.nombre = nomb;
  //   this.apellidos = apel;
  //   this.profesion = prof;


  //   console.log(nomb, apel, prof); // parámetros
    
    
  //   console.log(this.nombre, this.apellidos, this.profesion); // propiedades de clase
  // }

}


const jc = new Persona('JC', 'VI', 'Ingeniero')
})();

