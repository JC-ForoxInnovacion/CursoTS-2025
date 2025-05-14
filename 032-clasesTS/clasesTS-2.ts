import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log("******* clasesTS-2.js");
  sepLargo();

  class Animal {
    public nombre: string;
    public color: string;

    constructor(
      name: string = "No name", 
      kolor: string = "No color"
    ) {
      this.nombre = name;
      this.color = kolor;
    }

    public mostrarNombre() {
      console.log("Soy un/a:", this.nombre, "Método de la clase PADRE");
    }
  }

  class AnimalAereo extends Animal {
    public puedeVolar: boolean;
    public cantAlas: number;

    constructor(name:string, kolor:string, wings:number = 2) {
      super(name, kolor);
      this.cantAlas = wings;
      this.puedeVolar = true;
    }
  }

  class AnimalTerrestre extends Animal {
    public puedeCaminar: boolean;
    public poseePelo: boolean;
    public cantPatas: number;

    constructor(
      name: string, 
      kolor:string, 
      walk:boolean = false, 
      legs:number = 0, 
      hair:boolean = false
    ) {
      super(name, kolor);
      this.puedeCaminar = walk;
      this.cantPatas = legs;
      this.poseePelo = hair;
    }
  }

  class AnimalAcuatico extends Animal {
    public puedeNadar:boolean;
    public poseeEscamas:boolean;

    constructor(
      name:string, 
      kolor:string, 
      swim:boolean = true, 
      scale:boolean = true
    ) {
      super(name, kolor);
      this.puedeNadar = swim;
      this.poseeEscamas = scale;
    }

    public mostrarEscamas() {
      console.log("Método de la clase HIJA");
      if (this.poseeEscamas) {
        console.log("Tengo escamas");
      } else {
        console.log("NO tengo escamas");
      }
    }
  }

  const animalGenerico_1 = new Animal();
  console.log({ animalGenerico_1 });

  const animalGenerico_2 = new Animal("Perro", "Blanco");
  console.log({ animalGenerico_2 });

  const loro = new AnimalAereo("Loro", "verde", 2);
  console.log({ loro });

  const vaca = new AnimalTerrestre("Vaca", "Pardo", true, 4, true);
  console.log({ vaca });
  vaca.mostrarNombre();

  const tiburon = new AnimalAcuatico("Tiburón", "blanco", true, false);
  console.log({ tiburon });
  tiburon.mostrarEscamas();
})();
