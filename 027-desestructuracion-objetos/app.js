var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { sepCorto } from "./separadores.js";
(() => {
    const persona = {
        primerNombre: 'Juan',
        segundoNombre: 'Carlos',
        primerApellido: 'Varela',
        segundoApellido: 'Iglesias',
        estatura: 1.71,
        peso: 100,
        escribe: true
    };
    let { primerNombre, estatura, escribe } = persona;
    console.log({ primerNombre });
    console.log({ estatura });
    console.log({ escribe });
    sepCorto();
    const show1Persona = (persona) => {
        console.log(persona.primerApellido);
    };
    show1Persona(persona);
    sepCorto();
    const show2Persona = ({ estatura, escribe } = persona) => {
        console.log({ estatura });
        console.log({ escribe });
    };
    show2Persona(persona);
    sepCorto();
    const show3Persona = (_a = persona) => {
        var { primerNombre, segundoNombre } = _a, rest = __rest(_a, ["primerNombre", "segundoNombre"]);
        console.log({ estatura });
        console.log({ escribe });
        console.log({ rest });
    };
    show3Persona(persona);
})();
//# sourceMappingURL=app.js.map