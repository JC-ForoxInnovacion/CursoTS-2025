import { sepCorto, sepLargo } from "./separadores.js";


(()=> {

  interface Persona {
    nombre: string,
    apellidos: string,
    edad?: number | undefined
    nacionalidad?: string[] | undefined,
    direccion: Direccion,
    telefono?: Telefono[] | undefined,

    // Ambas formas son válidas

    // Como propiedad NO puedes usar ":" para el
    // tipo de dato que el método devuelve
    //getCantidadContactos?: () => number | undefined

    // Como método NO puedes usar "=>" para el
    // tipo de dato que devuelve
    getCantidadContactos?(): number | undefined
  }

  interface Direccion {
    calle?: string,
    numero?: string,
    ciudad?: string
  }

  interface Telefono {
      tipo: string,
      numero: number,
      codInt: number
    }

  const jc:Persona = {
    nombre: 'Juan Carlos',
    apellidos: 'Varela Iglesias',
    edad: 53,
    nacionalidad: ['Española', 'Venezolana'],
    direccion: {
      calle: 'Perigos',
      numero: '6',
      ciudad: 'Vigo'
    },
    telefono: [
      {
        tipo: 'Móvil',
        numero: 604039594,
        codInt: 34
      },
      {
        tipo: 'Habitación',
        numero: 986868686,
        codInt: 34
      }
    ],

    getCantidadContactos: () => {return jc.telefono.length}
  }

  const maria: Persona = {
    nombre: 'María Montserrat',
    apellidos: 'Miguez Montesano',
    direccion: {
      calle: 'Perigos',
      numero: '6',
    }
  }


  console.log(maria.telefono);
  console.log(maria.edad);

  console.log(jc.telefono);
  console.log(jc.telefono[0].numero);

  console.log(jc.getCantidadContactos());

})();

