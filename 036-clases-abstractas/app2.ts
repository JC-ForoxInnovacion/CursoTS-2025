(() => {

  abstract class PersonaAbstracta {
    constructor(
      public nombre: string,
      public apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
  }

  class PersonaCiudad extends PersonaAbstracta {
    public ciudad: string;

    constructor(nombre:string, apellido:string, ciudad:string) {

      super(nombre, apellido)
      this.ciudad = ciudad;
    }
  }


  const amalia = new PersonaCiudad('Amalia', 'Anaya','Vigo')

  console.log({amalia});
})();