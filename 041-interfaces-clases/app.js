(() => {
    class Persona {
        constructor(nomb, apel, prof) {
            this.nombre = nomb;
            this.apellidos = apel;
            this.profesion = prof;
        }
        getProfesion() {
            console.log(`${this.nombre} ${this.apellidos} es ${this.profesion}`);
        }
    }
    const jc = new Persona('JC', 'VI', 'Ingeniero');
    jc.getProfesion();
})();
export {};
//# sourceMappingURL=app.js.map