import { sepCorto } from "./separadores.js";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo ha sido salvado';
    sepCorto();
    console.log(typeof addNumbers);
    let myFunction;
    sepCorto();
    // 10 es typo number y no tipo Function
    myFunction = 10;
    sepCorto();
    /**
     * Asignamos una función a una variable
     * (comparten referencia)
     *
     * JS/TS pueden inferir el tipo, que en
     * este caso es tipo Function
     */
    myFunction = addNumbers;
    console.log(myFunction(5, 5));
    sepCorto();
    myFunction = greet;
    console.log(myFunction('JC'));
    sepCorto();
    myFunction = saveTheWorld;
    console.log(myFunction());
    sepCorto();
    /**
     * EN este caso se define la función
     * directamente y ya que es una función
     * tendrá el tipo Function
     */
    myFunction = () => 'Helouuuu!!';
    console.log(myFunction());
    sepCorto();
    /**
     * Tipado estricto de funciones
     * Debe contemplar tanto los tipos de los
     * parámetros como el del retorno de la
     * fución
     */
    let myFunction_addNumbers;
    myFunction_addNumbers = addNumbers;
    console.log(myFunction_addNumbers(5, 4));
    sepCorto();
    let myFunction_greet;
    myFunction_greet = greet;
    console.log(myFunction_greet('Florencio'));
    sepCorto();
    /**
     * Tipando la función sin argumentos
     */
    // let myFunction_saveTheWorld: () => string;
    /**
   * Tipando la función con argumentos:
   * - Con un argumento OPCIONAL de TIPO void
   *
   * De esta forma:
   * En primer lugar decimos que el argumento
   * no es obligatorio ya que la función
   * original saveTheWorld() está definida SIN
   * parámetros
   *
   * En segundo lugar y como consecuencia de
   * (x?:void) cuando se invoque la función
   * myFunction_saveTheWorld: (x?:void) y se
   * intente pasar cualquier argumento TS
   * señalará el error
   */
    let myFunction_saveTheWorld;
    myFunction_saveTheWorld = saveTheWorld;
    console.log(myFunction_saveTheWorld());
    sepCorto();
    /**
     * BONUS 1 : Tipar Objetos
     *
     * Es tan genérico que acepta cualquier cosa
     * que no sea un primitivo.
     * - Objetos literales
     * - Arrays
     * - Funciones
     */
    let myOBJ;
    myOBJ = {
        propiedad: 'Valor'
    };
    myOBJ = [];
    myOBJ = () => { };
    sepCorto();
    /**
     * BONUS 2 : Tipar Arreglos
     *
     * Limitas el tipo de datos
     */
    //let myARR:string[];
    let myARR;
    myARR = [1, 2, 3];
})();
//# sourceMappingURL=app.js.map