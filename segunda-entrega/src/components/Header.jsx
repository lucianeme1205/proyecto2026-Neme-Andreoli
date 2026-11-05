import { Link, NavLink } from 'react-router-dom';

/**
 * Encabezado del sitio con el logo y la navegación.
 * @method Header
 * @return {JSX.Element} Encabezado.
 */
const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;