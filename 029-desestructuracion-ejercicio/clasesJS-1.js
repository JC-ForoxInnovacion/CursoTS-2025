import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log('******* ClasesJS-1.js');
  sepLargo();

  
  class Persona {
    nombre;
    apellido;

    constructor(firstName = 'Sin nombre', lastName = 'Sin apellido') {
      this.nombre = firstName;
      this.apellido = lastName
    }
  }

  class TrabajoPersona extends Persona {

    trabajo;

    constructor(firstName, lastName, job) {
      super(firstName, lastName); // ← Llama al constructor de la clase PADRE
      this.trabajo = job;
    }
  }

  // Instancias de clase PADRE Persona
  const manolo = new Persona("Manolo", "Martínez")
  console.log({manolo});

  const fernando = new Persona("Fernando", "Fernandez")
  console.log({fernando});

  // Instancias de clase HIJO TrabajoPersona

  const olga = new TrabajoPersona('Olga', 'Iglesias', 'Madre de Juan Carlos')
  console.log({olga});
})();
