import { sepCorto, sepLargo } from "./separadores.js";

(()=>{
    console.log("******* clasesTS-5.js");
  sepLargo();

  class StringData {
    public input: string;
    private output: string = '';
    static descripcion = 'Clase que transforma un texto ... ';

    static mostrarDescripcion(): void {
      console.log('METODO ESTÁTICO → mostrarDescripcion() ', StringData.descripcion);
    }

    constructor(input:string) {
      this.input = input;
    }

    public mostrarInput(): void {
      console.log('mostrarInput:', this.input);
    }

    private transformar(): void {
      this.output = this.input.toUpperCase();
    }

    public mostrarOutput(): void {
      this.transformar();
      console.log('mostrarOutput:', this.output);
    }

    public metodoDescripcionEstatica():void {

      console.log('Estoy en el metodoDescripcionEstatica()');

      function mostrar1() {
        console.log('Método funcionDescripcionEstatica() / función mostrar(): ', StringData.descripcion);
      };

      mostrar1();

      mostrar2: () => {};

      (() => {
        console.log('Método funcionDescripcionEstatica() / función mostrar() AUTOINVOCADA: ', StringData.descripcion);
      })();



    }
  }

  const texto1 = new StringData('Este es el primer texto');

  texto1.mostrarInput();
  texto1.mostrarOutput();

  console.log(StringData.descripcion);

  StringData.descripcion = StringData.descripcion + prompt("A que lo transforma??")

  console.log(StringData.descripcion);


  const texto2 = new StringData('Segundo texto, después de modificar la propiedad estática "descripcion"');

  texto2.mostrarInput();
  texto2.mostrarOutput()
  console.log(StringData.descripcion);

  StringData.mostrarDescripcion();
  texto2.metodoDescripcionEstatica();

})();
