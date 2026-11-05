import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import Button from '@components/Button';

/**
 * Encabezado del sitio con el logo, la navegación y la sesión del usuario.
 * @method Header
 * @return {JSX.Element} Encabezado.
 */
const Header = () => {
  const { usuario, estaLogueado, logout } = useAuth();
  const navigate = useNavigate();

  /**
   * Cierra la sesión y vuelve a la página de inicio.
   * @method cerrarSesion
   * @return {void}
   */
  const cerrarSesion = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header-principal">
      <div className="container nav-container">
        <h1 className="logo">
          <Link to="/">TERSA</Link>
        </h1>
        <nav className="nav-menu" aria-label="Navegación principal">
          <ul>
            <li><NavLink to="/" end>Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/nosotras">Nosotras</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
            <li><NavLink to="/carrito">Carrito</NavLink></li>
          </ul>
        </nav>
        <div className="nav-usuario">
          {estaLogueado ? (
            <>
              <span>Hola, {usuario.nombre}</span>
              <Button variante="borde" chico onClick={cerrarSesion}>Cerrar sesión</Button>
            </>
          ) : (
            <Link to="/login" className="btn btn-borde btn-chico">Iniciar sesión</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
