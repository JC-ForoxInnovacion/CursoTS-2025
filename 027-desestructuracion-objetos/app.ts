import { sepCorto, sepLargo } from "./separadores.js";

(()=> {

  type Persona = {
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    estatura: number,
    peso: number,
    escribe: boolean
  }

  const persona: Persona = {
    primerNombre: 'Juan',
    segundoNombre: 'Carlos',
    primerApellido: 'Varela',
    segundoApellido: 'Iglesias',
    estatura: 1.71,
    peso: 100,
    escribe: true
  }

  let {primerNombre, estatura, escribe} = persona

  console.log({primerNombre});
  console.log({estatura});
  console.log({escribe});

  /**
   * Accediendo a las propiedades de un objeto tipado 
   * en una función 
   */
  sepCorto();

  const show1Persona = (persona: Persona): void => {
    console.log(persona.primerApellido);
  }

  show1Persona(persona);


  /**
   * Desestructuración de argumentos
   */
  sepCorto();
  const show2Persona = ({estatura, escribe} = persona):void => {
    console.log({estatura});
    console.log({escribe});
  }

  show2Persona(persona);


  /**
   * Desestructuracion con el operador ...rest
   */
  sepCorto();

  const show3Persona = ({primerNombre, segundoNombre, ...rest} = persona): void => {
    console.log({estatura});
    console.log({escribe});
    console.log({rest});
  }

  show3Persona(persona);
})()