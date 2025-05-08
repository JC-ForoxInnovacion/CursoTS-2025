(() => {
    // Objeto JS
    let objJS = {
        texto: "Valor",
        numero: 1,
        boolean: true
    };
    console.log({ objJS }, typeof objJS);
    /**
     * Las siguientes asignaciones de propiedades
     * y valores en el objJS no producen errores
     * en JS (Puedes probarlo en la consola)
     */
    // objJS["nombre1"] = "Pepe"
    // objJS.nombre2 = "Antonio"
    // Objeto TS
    let objTS = {
        texto: "Valor",
        numero: 1,
        boolean: true,
        array: ["elem1", "elem2"]
    };
    console.log({ objTS }, typeof objTS);
    /**
     * La siguiente expresión causará un error en TS ya
     * que al definir el objeto TS ha creado un NUEVO
     * TIPO basado en el propio objeto y sus propiedades
     *
     * Object literal may only specify known properties,
     * and 'nombre' does not exist in type
     * '{ texto: string; numero: number; boolean: boolean;
     *    array: string[]; }'
     */
    // objTS = { nombre: "JC" }
    /**
     * Si lo que pretendemos es modificar TODO el objeto
     * debemos utilizar TODAS sus  propiedades
     */
    objTS = {
        texto: "Nuevo texto",
        numero: 222,
        boolean: false,
        array: ["", "texto", String(true), String(10 + 12)]
    };
    console.log({ objTS });
    objTS.texto = "Modificando solo una propiedad";
    console.log({ objTS });
    /**
     * Un método con función de flecha NO IMPLEMENTA (hereda)
     * this
     */
    // let objJSArrowFunction = {
    //   nombre: "Juan Carlos",
    //   apellido: "Varela Iglesias",
    //   getFullName: () => {
    //       console.log(this.nombre, this.apellido);
    //       let fullName = this.nombre + ' ' + this.apellido;
    //       return fullName;
    //   }
    // }
    /**
     *
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
    let res = objJSAnonimousFunction.getFullName();
    console.log({ res });
})();
export {};
//# sourceMappingURL=app.js.map