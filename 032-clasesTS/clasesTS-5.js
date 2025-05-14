import { sepLargo } from "./separadores.js";
(() => {
    console.log("******* clasesTS-5.js");
    sepLargo();
    class StringData {
        static mostrarDescripcion() {
            console.log('METODO ESTÁTICO → mostrarDescripcion() ', StringData.descripcion);
        }
        constructor(input) {
            this.output = '';
            this.input = input;
        }
        mostrarInput() {
            console.log('mostrarInput:', this.input);
        }
        transformar() {
            this.output = this.input.toUpperCase();
        }
        mostrarOutput() {
            this.transformar();
            console.log('mostrarOutput:', this.output);
        }
        metodoDescripcionEstatica() {
            console.log('Estoy en el metodoDescripcionEstatica()');
            function mostrar() {
                console.log('Método funcionDescripcionEstatica() / función mostrar(): ', StringData.descripcion);
            }
        }
    }
    StringData.descripcion = 'Clase que transforma un texto ... ';
    const texto1 = new StringData('Este es el primer texto');
    texto1.mostrarInput();
    texto1.mostrarOutput();
    console.log(StringData.descripcion);
    StringData.descripcion = StringData.descripcion + prompt("A que lo transforma??");
    console.log(StringData.descripcion);
    const texto2 = new StringData('Segundo texto, después de modificar la propiedad estática "descripcion"');
    texto2.mostrarInput();
    texto2.mostrarOutput();
    console.log(StringData.descripcion);
    StringData.mostrarDescripcion();
    texto2.metodoDescripcionEstatica().mostrar();
})();
//# sourceMappingURL=clasesTS-5.js.map