/**
 * Pasa un texto a minúsculas y le quita los acentos, para comparar sin importar cómo se escribió.
 * @method normalizarTexto
 * @param {string} texto - Texto a normalizar.
 * @return {string} Texto en minúsculas y sin acentos.
 */
export const normalizarTexto = (texto) => {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
};
