import { sepCorto, sepLargo } from "./separadores.js";

/**
 * Herencia (extends NombreClase)
 *  Métodosy propiedades:
 *    - Públicos
 *    - Privados
 *    - Protegidos
 *    - Estáticos
 * 
 * Introducción CONCEPTUAL acerca de getters y 
 * setters (implementados como métodos estándar)
 * que permiten manejar múltiples propiedades (la
 * analogía con las funciones serían los argumentos)
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
      console.log('this.firstName:', this.firstName);
      console.log('this.lastName:', this.lastName);
      console.log('this.nickname:', this.nickname);
    }

    private upperNickname():void {
      this.nickname = this.nickname.toUpperCase();
    }

    public showNickname(): void {
      this.upperNickname();
      console.log('this.nickname', this.nickname);
    }

    protected getFullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

    public setFirstName(nombre: string): void {
      this.firstName = nombre;
    }

    public setLastName(apellido: string): void {
      this.lastName = apellido;
    }

    public setNickname(apodo: string): void {
      this.nickname = apodo;
    }
  }

  class Ingeniero extends Persona {
    static isEng: boolean = true;

    constructor(
      firstName: string,
      lastName: string,
      nickname: string,
      public ingenieria:string,
      ) {
          super(firstName, lastName, nickname)
          this.ingenieria = ingenieria
    
          console.log('Ejecutado el constructor de Ingeniero');
      }

    public showFullName (): void {
      const res:string = super.getFullName();
      console.log(res);
    }
  }
  
  // Persona
  const manuel = new Persona( 'Manuel','Martínez');
  console.log({manuel});


  // Ingeniero
  const pedro = new Ingeniero('Pedro', 'Palomares', 'Pedrín', 'Mecánica')
  console.log(
    {pedro}, 
    'Persona.isPersona;', Persona.isPersona, 
    'Ingeniero.isEng', Ingeniero.isEng);

  pedro.showNickname();
  pedro.showFullName();

  pedro.setFirstName('Petra');
  pedro.setNickname('Petrificadilla');

  console.log(
    {pedro}, 
    'Persona.isPersona;', Persona.isPersona, 
    'Ingeniero.isEng', Ingeniero.isEng);

    pedro.showNickname();
    pedro.showFullName();
})();

