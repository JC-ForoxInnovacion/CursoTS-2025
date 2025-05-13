import { sepCorto } from "./separadores.js";
(() => {
    console.log('for...of  → ARREGLOS');
    sepCorto();
    let persona1 = {
        nombre: "Andrea",
        edad: 25
    };
    let persona2 = {
        nombre: "Beatriz",
        edad: 35
    };
    let persona3 = {
        nombre: "Celia",
        edad: 45
    };
    let arrPersonas = [persona1, persona2, persona3];
    console.log({ arrPersonas });
    for (const persona of arrPersonas) {
        console.log("edad:", persona.edad);
    }
    console.log('for...in  → OBJETOS');
    sepCorto();
    const familia = {
        padre: "Alfredo",
        madre: "Josefina",
        hijos: ["Alfredito", "Josefinita", "Paquito", "Luisita", "Carmencita", "Olguita", "Carlitos"]
    };
    console.log({ familia });
    for (const clave in familia) {
        console.log({ clave });
    }
    for (const clave in familia) {
        console.log('valor:', familia[clave]);
    }
})();
//# sourceMappingURL=app.js.map