/**
 * Dirección del servicio json-server, tomada del archivo .env.
 * @type {string}
 */
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Hace un pedido al servicio y devuelve la respuesta convertida a JSON.
 * Si el servidor responde con error, lanza una excepción con un mensaje claro.
 * @method solicitar
 * @param {string} ruta - Ruta del recurso, por ejemplo "productos" o "carrito/3".
 * @param {object} [opciones] - Opciones de fetch: método, encabezados y cuerpo.
 * @return {Promise<any>} Datos que devuelve el servidor.
 */
export const solicitar = async (ruta, opciones = {}) => {
  const respuesta = await fetch(`${BASE_URL}${ruta}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opciones,
  });
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}.`);
  }
  return respuesta.json();
};