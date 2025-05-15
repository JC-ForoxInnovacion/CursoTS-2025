(() => {
    class Persona {
        constructor(firstName = 'NO firstName', lastName = 'NO lastName', nickname = 'NO nickname') {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickname = nickname;
            console.log('Ejecutado el constructor de Persona');
        }
        buildFullName() {
            const fullName = this.firstName + ' ' + this.lastName;
            return fullName;
        }
        get fullName() {
            return this.buildFullName();
        }
        set first_Name(nombre) {
            this.firstName = nombre;
        }
        set last_Name(apellido) {
            this.lastName = apellido;
        }
    }
    Persona.isPersona = true;
    const jc = new Persona("José Carlos", "Varela Irazabal", "ErProfe");
    console.log({ jc });
    let res = jc.fullName;
    console.log({ res });
    jc.first_Name = 'Juan Carlos';
    jc.last_Name = 'Varela Iglesias';
    console.log({ jc });
    res = jc.fullName;
    console.log({ res });
})();
export {};
//# sourceMappingURL=app.js.map