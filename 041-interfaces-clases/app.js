(() => {
    class Persona {
        constructor(nombre, apellidos, profesion) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.profesion = profesion;
            console.log(nombre, apellidos, profesion);
        }
    }
    const jc = new Persona('JC', 'VI', 'Ingeniero');
})();
export {};
//# sourceMappingURL=app.js.map