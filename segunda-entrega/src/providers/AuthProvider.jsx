import { useState } from 'react';
import { AuthContext } from '@context/AuthContext';
import { crearUsuario, getUsuarios } from '@api/usuarios';

/**
 * Clave con la que se guarda la sesión en localStorage.
 * @type {string}
 */
const CLAVE_SESION = 'usuarioTersa';

/**
 * Lee la sesión guardada en localStorage. Si no hay o está dañada, devuelve null.
 * @method leerSesion
 * @return {{id: string, nombre: string, email: string}|null} Usuario guardado o null.
 */
const leerSesion = () => {
  try {
    const guardado = localStorage.getItem(CLAVE_SESION);
    return guardado ? JSON.parse(guardado) : null;
  } catch {
    return null;
  }
};

/**
 * Trae los usuarios del servicio. Si el servicio no responde, lanza un error con un mensaje claro.
 * @method traerUsuarios
 * @return {Promise<Array<object>>} Lista de usuarios.
 */
const traerUsuarios = async () => {
  try {
    return await getUsuarios();
  } catch {
    throw new Error('No pudimos conectarnos con el servicio. Revisá que esté corriendo con npm run services.');
  }
};

/**
 * Guarda el usuario que inició sesión y comparte las funciones de login, registro y logout
 * con todos los componentes que estén adentro.
 * @method AuthProvider
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes que pueden usar la sesión.
 * @return {JSX.Element} Proveedor del contexto de autenticación.
 */
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(leerSesion);

  /**
   * Guarda en localStorage y en el estado los datos públicos del usuario (sin la contraseña).
   * @method guardarSesion
   * @param {{id: string, nombre: string, email: string}} datos - Usuario que inicia sesión.
   * @return {void}
   */
  const guardarSesion = (datos) => {
    const sesion = { id: datos.id, nombre: datos.nombre, email: datos.email };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(sesion));
    setUsuario(sesion);
  };

  /**
   * Busca un usuario con ese correo y contraseña y, si existe, inicia la sesión.
   * @method login
   * @param {string} email - Correo ingresado.
   * @param {string} password - Contraseña ingresada.
   * @return {Promise<void>}
   */
  const login = async (email, password) => {
    const usuarios = await traerUsuarios();
    const encontrado = usuarios.find((item) => item.email === email.trim().toLowerCase() && item.password === password);
    if (!encontrado) {
      throw new Error('El correo o la contraseña son incorrectos.');
    }
    guardarSesion(encontrado);
  };

  /**
   * Crea una cuenta nueva, si el correo no está registrado, e inicia la sesión.
   * @method registrar
   * @param {string} nombre - Nombre y apellido.
   * @param {string} email - Correo de la cuenta.
   * @param {string} password - Contraseña de la cuenta.
   * @return {Promise<void>}
   */
  const registrar = async (nombre, email, password) => {
    const emailNormalizado = email.trim().toLowerCase();
    const usuarios = await traerUsuarios();
    if (usuarios.some((item) => item.email === emailNormalizado)) {
      throw new Error('Ya existe una cuenta con ese correo.');
    }
    const nuevo = await crearUsuario({ nombre: nombre.trim(), email: emailNormalizado, password });
    guardarSesion(nuevo);
  };

  /**
   * Cierra la sesión y la borra de localStorage.
   * @method logout
   * @return {void}
   */
  const logout = () => {
    localStorage.removeItem(CLAVE_SESION);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, estaLogueado: usuario !== null, login, registrar, logout }}>
      {children}
    </AuthContext.Provider>
  );
};