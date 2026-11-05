/**
 * Formatea un número como precio en pesos argentinos, sin decimales.
 * @method formatearPrecio
 * @param {number} valor - Monto a formatear.
 * @return {string} Precio formateado, por ejemplo "$ 4.200".
 */
export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(valor);
};
