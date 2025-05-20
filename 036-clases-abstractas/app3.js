"use strict";
(() => {
    class Vehiculo {
        constructor(ruedas, volante, plazas, marca, color) {
            this.cantRuedas = ruedas;
            this.poseeVolante = volante;
            this.cantPlazas = plazas;
            this.marca = marca;
            this.color = color;
        }
    }
    class Coche extends Vehiculo {
        constructor(cantRuedas, poseeVolante, plazas, marca, color, puertas) {
            super(cantRuedas, poseeVolante, plazas, marca, color);
            this.cantPuertas = puertas;
        }
    }
    Coche.tipo = 'Tipo: Coche';
    class Moto extends Vehiculo {
        constructor(cantRuedas, poseeVolante, plazas, marca, color, sidecar) {
            super(cantRuedas, poseeVolante, plazas, marca, color);
            this.tieneSideCar = sidecar;
        }
    }
    Moto.tipo = 'Tipo: Moto';
    const audiRojo = new Coche(5, true, 5, 'Audi', 'Rojo', 5);
    console.log(Coche.tipo, { audiRojo });
    const ducatiRoja = new Moto(2, false, 2, 'Ducati', 'Rojo', true);
    console.log(Moto.tipo, { ducatiRoja });
    function mostrarMarcaColor(marca_color) {
        console.log({ marca_color });
        console.log(marca_color.marca);
        console.log(marca_color.color);
    }
    mostrarMarcaColor(ducatiRoja);
})();
//# sourceMappingURL=app3.js.map