import { sepCorto, sepLargo } from "./separadores.js";


(()=> {

interface IPersona {
  nombre: string,
  apellidos: string,
  profesion: string,
}

interface IProfesion {
  getProfesion(): void,
}


// Puedes implementar una o más interfaces
class Persona implements IPersona, IProfesion {

  
  // Método 1: Constructor con propiedades de
  // la interface

  /**
   * Para eliminar el error de implementación de
   * la interface Persona las propiedades en el
   * constructor deben levar 'public' explícitamete
   */
  
  
  // constructor(
  //     public nombre: string,
  //     public apellidos: string,
  //     public profesion: string
  // ) {

  //   console.log(nombre, apellidos, profesion);
  // }



  // Método 2: Declaración explícita de las 
  // propiedades establecidas en la interface 
  // como propiedades de clase 


  nombre: string;
  apellidos: string;
  profesion: string;
  
  constructor( nomb: string, apel: string, prof: string) {
    this.nombre = nomb;
    this.apellidos = apel;
    this.profesion = prof;


    // console.log(nomb, apel, prof); // parámetros
    
    
    // console.log(this.nombre, this.apellidos, this.profesion); // propiedades de clase
  }

  getProfesion(): void {
    console.log(`${this.nombre} ${this.apellidos} es ${this.profesion}` );
  } 

}


const jc = new Persona('JC', 'VI', 'Ingeniero')
jc.getProfesion();
})();

