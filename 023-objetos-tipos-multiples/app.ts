import { sepCorto, sepLargo } from "./separadores.js";

(() => {

type Person = {
  name: string;
  familyName: string,
  age: number,
  hasCar?: boolean;
  carColor?: (string|null),
  getCarColor?: () => (string|null);
  }

 let persona: (string|number|boolean|Person);

 persona = "Ricardo";
 console.log({persona}, typeof persona);

 persona = 333;
 console.log({persona}, typeof persona);


 persona = "true";
 console.log({persona}, typeof persona);

 persona = {
  name: "Riquete",
  familyName: "El del copete",
  age: 21
 }

 /**
  * AL transpilar a JS el tipo "Person" no aparecerá
  * ya que no existe TYPE en JS (sólo en TS), por lo 
  * tanto el typeof será "object"
  */
 console.log({persona}, typeof persona);

})();