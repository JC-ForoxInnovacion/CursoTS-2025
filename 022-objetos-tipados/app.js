(() => {
    /**
     * Definición y tipado de la función SIN CONTROLAR el número de
     * argumentos ni el tipo de dato que retorna
     */
    // let objJSAnonimousFunction: {nombre:string, apellido: string, getFullName?: any} = {
    /**
     * Definición y tipado de la función controlando el número de
     * argumentos y el tipo de dato que retorna
     */
    let objJSAnonimousFunction = {
        nombre: "Juan Carlos",
        apellido: "Varela Iglesias",
        getFullName: function () {
            console.log('Dentro del método -> ', this.nombre, this.apellido);
            let fullName = this.nombre + ' ' + this.apellido;
            return fullName;
        }
    };
    /**
     * Como programador debes estar consciente al 100% de lo que haces.
     *
     * Al ser OPCIONAL getFullName() es posible que retorne UNDEFINED...
     * Pero TÚ sabes que ESTA función nunca lo hará porque has definido
     * las propiedades "nombre" y "apellido" con sus respectivos valores.
     *
     * Siendo opcional esta función se puede redefinir el objeto tal
     * como se muestra a continuación
     */
    let res = objJSAnonimousFunction.getFullName();
    console.log({ res });
    // Redefinición del objeto sin la función getFullName()
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
        getCarColor: function () {
            return this.carColor;
        }
    };
    console.log({ persona2 });
    res = persona2.getCarColor();
    console.log({ res });
})();
export {};
