import { sepCorto, sepLargo } from "./separadores.js";


(()=>{

  class Persona {
    constructor(
      public nombre:string,
      public apellido: string) {
    }
  }

  class PersonaX {
    public nombre: string = '';

    // Posee un constructor vacío 
    // o
    // no posee constructor


    constructor() {}

    public decirHola(): void {
      console.log('te digo Hola');
    }

    public setNombre(nombre:string): void {
      this.nombre = nombre;
    }

    public getNombre(): string {
      return this.nombre;
    }
  }


  const luisa = new Persona('Luisa', 'López');
  console.log({luisa});
  
  let carmen: Persona; 
  console.log({carmen}); // undefined

  carmen = new Persona('Carmen', 'Cedeño')
  console.log({carmen});

  // Instancia de clase con constructor vacío
  const manoloX = new PersonaX();
  console.log({manoloX});
  manoloX.decirHola()

  manoloX.setNombre('ManoloX');

  let res = manoloX.getNombre();
  console.log(res);
})();

