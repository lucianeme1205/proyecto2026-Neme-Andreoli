import { createContext } from 'react';

/**
 * Contexto de autenticación. Solo define el contenedor; la lógica está en AuthProvider.
 * @type {React.Context}
 */
export const AuthContext = createContext(null);
