import { sepLargo } from "./separadores.js";
(() => {
    console.log("******* ClasesTS-1.js");
    sepLargo();
    class Persona {
        constructor(firstName = "NO name", lastName = "Sin apellido") {
            this.nombre = "Sin nombre";
            this.nombre = firstName;
            this.apellido = lastName;
        }
    }
    Persona.reino = "Animal";
    class TrabajoPersona extends Persona {
        constructor(firstName, lastName, job) {
            super(firstName, lastName);
            this.trabajo = job;
        }
    }
    const andrea = new Persona();
    console.log({ andrea });
    const manolo = new Persona("Manolo", "Martínez");
    console.log({ manolo }, Persona.reino);
    Persona.reino = "Vegetal";
    console.log({ manolo }, Persona.reino);
    const fernando = new Persona("Fernando", "Fernandez");
    console.log({ fernando });
    const olga = new TrabajoPersona("Olga", "Iglesias", "Madre de Juan Carlos");
    console.log({ olga });
})();
//# sourceMappingURL=clasesTS-1.js.map