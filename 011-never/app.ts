
(() => {
  const error = (mensaje:string ):never => {
    throw new Error(mensaje);
  }
  
  // error("Auxilio)");
  let res = error("Auxilio)");
  console.log({res}, typeof res);
})();


