(() => {
    let objJS = {
        texto: "Valor",
        numero: 1,
        boolean: true
    };
    console.log({ objJS }, typeof objJS);
    let objTS = {
        texto: "Valor",
        numero: 1,
        boolean: true,
        array: ["elem1", "elem2"]
    };
    console.log({ objTS }, typeof objTS);
    objTS = {
        texto: "Nuevo texto",
        numero: 222,
        boolean: false,
        array: ["", "texto", String(true), String(10 + 12)]
    };
    console.log({ objTS });
    objTS.texto = "Modificando solo una propiedad";
    console.log({ objTS });
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
})();
export {};
//# sourceMappingURL=app.js.map