import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';

/**
 * Protege las rutas privadas: si no hay sesión, redirige al login.
 * @method ProtectedRoute
 * @return {JSX.Element} La ruta hija si hay sesión, o una redirección al login.
 */
const ProtectedRoute = () => {
  const { estaLogueado } = useAuth();
  return estaLogueado ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
