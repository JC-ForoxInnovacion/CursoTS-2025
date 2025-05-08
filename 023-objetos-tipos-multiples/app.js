(() => {
    let persona;
    persona = "Ricardo";
    console.log({ persona }, typeof persona);
    persona = 333;
    console.log({ persona }, typeof persona);
    persona = "true";
    console.log({ persona }, typeof persona);
    persona = {
        name: "Riquete",
        familyName: "El del copete",
        age: 21
    };
    /**
     * AL transpilar a JS el tipo "Person" no aparecerá
     * ya que no existe TYPE en JS (sólo en TS), por lo
     * tanto el typeof será "object"
     */
    console.log({ persona }, typeof persona);
})();
export {};
//# sourceMappingURL=app.js.map