(() => {
    let objJSAnonimousFunction = {
        nombre: "Juan Carlos",
        apellido: "Varela Iglesias",
        getFullName: function () {
            console.log('Dentro del método -> ', this.nombre, this.apellido);
            let fullName = this.nombre + ' ' + this.apellido;
            return fullName;
        }
    };
    let res = objJSAnonimousFunction.getFullName();
    console.log({ res });
    objJSAnonimousFunction = {
        nombre: "Pepe",
        apellido: "Osorio",
    };
    console.log({ objJSAnonimousFunction });
    let persona1 = {
        name: "Persona",
        familyName: "Uno",
        age: 25,
        hasCar: true,
        carColor: "rojo",
        getCarColor: function () {
            return this.carColor;
        }
    };
    console.log({ persona1 });
    res = persona1.getCarColor();
    console.log({ res });
    let persona2 = {
        name: "Persona",
        familyName: "Dos",
        age: 18,
        hasCar: false,
        carColor: null,
        getCarColor: function () {
            return this.carColor;
        }
    };
    console.log({ persona2 });
    res = persona2.getCarColor();
    console.log({ res });
})();
export {};
//# sourceMappingURL=app.js.map