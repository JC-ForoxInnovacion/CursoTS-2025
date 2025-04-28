/**
 * Devuelve un mensaje de saludo.
 * @returns {string} Mensaje de saludo.
 */
function saludo() {
  return "¡Hola! Bienvenid@ a esta aplicación web.";
}

/**
 * Devuelve un mensaje de despedida.
 * @returns {string} Mensaje de despedida.
 */
function despedida() {
  return "¡Hasta luego! Gracias por visitarnos.";
}

/**
 * Exportamos un objeto como valor por defecto
 */
export default {
  saludo,
  despedida
};