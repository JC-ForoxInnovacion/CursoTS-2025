import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log("******* ClasesTS-1.js");
  sepLargo();

  class Persona {
    public nombre?: string = "Sin nombre";
    public apellido: string;
    static reino: string = "Animal";

    constructor(
      firstName: string = "NO name",
      lastName: string = "Sin apellido"
    ) {
      this.nombre = firstName;
      this.apellido = lastName;
    }
  }

  class TrabajoPersona extends Persona {
    public trabajo: string;

    constructor(firstName: string, lastName: string, job: string) {
      super(firstName, lastName); // ← Llama al constructor de la clase PADRE
      this.trabajo = job;
    }
  }

  // Instancias de clase PADRE Persona
  const andrea = new Persona();
  console.log({ andrea });

  const manolo = new Persona("Manolo", "Martínez");
  console.log({ manolo }, Persona.reino);
  Persona.reino = "Vegetal";
  console.log({ manolo }, Persona.reino);

  const fernando = new Persona("Fernando", "Fernandez");
  console.log({ fernando });

  // Instancias de clase HIJO TrabajoPersona

  const olga = new TrabajoPersona("Olga", "Iglesias", "Madre de Juan Carlos");
  console.log({ olga });
})();
