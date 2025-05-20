(() => {
    class Nombre {
        constructor(firstName) {
            this.firstName = firstName;
            console.log('Nombre en constructor', Nombre.instance);
        }
        static callNombre(nombre) {
            if (!Nombre.instance) {
                Nombre.instance = new Nombre(nombre);
                console.log('Nombre en callNombre', Nombre.instance);
            }
            else {
                console.log('La instancia ya existe');
            }
            return Nombre.instance;
        }
        static changeFirstName(nombre) {
            Nombre.instance.firstName = nombre;
        }
    }
    let jc = Nombre.callNombre('José Carlos');
    console.log(typeof jc);
    const cd = Nombre.callNombre('Carmen');
    const oi = Nombre.changeFirstName('Olga');
    Nombre.changeFirstName('Juan Carlos');
    console.log({ jc });
})();
export {};
//# sourceMappingURL=app.js.map