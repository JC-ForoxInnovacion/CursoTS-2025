(() => {
    let funcionAgregarDosNombres;
    funcionAgregarDosNombres = (primerNombre, segundoNombre) => {
        return primerNombre + ' ' + segundoNombre;
    };
    let res = funcionAgregarDosNombres('Luis', 'Alfredo');
    console.log(res);
    let miFuncion = function funcionAgregarDosApellidos(primerApellido, segundoApellido) {
        return primerApellido + ' ' + segundoApellido;
    };
    console.log(miFuncion('Alberto', 'Alvarez'));
    const obj = {
        funcionAgregarDosApellidos2(primerApellido, segundoApellido) {
            return primerApellido + ' ' + segundoApellido;
        }
    };
    console.log(obj.funcionAgregarDosApellidos2('Gómez', 'Pérez'));
})();
export {};
//# sourceMappingURL=app.js.map