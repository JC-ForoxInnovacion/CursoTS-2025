(() => {
    class Persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    class PersonaX {
        constructor() {
            this.nombre = '';
        }
        decirHola() {
            console.log('te digo Hola');
        }
        setNombre(nombre) {
            this.nombre = nombre;
        }
        getNombre() {
            return this.nombre;
        }
    }
    const luisa = new Persona('Luisa', 'López');
    console.log({ luisa });
    let carmen;
    console.log({ carmen });
    carmen = new Persona('Carmen', 'Cedeño');
    console.log({ carmen });
    const manoloX = new PersonaX();
    console.log({ manoloX });
    manoloX.decirHola();
    manoloX.setNombre('ManoloX');
    let res = manoloX.getNombre();
    console.log(res);
})();
export {};
//# sourceMappingURL=app1.js.map