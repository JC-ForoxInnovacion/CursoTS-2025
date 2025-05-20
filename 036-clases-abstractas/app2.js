"use strict";
(() => {
    class PersonaAbstracta {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    class PersonaCiudad extends PersonaAbstracta {
        constructor(nombre, apellido, ciudad) {
            super(nombre, apellido);
            this.ciudad = ciudad;
        }
    }
    const amalia = new PersonaCiudad('Amalia', 'Anaya', 'Vigo');
    console.log({ amalia });
})();
//# sourceMappingURL=app2.js.map