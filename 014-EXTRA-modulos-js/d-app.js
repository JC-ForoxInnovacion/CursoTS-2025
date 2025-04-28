/**
 * Importación del objeto completo
 */
import mensajes from './mensajes.js';

function inicializarEventos() {
  const divMensajes = document.getElementById('mensajes');
  const botonSaludo = document.getElementById('boton-saludo');
  const botonDespedida = document.getElementById('boton-despedida');
  botonSaludo.addEventListener('click', () => {
    mostrarMensaje(divMensajes, mensajes.saludo());
  });
  botonDespedida.addEventListener('click', () => {
    mostrarMensaje(divMensajes, mensajes.despedida());
  });
}

/**
 * Muestra un mensaje dentro del div de mensajes.
 * @param {HTMLElement} contenedor - Elemento HTML donde mostrar el mensaje.
 * @param {string} mensaje - Texto del mensaje a mostrar.
 */
function mostrarMensaje(contenedor, mensaje) {
  contenedor.innerHTML = `<p>${mensaje}</p>`;
}

/**
 * Ejecutamos la función de inicialización
 */
inicializarEventos();