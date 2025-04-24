// import { sepCorto, sepLargo } from "./separadores.js";

function tipoDato(param: any): string {
  return typeof param
}

function construirMensaje(data: any, res: string): string {
  return `"${data}" es de tipo ${res}`
}

(() => {
  let data: any;
  let res: any;

  data = "Tipo string";
  data = true;
  data = 123;
  data = null;
  data = undefined;
  // data = Symbol('MiSimbolo');
  // data = [1,2,3,4,5];
  // data = {key1: "Valor 1", key2: "Valor 2" };

  

  res = tipoDato(data);
  console.log(construirMensaje(data, res));
  
  data = 1234567;
  res = tipoDato(data);
  console.log(construirMensaje(data, res));


  let dataString: string;

  console.log('--- variable as string');
  dataString = data as string;
  console.log({dataString});

  res = tipoDato(dataString);
  console.log(construirMensaje(data, res));
  // console.log(dataString.charAt(0)); // Error ya que no se efectúa Casting

  console.log('--- <string>variable');
  dataString = <string>data;
  console.log({dataString});

  res = tipoDato(dataString);
  console.log(construirMensaje(data, res));
  console.log(dataString.charAt(2));

  console.log('--- String() Rating: 🌟🌟🌟🌟🌟 by JC');
  dataString = String(data);
  console.log({dataString});

  res = tipoDato(dataString);
  console.log(construirMensaje(data, res));
  console.log(dataString.charAt(2));
})();
