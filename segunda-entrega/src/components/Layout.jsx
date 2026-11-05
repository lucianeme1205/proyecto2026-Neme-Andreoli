import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

/**
 * Estructura común de todas las páginas: encabezado, contenido de la ruta actual y pie.
 * El contenido de cada página se renderiza en el Outlet.
 * @method Layout
 * @return {JSX.Element} Página con encabezado, contenido y pie.
 */
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;