(() => {
    const familia = {
        padre: "Alfredo",
        madre: "Josefina",
        hijos: ["Alfredito", "Josefinita", "Paquito", "Luisita", "Carmencita", "Olguita", "Carlitos"]
    };
    let { hijos: [h1, , h3, , h5, , h7] } = familia;
    console.log({ h1 });
    console.log({ h3 });
    console.log({ h5 });
    console.log({ h7 });
})();
export {};
//# sourceMappingURL=app.js.map