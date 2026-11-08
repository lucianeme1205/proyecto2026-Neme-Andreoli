import { solicitar } from '@api/cliente';

/**
 * Obtiene todos los usuarios registrados.
 * @method getUsuarios
 * @return {Promise<Array<object>>} Lista de usuarios.
 */
export const getUsuarios = async () => {
  return solicitar('usuarios');
};

/**
 * Guarda un usuario nuevo.
 * @method crearUsuario
 * @param {{nombre: string, email: string, password: string}} usuario - Datos de la cuenta nueva.
 * @return {Promise<object>} Usuario creado, con su id.
 */
export const crearUsuario = async (usuario) => {
  return solicitar('usuarios', {
    method: 'POST',
    body: JSON.stringify(usuario),
  });
};