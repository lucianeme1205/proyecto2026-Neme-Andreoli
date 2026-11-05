import { solicitar } from '@api/cliente';

/**
 * Obtiene todos los productos que hay en el carrito.
 * @method getCarrito
 * @return {Promise<Array<object>>} Items del carrito.
 */
export const getCarrito = async () => {
  return solicitar('carrito');
};

/**
 * Agrega un producto al carrito. Si ya estaba, le suma la cantidad.
 * @method agregarAlCarrito
 * @param {object} producto - Producto del catálogo que se agrega.
 * @param {number} cantidad - Unidades que se agregan.
 * @return {Promise<object>} Item del carrito creado o actualizado.
 */
export const agregarAlCarrito = async (producto, cantidad) => {
  const carrito = await getCarrito();
  const existente = carrito.find((item) => item.productoId === producto.id);
  if (existente) {
    return actualizarCantidad(existente.id, existente.cantidad + cantidad);
  }
  return solicitar('carrito', {
    method: 'POST',
    body: JSON.stringify({
      productoId: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad,
    }),
  });
};

/**
 * Cambia la cantidad de un item del carrito.
 * @method actualizarCantidad
 * @param {string} id - Id del item del carrito.
 * @param {number} cantidad - Nueva cantidad.
 * @return {Promise<object>} Item actualizado.
 */
export const actualizarCantidad = async (id, cantidad) => {
  return solicitar(`carrito/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ cantidad }),
  });
};

/**
 * Elimina un item del carrito.
 * @method eliminarItem
 * @param {string} id - Id del item del carrito.
 * @return {Promise<object>} Item eliminado.
 */
export const eliminarItem = async (id) => {
  return solicitar(`carrito/${id}`, { method: 'DELETE' });
};

/**
 * Vacía el carrito eliminando cada uno de sus items.
 * @method vaciarCarrito
 * @param {Array<object>} items - Items que hay en el carrito.
 * @return {Promise<void>}
 */
export const vaciarCarrito = async (items) => {
  await Promise.all(items.map((item) => eliminarItem(item.id)));
};
