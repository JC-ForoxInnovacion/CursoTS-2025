import { sepCorto, sepLargo } from "./separadores.js";


(()=>{
  console.log('for...of  → ARREGLOS');
  sepCorto()

  type ArrPersona = Persona[];

  type Persona = {
    nombre: string,
    edad: number
  }

  let persona1: Persona = {
    nombre: "Andrea",
    edad: 25
  }

  let persona2: Persona = {
    nombre: "Beatriz",
    edad: 35
  }

  let persona3: Persona = {
    nombre: "Celia",
    edad: 45
  }

  let arrPersonas:ArrPersona = [persona1, persona2, persona3]

  console.log({arrPersonas});

  for (const persona of arrPersonas) {
    console.log("edad:", persona.edad);
  }



  console.log('for...in  → OBJETOS');
  sepCorto()


  type Familia = {
    padre: string;
    madre: string;
    hijos: string[];
  }

  const familia: Familia = {
  padre: "Alfredo",
  madre: "Josefina",
  hijos: ["Alfredito", "Josefinita", "Paquito", "Luisita", "Carmencita", "Olguita", "Carlitos"]
  }

  console.log({familia});

  for (const clave in familia) {
    console.log({clave});
  }

  for (const clave in familia) {
    console.log('valor:', familia[clave]);
    
  }
}
)();
