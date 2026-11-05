import { useState } from 'react';
import { AuthContext } from '@context/AuthContext';

/**
 * Clave con la que se guarda la sesión en localStorage.
 * @type {string}
 */
const CLAVE_SESION = 'usuarioTersa';

/**
 * Usuario de prueba para iniciar sesión.
 * @type {{email: string, password: string, nombre: string}}
 */
const USUARIO_PRUEBA = {
  email: 'admin@tersa.com',
  password: '1234',
  nombre: 'Admin',
};

/**
 * Lee la sesión guardada en localStorage. Si no hay o está dañada, devuelve null.
 * @method leerSesion
 * @return {{email: string, nombre: string}|null} Usuario guardado o null.
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
 * Guarda el usuario que inició sesión y comparte las funciones de login y logout
 * con todos los componentes que estén adentro.
 * @method AuthProvider
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes que pueden usar la sesión.
 * @return {JSX.Element} Proveedor del contexto de autenticación.
 */
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(leerSesion);

  /**
   * Comprueba las credenciales y, si son correctas, guarda la sesión.
   * @method login
   * @param {string} email - Correo ingresado.
   * @param {string} password - Contraseña ingresada.
   * @return {void}
   */
  const login = (email, password) => {
    if (email.trim() !== USUARIO_PRUEBA.email || password !== USUARIO_PRUEBA.password) {
      throw new Error('El correo o la contraseña son incorrectos.');
    }
    const usuarioLogueado = { email: USUARIO_PRUEBA.email, nombre: USUARIO_PRUEBA.nombre };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioLogueado));
    setUsuario(usuarioLogueado);
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
    <AuthContext.Provider value={{ usuario, estaLogueado: usuario !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
