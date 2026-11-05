/**
 * Comprueba que el nombre tenga nombre y apellido, solo con letras, y hasta 50 caracteres.
 * @method validarNombre
 * @param {string} nombre - Nombre ingresado por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si el nombre es válido.
 */
export const validarNombre = (nombre) => {
  const patron = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ'-]+( [A-Za-zÁÉÍÓÚÜÑáéíóúüñ'-]+)+$/;
  if (nombre.trim() === '') {
    return 'Ingresá tu nombre y apellido.';
  }
  if (!patron.test(nombre.trim())) {
    return 'Usá solo letras y separá el nombre del apellido con un espacio.';
  }
  return '';
};

/**
 * Comprueba que un correo tenga un formato básico correcto.
 * @method validarEmail
 * @param {string} email - Correo ingresado por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si el correo es válido.
 */
export const validarEmail = (email) => {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === '') {
    return 'Ingresá tu correo electrónico.';
  }
  if (!patron.test(email.trim())) {
    return 'El correo debe tener el formato nombre@correo.com.';
  }
  return '';
};

/**
 * Comprueba que el mensaje tenga al menos 10 caracteres.
 * @method validarMensaje
 * @param {string} mensaje - Consulta ingresada por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si el mensaje es válido.
 */
export const validarMensaje = (mensaje) => {
  if (mensaje.trim().length < 10) {
    return 'La consulta debe tener al menos 10 caracteres.';
  }
  return '';
};