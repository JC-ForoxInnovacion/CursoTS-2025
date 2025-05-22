import { sepCorto, sepLargo } from "./separadores.js";

namespace mySpace {
  let variable: number = 5;

  export let variableExportada: number = 7;

  export function nombrada() {
    console.log("Estoy en una función nombrada");
  }

  export let funcionAnonima = () => {
    console.log("Estoy en una función anónima");
  };

  console.log("Ejecutando DENTRO del NameSpace");
  sepLargo();

  console.log({ variable });
  console.log({ variableExportada });

  nombrada();
}

console.log("Ejecutando FUERA del NameSpace");
sepLargo();

console.log(mySpace.variableExportada);

mySpace.nombrada();

mySpace.funcionAnonima();

namespace Calculo {
  let numeros: number[] = [];

  let solicitarNumeros = () => {
    let a: number = Number(prompt("Primer número"));
    let b: number = Number(prompt("Segundo número"));
    return { a, b };
  };

  let res = solicitarNumeros();

  // ===================
  let crearNumerosUsuario = (n1: number, n2: number): void => {
    numeros.push(n1, n2);
    console.log("numeros en funcion", numeros);
  };

  crearNumerosUsuario(res.a, res.b);
  // ===================

  export let mostrarArray = (): void => {
    console.log({ numeros });
  };
}

Calculo.mostrarArray();
