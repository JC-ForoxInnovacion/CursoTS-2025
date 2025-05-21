(() => {
    const jc = {
        nombre: 'Juan Carlos',
        apellidos: 'Varela Iglesias',
        edad: 53,
        nacionalidad: ['Española', 'Venezolana'],
        direccion: {
            calle: 'Perigos',
            numero: '6',
            ciudad: 'Vigo'
        },
        telefono: [
            {
                tipo: 'Móvil',
                numero: 604039594,
                codInt: 34
            },
            {
                tipo: 'Habitación',
                numero: 986868686,
                codInt: 34
            }
        ]
    };
    const maria = {
        nombre: 'María Montserrat',
        apellidos: 'Miguez Montesano',
        direccion: {
            calle: 'Perigos',
            numero: '6',
        }
    };
    console.log(maria.telefono);
    console.log(maria.edad);
    console.log(jc.telefono);
    console.log(jc.telefono[0].numero);
})();
export {};
//# sourceMappingURL=app1.js.map