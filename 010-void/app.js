"use strict";
function noRetorna() {
    return;
}
let res;
res = noRetorna();
console.log({ res }, typeof res);
let funcion = () => {
    return;
};
console.log({ funcion }, typeof funcion);
res = funcion();
console.log({ res }, typeof res);
(() => {
    return;
})();
res = (() => {
    return;
})();
console.log({ res }, typeof res);
//# sourceMappingURL=app.js.map