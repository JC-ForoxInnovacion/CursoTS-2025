"use strict";
let verdes;
let rojos = 7;
verdes = 11;
if (verdes > rojos) {
    console.log("verdes > rojos");
}
else if (verdes === rojos) {
    console.log("verdes = rojos");
}
else {
    console.log("verdes < rojos");
}
let personas = 0;
console.log({ personas });
personas = Number(true);
console.log({ personas });
personas = Number(false);
console.log({ personas });
personas = Number("Hola");
console.log({ personas });
personas = Number(5 + 5);
console.log({ personas });
personas = Number(5 + "5A");
console.log({ personas });
//# sourceMappingURL=app.js.map