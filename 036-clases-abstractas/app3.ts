(() => {

  abstract class Vehiculo {
    cantRuedas: number;
    poseeVolante: boolean;
    cantPlazas: number;
    marca: string;
    color: string;
    
    constructor(
      ruedas:number, 
      volante:boolean, 
      plazas:number, 
      marca:string, 
      color: string) {

      this.cantRuedas = ruedas;
      this.poseeVolante = volante;
      this.cantPlazas = plazas;
      this.marca = marca;
      this.color = color;
    }
  }

  class Coche extends Vehiculo {

    static tipo: string = 'Tipo: Coche';

    cantPuertas: number;

    constructor(
      cantRuedas:number, 
      poseeVolante:boolean, 
      plazas:number,
      marca:string, 
      color:string,

      puertas: number ){

      super(cantRuedas, poseeVolante, plazas, marca, color);

      this.cantPuertas = puertas;
    }
  }

  class Moto extends Vehiculo {

    static tipo: string = 'Tipo: Moto';

    tieneSideCar: boolean;

    constructor(
      cantRuedas:number, 
      poseeVolante:boolean, 
      plazas:number,
      marca:string, 
      color:string,

      sidecar: boolean ){

      super(cantRuedas, poseeVolante, plazas, marca, color);

      this.tieneSideCar = sidecar;
    }
  }


  // Coche: Audi Rojo

  const audiRojo = new Coche(5, true, 5, 'Audi', 'Rojo', 5 );

  console.log(Coche.tipo, {audiRojo});


  // Moto: Ducati Roja 
  
  const ducatiRoja = new Moto(2, false, 2, 'Ducati', 'Rojo', true);

  console.log(Moto.tipo, {ducatiRoja});

  /**
   * En esta función se recibe como argumento
   * un objeto que ha sido insanciado por
   * una clase hija que extiende a la clase
   * padre (amstracta)
   * @param marca_color 
   */

  function mostrarMarcaColor ( marca_color: Vehiculo) {
    console.log({marca_color});
    console.log(marca_color.marca);
    console.log(marca_color.color);

  }

  mostrarMarcaColor(ducatiRoja)
})()