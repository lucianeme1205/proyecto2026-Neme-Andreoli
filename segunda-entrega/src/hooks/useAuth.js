import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

/**
 * Hook para usar la sesión desde cualquier componente.
 * @method useAuth
 * @return {{usuario: object|null, estaLogueado: boolean, login: Function, logout: Function}} Datos y funciones de la sesión.
 */
export const useAuth = () => {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>.');
  }
  return contexto;
};
