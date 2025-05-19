(() => {

  // -------------
  // Clase Sumar()
  // -------------

  /**
   * Clase base que representa una operación de 
   * suma entre dos números.
   * 
   * SIRVE COMO PUNTO DE PARTIDA para operaciones 
   * más complejas mediante herencia.
  */

  class Separador {

    static mostrarSeparador(texto: string): void {
      console.log('==================================================');

      console.log(`${texto}`);
      console.log('==================================================');
    }
  }

  class Sumar {
    protected arrSuma: number[] = []; // Números sumados
    protected suma: number = 0;      // Resultado de la suma

    /**
     * Constructor que recibe dos números y realiza la suma.
     * @param a - Primer número a sumar.
     * @param b - Segundo número a sumar.
     */
    constructor(a: number, b: number) {
      this.arrSuma.push(a, b);
      this.suma = a + b;
      console.log('this.arrSuma:', this.arrSuma);
    }

    /**
     * Devuelve una copia segura del arreglo de números sumados.
     * @returns - Una copia independiente del arreglo arrSuma.
    */
    getArrSuma(): number[] {
      return [...this.arrSuma]; // Copia segura usando spread operator
    }

    /**
     * Muestra la operación de suma en formato legible.
     */
    mostrarResultado(): void {
      const operacion = 'Resultado: ' + this.arrSuma.join(' + ');
      console.log(`${operacion} = ${this.suma}`);
    }
  }

  // --------------
  // Clase Restar()
  // --------------

  /**
   * Clase que extiende Sumar() para realizar una 
   * operación de resta añadiendo un número 
   * adicional al resultado de la suma.
   */
  class Restar extends Sumar {
    protected arrResta: number[] = []; // Números a restar
    protected resta: number = 0;       // Resultado de la resta

    /**
     * Constructor que recibe un arreglo de suma y 
     * un nuevo número para restar.
     * @param arrSuma - Arreglo de números sumados.
     * @param nuevoNumero - Número adicional a restar.
    */
    constructor(arrSuma: number[], nuevoNumero: number) {
      super(arrSuma[0], arrSuma[1]); // Construye Sumar correctamente

      this.arrResta = super.getArrSuma();
      this.arrResta.push(nuevoNumero);

      this.resta = this.arrResta[0];
      for (let i = 1; i < this.arrResta.length; i++) {
        this.resta -= this.arrResta[i];
      }

      console.log('this.arrResta:', this.arrResta);
    }

    /**
     * Devuelve una copia segura del arreglo 
     * de números restados.
     * @returns Una copia independiente del arreglo arrResta.
    */
    getArrResta(): number[] {
      return [...this.arrResta];
    }

    /**
     * Muestra la operación de resta en formato legible.
     */
    mostrarResultado(): void {
      const operacion = 'Resultado: ' + this.arrResta.join(' - ');
      console.log(`${operacion} = ${this.resta}`);
    }
  }

  // -------------------
  // Clase Multiplicar()
  // -------------------

  /**
   * Clase que extiende Restar() para realizar una 
   * operación  de multiplicación añadiendo un 
   * número adicional al resultado de la resta.
  */
  class Multiplicar extends Restar {
    protected arrMultiplicar: number[] = []; // Números a multiplicar
    protected producto: number = 1;          // Resultado de la multiplicación

    /**
     * Constructor que recibe un arreglo de resta y 
     * un nuevo número para multiplicar.
     * @param arrResta - Arreglo de números restados.
     * @param nuevoNumero - Número adicional a multiplicar.
     */
    constructor(arrResta: number[], nuevoNumero: number) {
      super([arrResta[0], arrResta[1]], arrResta[2]);

      this.arrResta = arrResta;
      this.arrMultiplicar = [...this.arrResta];
      this.arrMultiplicar.push(nuevoNumero);

      this.producto = this.arrMultiplicar[0];
      for (let i = 1; i < this.arrMultiplicar.length; i++) {
        this.producto *= this.arrMultiplicar[i];
      }

      console.log('this.arrMultiplicar:', this.arrMultiplicar);
    }

    /**
     * Devuelve una copia segura del arreglo de 
     * números multiplicados.
     * @returns Una copia independiente del arreglo arrMultiplicar.
    */
    getArrMultiplicar(): number[] {
      return [...this.arrMultiplicar];
    }

    /**
     * Muestra la operación de multiplicación en formato legible.
    */
    mostrarResultado(): void {
      const operacion = 'Resultado: ' + this.arrMultiplicar.join(' * ');
      console.log(`${operacion} = ${this.producto}`);
    }

    // -------------------------------------
    // Explicaciones Conceptuales y Técnicas 
    // sobre el uso de super() y la herencia
    // -------------------------------------

    /**
     * 1. Razón Conceptual: Construcción de la Jerarquía
     * -------------------------------------------------
     * 
     * Cada clase depende de la anterior para garantizar 
     * que el objeto se construya en el estado que espera
     * la cadena de herencia.
    *
    * Ejemplo Conceptual:
    * Si se crea Multiplicar() y no se llama al constructor 
    * de Restar(), entonces:
    * 
    * - arrResta no se construye como espera Restar().
    * - Los cálculos de Restar no se ejecutan.
    * - El objeto puede quedar en un estado incompleto 
    *   o incoherente.
    *
    * Esto se debe a que el constructor no se hereda 
    * automáticamente, solo la estructura (propiedades 
    * y métodos). Por lo tanto, si no llamas a super(),
    * el constructor del padre no se ejecuta.
    *
    * 
    * 
    * 
    * 2. Razón Técnica: Requisito del Lenguaje
    * ----------------------------------------
    * 
    * En TypeScript (y en JavaScript moderno), las clases 
    * hijas están obligadas a llamar a super() antes de acceder 
    * a this, es una regla del lenguaje:
    * 
    * - Si se extiende una clase y se define un constructor,
    *   se debe llamar a super() antes de usar this, o 
    *   TypeScript lanzará error.
    *
    * 
    * 
    * 
    * 3. ¿Por qué hacer todo esto si ya existen propiedades 
    *     protegidas en las clases padre?
    * -----------------------------------------------------
    * 
    * Exiten las propiedades protegidas independientes arrSuma, 
    * arrResta, arrMultiplicar, etc.
    * 
    * Sin embargo, NO estás heredando los datos directamente, 
    * SOLO LA ESTRUCTURA.
    * 
    * Si NO llamas a super(), esas propiedades SE INICIALIZAN VACÍAS,
    * no con el estado calculado por la clase padre.
    */
  }

  // ---------------
  // Clase Dividir()
  // ---------------

  /**
   * Clase que extiende Multiplicar() para realizar una operación 
   * de división añadiendo un número adicional al resultado 
   * de la multiplicación.
  */
  class Dividir extends Multiplicar {
    protected arrDividir: number[] = [];  // Números a dividir
    protected division: number = 0;      // Resultado de la división

    /**
     * Constructor que recibe un arreglo de multiplicación 
     * y un nuevo número para dividir.
     * @param arrMultiplicar - Arreglo de números multiplicados.
     * @param nuevoNumero - Número adicional para la división.
    */
    constructor(arrMultiplicar: number[], nuevoNumero: number) {
      console.log(`a) arrMultiplicar antes de llamar al super(), ${arrMultiplicar}`);

      super([arrMultiplicar[0], arrMultiplicar[1], arrMultiplicar[2]], arrMultiplicar[3]);

      console.log(`b) arrMultiplicar después de llamar al super(), ${arrMultiplicar}`);
      console.log(`Sigue igual porque lo has pasado en el momento de instanciar el objeto miDividir`)

      this.arrMultiplicar = arrMultiplicar;
      this.arrDividir = [...this.arrMultiplicar];
      this.arrDividir.push(nuevoNumero);

      this.division = this.arrDividir[0];
      for (let i = 1; i < this.arrDividir.length; i++) {
        this.division /= this.arrDividir[i];
      }

      console.log('this.arrDividir:', this.arrDividir);
    }

    /**
     * Devuelve una copia segura del arreglo de 
     * números divididos.
     * @returns Una copia independiente del arreglo arrDividir.
    */
    getArrDividir(): number[] {
      console.log('Clase Dividir() =====================');
      return [...this.arrDividir];
    }

    /**
     * Muestra la operación de división en formato legible.
     */
    mostrarResultado(): void {
      const operacion = 'Resultado: ' + this.arrDividir.join(' / ');
      console.log(`${operacion} = ${this.division}`);
    }
  }



  // ---------------------
  // Ejemplo Paso 1: Sumar
  // ---------------------

  Separador.mostrarSeparador('Ejemplo Paso 1: Sumar')

  /**
   * Creamos una instancia de Sumar con los números 8 y 4.
   * 
   * Esto representa la operación "8 + 4".
  */
  const miSuma = new Sumar(8, 4);

  // Mostramos el detalle de la suma en la consola.
  miSuma.mostrarResultado();  // Resultado: "8 + 4 = 12"

  // Obtenemos el arreglo de la suma para usarlo 
  // en la siguiente operación.
  const arregloSuma = miSuma.getArrSuma();


  // ----------------------
  // Ejemplo Paso 2: Restar
  // ----------------------
  Separador.mostrarSeparador('Ejemplo Paso 2: Restar')
  /**
   * Creamos una instancia de Restar usando el arreglo anterior 
   * y añadiendo el número 2.
   * 
   * Esto representa la operación "8 - 4 - 2".
  */
  const miResta = new Restar(arregloSuma, 2);

  // Mostramos el detalle de la resta en la consola.
  miResta.mostrarResultado();  // Resultado: "8 - 4 - 2 = 2"

  // Obtenemos el arreglo de la resta para usarlo 
  // en la siguiente operación.
  const arregloResta = miResta.getArrResta();


  // ---------------------------
  // Ejemplo Paso 3: Multiplicar
  // ---------------------------
  Separador.mostrarSeparador('Ejemplo Paso 3: Multiplicar')

  /**
   * Creamos una instancia de Multiplicar usando el arreglo anterior 
   * y añadiendo el número 3.
   * 
   * Esto representa la operación "8 * 4 * 2 * 3".
  */
  const miMultiplicar = new Multiplicar(arregloResta, 3);

  // Mostramos el detalle de la multiplicación en la consola.
  miMultiplicar.mostrarResultado();  // Resultado: "8 * 4 * 2 * 3 = 192"

  // Obtenemos el arreglo de la multiplicación para usarlo 
  // en la siguiente operación.
  const arregloMultiplicar = miMultiplicar.getArrMultiplicar();


  // -----------------------
  // Ejemplo Paso 4: Dividir
  // -----------------------
  Separador.mostrarSeparador('Ejemplo Paso 4: Dividir')


  /**
   * Creamos una instancia de Dividir usando el arreglo anterior 
   * y añadiendo el número 2.
   * 
   * Esto representa la operación "8 / 4 / 2 / 3 / 2".
  */
  const miDividir = new Dividir(arregloMultiplicar, 2);

  // Mostramos el detalle de la división en la consola.
  miDividir.mostrarResultado();  // Resultado: "8 / 4 / 2 / 3 / 2 = 0.166..."
})();