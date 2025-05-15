import { sepCorto, sepLargo } from "./separadores.js";

/**
 * Getters y setters 
 * 
 * Tienen la forma de un método cuando se
 * declaran:
 *    get nombre_metodo() {}
 *    set nombre_metodo() {}
 * 
 * Simulan una propiedad cuando 
 * se usan/invocan:
 *    objeto.getXYZ 
 *    objeto.setXYZ = lo-que-sea 
 * 
 */
(()=>{

  class Persona {
    static isPersona: boolean = true;
    
    
    constructor(
      public firstName: string = 'NO firstName',
      public lastName: string = 'NO lastName',
      public nickname: string = 'NO nickname'
    ){
      console.log('Ejecutado el constructor de Persona');
    }

    private buildFullName() {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }

    get fullName() {
      return this.buildFullName()
    }

    set first_Name(nombre:string){
      this.firstName = nombre;
    }

    set last_Name(apellido:string){
      this.lastName = apellido;
    }
  }

  // Persona
  
  const jc = new Persona("José Carlos", "Varela Irazabal", "ErProfe")
  
  console.log({jc});
  let res = jc.fullName;
  console.log({res});

  jc.first_Name = 'Juan Carlos';
  jc.last_Name = 'Varela Iglesias'
  console.log({jc});
  res = jc.fullName;
  console.log({res});

})();

