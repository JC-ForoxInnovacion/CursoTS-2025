import { sepCorto, sepLargo } from "./separadores.js";

(() => {
console.log('******* clasesJS-2.js');
sepLargo();

  class Animal {
    nombre;
    color;

    constructor (name = 'No name', kolor = 'No color') {
      this.nombre = name;
      this.color = kolor;
    }

    mostrarNombre(){
      console.log('Soy un/a:', this.nombre, 'Método de la clase PADRE');
    }
  }

  class AnimalAereo extends Animal {
    puedeVolar;
    cantAlas;

    constructor(name, kolor, wings = 2) {
      super(name, kolor)
      this.cantAlas = wings;
      this.puedeVolar = true;
    }
  }

  class AnimalTerrestre extends Animal {
    puedeCaminar;
    cantPatas;
    poseePelo;

    constructor(name, kolor, walk = false, legs = 0, hair = false) {
      super(name, kolor)
      this.puedeCaminar = walk;
      this.cantPatas = legs; 
      this.poseePelo = hair;
    }
  }

  class AnimalAcuatico extends Animal {
    puedeNadar;
    poseeEscamas;

    constructor(name, kolor, swim = true, scale = true) {
      super(name, kolor)
      this.puedeNadar = swim;
      this.poseeEscamas = scale;
    }

    mostrarEscamas() {
      console.log('Método de la clase HIJA');
      if (this.poseeEscamas) {
        console.log('Tengo escamas');
      } else {
        console.log('NO tengo escamas');
      }
    }

  }

  const animalGenerico_1 = new Animal;
  console.log({animalGenerico_1});

  const animalGenerico_2 = new Animal('Perro', 'Blanco');
  console.log({animalGenerico_2});

  const loro = new AnimalAereo('Loro', 'verde', 2);
  console.log({loro});
  
  const vaca = new AnimalTerrestre('Vaca', 'Pardo', true, 4, true);
  console.log({vaca});
  vaca.mostrarNombre();

  const tiburon = new AnimalAcuatico('Tiburón', 'blanco', true, false);
  console.log({tiburon});
  tiburon.mostrarEscamas();
})();