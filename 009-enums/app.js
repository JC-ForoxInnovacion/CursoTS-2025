"use strict";
(() => {
    console.log("Enum ==============================");
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log({ AudioLevel }, typeof AudioLevel, Object.keys(AudioLevel).length);
    let currentAudio = AudioLevel.min;
    console.log({ currentAudio }, typeof currentAudio);
    currentAudio = 55;
    console.log({ currentAudio }, typeof currentAudio);
    currentAudio: AudioLevel = 99;
    console.log({ currentAudio }, typeof currentAudio);
})();
(() => {
    console.log("Radio Dial ==============================");
    let RadioDial;
    (function (RadioDial) {
        RadioDial[RadioDial["Cadena 100"] = 96.5] = "Cadena 100";
        RadioDial[RadioDial["Rock FM"] = 104.7] = "Rock FM";
        RadioDial[RadioDial["Los 40"] = 99.4] = "Los 40";
    })(RadioDial || (RadioDial = {}));
    console.log({ RadioDial }, typeof RadioDial, Object.keys(RadioDial).length);
    RadioDial["Manolo FM"] = 100;
    RadioDial[100] = "Manolo FM";
    RadioDial[RadioDial["Pepe FM"] = 103] = "Pepe FM";
})();
(() => {
    console.log("Objetos y Arrays ==============================");
    console.log("--- Objeto {}");
    let obj = {
        uno: "Nivel 1",
        dos: "Nivel 2",
        tres: "Nivel 3"
    };
    console.log({ obj });
    console.log("--- Array con índices (clásico)");
    let arrIndices = ["Nivel 1", "Nivel 2", "Nivel 3"];
    console.log({ arrIndices });
    console.log("arrIndices.length:", arrIndices.length);
    console.log(".forEach() ---");
    arrIndices.forEach(e => console.log({ e }));
    console.log("for...of ---");
    for (const e of arrIndices) {
        console.log(e, typeof e);
    }
    console.log("for...in ---");
    for (const k in arrIndices) {
        console.log(k, typeof k);
    }
    console.log("--- Array asociativo (como en PHP)");
    let arrAsociativo = [];
    arrAsociativo["uno"] = "Nivel 1";
    arrAsociativo["dos"] = "Nivel 2";
    arrAsociativo["tres"] = "Nivel 3";
    console.log({ arrAsociativo });
    console.log("arrAsociativo.length:", arrAsociativo.length);
    console.log(".forEach() ---");
    arrIndices.forEach(e => console.log({ e }));
    console.log("for...of ---");
    for (const e of arrAsociativo) {
        console.log(e, typeof e);
    }
    console.log("for...in ---");
    for (const k in arrAsociativo) {
        console.log(k, typeof k);
    }
})();
//# sourceMappingURL=app.js.map