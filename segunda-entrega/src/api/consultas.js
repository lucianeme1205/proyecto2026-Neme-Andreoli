import { solicitar } from '@api/cliente';

/**
 * Guarda una consulta enviada desde el formulario de contacto.
 * @method enviarConsulta
 * @param {{nombre: string, email: string, mensaje: string}} consulta - Datos del formulario.
 * @return {Promise<object>} Consulta guardada.
 */
export const enviarConsulta = async (consulta) => {
  return solicitar('consultas', {
    method: 'POST',
    body: JSON.stringify(consulta),
  });
};