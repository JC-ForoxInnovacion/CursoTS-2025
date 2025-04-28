/**
 * Importación de funciones
 */
import { saludo, despedida } from './a-mensajes.js';

/**
 * Inicializa los eventos de los botones de saludo y despedida.
 */
function inicializarEventos() {
  const divMensajes = document.getElementById('mensajes');
  const botonSaludo = document.getElementById('boton-saludo');
  const botonDespedida = document.getElementById('boton-despedida');

  botonSaludo.addEventListener('click', () => {
    mostrarMensaje(divMensajes, saludo());
  });

  botonDespedida.addEventListener('click', () => {
    mostrarMensaje(divMensajes, despedida());
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