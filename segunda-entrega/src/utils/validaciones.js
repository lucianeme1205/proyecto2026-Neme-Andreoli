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

/**
 * Comprueba que la cantidad sea un número entero entre 1 y 99.
 * @method validarCantidad
 * @param {string} cantidad - Cantidad ingresada por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si la cantidad es válida.
 */
export const validarCantidad = (cantidad) => {
  if (!/^[0-9]+$/.test(cantidad) || Number(cantidad) < 1 || Number(cantidad) > 99) {
    return 'Ingresá un número entero entre 1 y 99.';
  }
  return '';
};

/**
 * Comprueba que la contraseña no esté vacía y tenga al menos 4 caracteres.
 * @method validarPassword
 * @param {string} password - Contraseña ingresada por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si la contraseña es válida.
 */
export const validarPassword = (password) => {
  if (password.length < 4) {
    return 'La contraseña debe tener al menos 4 caracteres.';
  }
  return '';
};

/**
 * Comprueba que la confirmación de la contraseña coincida con la contraseña.
 * @method validarConfirmacion
 * @param {string} password - Contraseña ingresada.
 * @param {string} confirmacion - Contraseña repetida por el usuario.
 * @return {string} Mensaje de error, o un texto vacío si coinciden.
 */
export const validarConfirmacion = (password, confirmacion) => {
  if (confirmacion === '') {
    return 'Repetí la contraseña.';
  }
  if (confirmacion !== password) {
    return 'Las contraseñas no coinciden.';
  }
  return '';
};