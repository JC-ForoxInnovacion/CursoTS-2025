"use strict";
(() => {
    class Separador {
        static mostrarSeparador(texto) {
            console.log('==================================================');
            console.log(`${texto}`);
            console.log('==================================================');
        }
    }
    class Sumar {
        constructor(a, b) {
            this.arrSuma = [];
            this.suma = 0;
            this.arrSuma.push(a, b);
            this.suma = a + b;
            console.log('this.arrSuma:', this.arrSuma);
        }
        getArrSuma() {
            return [...this.arrSuma];
        }
        mostrarResultado() {
            const operacion = 'Resultado: ' + this.arrSuma.join(' + ');
            console.log(`${operacion} = ${this.suma}`);
        }
    }
    class Restar extends Sumar {
        constructor(arrSuma, nuevoNumero) {
            super(arrSuma[0], arrSuma[1]);
            this.arrResta = [];
            this.resta = 0;
            this.arrResta = super.getArrSuma();
            this.arrResta.push(nuevoNumero);
            this.resta = this.arrResta[0];
            for (let i = 1; i < this.arrResta.length; i++) {
                this.resta -= this.arrResta[i];
            }
            console.log('this.arrResta:', this.arrResta);
        }
        getArrResta() {
            return [...this.arrResta];
        }
        mostrarResultado() {
            const operacion = 'Resultado: ' + this.arrResta.join(' - ');
            console.log(`${operacion} = ${this.resta}`);
        }
    }
    class Multiplicar extends Restar {
        constructor(arrResta, nuevoNumero) {
            super([arrResta[0], arrResta[1]], arrResta[2]);
            this.arrMultiplicar = [];
            this.producto = 1;
            this.arrResta = arrResta;
            this.arrMultiplicar = [...this.arrResta];
            this.arrMultiplicar.push(nuevoNumero);
            this.producto = this.arrMultiplicar[0];
            for (let i = 1; i < this.arrMultiplicar.length; i++) {
                this.producto *= this.arrMultiplicar[i];
            }
            console.log('this.arrMultiplicar:', this.arrMultiplicar);
        }
        getArrMultiplicar() {
            return [...this.arrMultiplicar];
        }
        mostrarResultado() {
            const operacion = 'Resultado: ' + this.arrMultiplicar.join(' * ');
            console.log(`${operacion} = ${this.producto}`);
        }
    }
    class Dividir extends Multiplicar {
        constructor(arrMultiplicar, nuevoNumero) {
            console.log(`a) arrMultiplicar antes de llamar al super(), ${arrMultiplicar}`);
            super([arrMultiplicar[0], arrMultiplicar[1], arrMultiplicar[2]], arrMultiplicar[3]);
            this.arrDividir = [];
            this.division = 0;
            console.log(`b) arrMultiplicar después de llamar al super(), ${arrMultiplicar}`);
            console.log(`Sigue igual porque lo has pasado en el momento de instanciar el objeto miDividir`);
            this.arrMultiplicar = arrMultiplicar;
            this.arrDividir = [...this.arrMultiplicar];
            this.arrDividir.push(nuevoNumero);
            this.division = this.arrDividir[0];
            for (let i = 1; i < this.arrDividir.length; i++) {
                this.division /= this.arrDividir[i];
            }
            console.log('this.arrDividir:', this.arrDividir);
        }
        getArrDividir() {
            console.log('Clase Dividir() =====================');
            return [...this.arrDividir];
        }
        mostrarResultado() {
            const operacion = 'Resultado: ' + this.arrDividir.join(' / ');
            console.log(`${operacion} = ${this.division}`);
        }
    }
    Separador.mostrarSeparador('Ejemplo Paso 1: Sumar');
    const miSuma = new Sumar(8, 4);
    miSuma.mostrarResultado();
    const arregloSuma = miSuma.getArrSuma();
    Separador.mostrarSeparador('Ejemplo Paso 2: Restar');
    const miResta = new Restar(arregloSuma, 2);
    miResta.mostrarResultado();
    const arregloResta = miResta.getArrResta();
    Separador.mostrarSeparador('Ejemplo Paso 3: Multiplicar');
    const miMultiplicar = new Multiplicar(arregloResta, 3);
    miMultiplicar.mostrarResultado();
    const arregloMultiplicar = miMultiplicar.getArrMultiplicar();
    Separador.mostrarSeparador('Ejemplo Paso 4: Dividir');
    const miDividir = new Dividir(arregloMultiplicar, 2);
    miDividir.mostrarResultado();
})();
//# sourceMappingURL=app.js.map