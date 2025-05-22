import { sepLargo } from "./separadores.js";
var mySpace;
(function (mySpace) {
    let variable = 5;
    mySpace.variableExportada = 7;
    function nombrada() {
        console.log("Estoy en una función nombrada");
    }
    mySpace.nombrada = nombrada;
    mySpace.funcionAnonima = () => {
        console.log("Estoy en una función anónima");
    };
    console.log("Ejecutando DENTRO del NameSpace");
    sepLargo();
    console.log({ variable });
    console.log({ variableExportada: mySpace.variableExportada });
    nombrada();
})(mySpace || (mySpace = {}));
console.log("Ejecutando FUERA del NameSpace");
sepLargo();
console.log(mySpace.variableExportada);
mySpace.nombrada();
mySpace.funcionAnonima();
var Calculo;
(function (Calculo) {
    let numeros = [];
    let solicitarNumeros = () => {
        let a = Number(prompt('Primer número'));
        let b = Number(prompt('Segundo número'));
        return { a, b };
    };
    let res = solicitarNumeros();
    let crearNumerosUsuario = (n1, n2) => {
        numeros.push(n1, n2);
        console.log('numeros en funcion', numeros);
    };
    numeros = crearNumerosUsuario(res.a, res.b);
    console.log({ numeros });
})(Calculo || (Calculo = {}));
//# sourceMappingURL=app.js.map