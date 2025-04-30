// import { sepCorto, sepLargo } from "./separadores.js";

// Simón José Antonio de la Santísima Trinidad Bolívar Ponte y Palacios Blanco

// María del Rosario Cayetana Paloma Alfonsa Victoria Eugenia Fernanda Teresa Francisca de Paula Lourdes Antonia Josefa Fausta Rita Castor Dorotea Santa Esperanza Fitz-James Stuart y de Silva

(() => {
  const name = (name:string, ...rest:any):string => {
    //console.log(name, rest);
    return `${name} ${rest.join(' ')}`
  } 

  const familyName = (familyName:string, ...rest:any):string => {
    //console.log(familyName, rest);
    return `${familyName} ${rest.join(' ')}`
  } 

  const fullName = (name:string, familyName:string):string => {
    return `${name} ${familyName}`
  } 

  const fullNameREST = (...rest:any):string => {
    console.log(rest);
    return `${rest.join(' ')}`
  }

  let resName = name('Simón', 'José', 'Antonio de la Santísima Trinidad')
  
  let resFamilyName = familyName('Bolívar', 'Ponte', 'y', 'Palacios', 'Blanco')

  let resFullName = fullName(resName, resFamilyName)

  console.log({resName});
  console.log({resFamilyName});
  console.log({resFullName});

  resFullName = fullNameREST(resName, resFamilyName);
  console.log({resFullName});

})();


