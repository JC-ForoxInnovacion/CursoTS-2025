(() => {
    class Persona {
        constructor(firstName = 'NO firstName', lastName = 'NO lastName', nickname = 'NO nickname') {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickname = nickname;
            console.log('Ejecutado el constructor de Persona');
            console.log('this.firstName:', this.firstName);
            console.log('this.lastName:', this.lastName);
            console.log('this.nickname:', this.nickname);
        }
        upperNickname() {
            this.nickname = this.nickname.toUpperCase();
        }
        showNickname() {
            this.upperNickname();
            console.log('this.nickname', this.nickname);
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        setFirstName(nombre) {
            this.firstName = nombre;
        }
        setLastName(apellido) {
            this.lastName = apellido;
        }
        setNickname(apodo) {
            this.nickname = apodo;
        }
    }
    Persona.isPersona = true;
    class Ingeniero extends Persona {
        constructor(firstName, lastName, nickname, ingenieria) {
            super(firstName, lastName, nickname);
            this.ingenieria = ingenieria;
            this.ingenieria = ingenieria;
            console.log('Ejecutado el constructor de Ingeniero');
        }
        showFullName() {
            const res = super.getFullName();
            console.log(res);
        }
    }
    Ingeniero.isEng = true;
    const manuel = new Persona('Manuel', 'Martínez');
    console.log({ manuel });
    const pedro = new Ingeniero('Pedro', 'Palomares', 'Pedrín', 'Mecánica');
    console.log({ pedro }, 'Persona.isPersona;', Persona.isPersona, 'Ingeniero.isEng', Ingeniero.isEng);
    pedro.showNickname();
    pedro.showFullName();
    pedro.setFirstName('Petra');
    pedro.setNickname('Petrificadilla');
    console.log({ pedro }, 'Persona.isPersona;', Persona.isPersona, 'Ingeniero.isEng', Ingeniero.isEng);
    pedro.showNickname();
    pedro.showFullName();
})();
export {};
//# sourceMappingURL=app.js.map