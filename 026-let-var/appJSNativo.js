(()=> {
  // Caso 1:
  // console.log(nombre1);

  // nombre1 = "Olga";

  // Consola:
  // Uncaught ReferenceError: nombre1 is not defined
  //    at appJSNativo.js:1:13


  // Caso 2:
  console.log(nombre2);

  var nombre2 = "Olga";

  // undefined


  // Caso 3:
  console.log(nombre3);

  let nombre3 = "Olga";

  // Uncaught ReferenceError: Cannot access 'nombre3' before 
  //    initialization at appJSNativo.js:21:13

})();
