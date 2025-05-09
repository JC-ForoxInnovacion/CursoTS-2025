import { sepCorto } from "./separadores.js";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo ha sido salvado';
    sepCorto();
    console.log(typeof addNumbers);
    let myFunction;
    sepCorto();
    myFunction = 10;
    sepCorto();
    myFunction = addNumbers;
    console.log(myFunction(5, 5));
    sepCorto();
    myFunction = greet;
    console.log(myFunction('JC'));
    sepCorto();
    myFunction = saveTheWorld;
    console.log(myFunction());
    sepCorto();
    myFunction = () => 'Helouuuu!!';
    console.log(myFunction());
    sepCorto();
    let myFunction_addNumbers;
    myFunction_addNumbers = addNumbers;
    console.log(myFunction_addNumbers(5, 4));
    sepCorto();
    let myFunction_greet;
    myFunction_greet = greet;
    console.log(myFunction_greet('Florencio'));
    sepCorto();
    let myFunction_saveTheWorld;
    myFunction_saveTheWorld = saveTheWorld;
    console.log(myFunction_saveTheWorld());
    sepCorto();
    let myOBJ;
    myOBJ = {
        propiedad: 'Valor'
    };
    myOBJ = [];
    myOBJ = () => { };
    sepCorto();
    let myARR;
    myARR = [1, 2, 3];
})();
//# sourceMappingURL=app.js.map