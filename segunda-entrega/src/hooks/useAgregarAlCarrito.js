import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { agregarAlCarrito } from '@api/carrito';

/**
 * Hook que devuelve la función para agregar productos al carrito.
 * Si no hay sesión iniciada, lleva al usuario al login.
 * @method useAgregarAlCarrito
 * @return {Function} Función que recibe el producto y la cantidad, y devuelve true si se agregó.
 */
export const useAgregarAlCarrito = () => {
  const { estaLogueado } = useAuth();
  const navigate = useNavigate();

  /**
   * Agrega el producto al carrito, o redirige al login si no hay sesión.
   * @method agregar
   * @param {object} producto - Producto que se agrega.
   * @param {number} cantidad - Unidades que se agregan.
   * @return {Promise<boolean>} true si se agregó, false si se redirigió al login.
   */
  const agregar = async (producto, cantidad) => {
    if (!estaLogueado) {
      navigate('/login');
      return false;
    }
    await agregarAlCarrito(producto, cantidad);
    return true;
  };

  return agregar;
};
