import { solicitar } from '@api/cliente';

/**
 * Obtiene todos los productos del catálogo.
 * @method getProductos
 * @return {Promise<Array<object>>} Lista de productos.
 */
export const getProductos = async () => {
  return solicitar('productos');
};
