import { Link } from 'react-router-dom';
import ProductCard from '@components/ProductCard';
import { useProductos } from '@hooks/useProductos';
import { useAgregarAlCarrito } from '@hooks/useAgregarAlCarrito';
import imagenPresentacion from '@assets/presentacion.jpg';

/**
 * Cantidad de productos que se muestran como destacados en el inicio.
 * @type {number}
 */
const CANTIDAD_DESTACADOS = 4;

/**
 * Página de inicio: presentación de la marca y productos destacados.
 * @method Inicio
 * @return {JSX.Element} Página de inicio.
 */
const Inicio = () => {
  const { productos, cargando, error } = useProductos();
  const agregar = useAgregarAlCarrito();
  const destacados = productos.slice(0, CANTIDAD_DESTACADOS);

  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-texto">
            <h2>Maquillaje pensado para tu piel real</h2>
            <p>Fórmulas veganas, ligeras y de larga duración. Resaltá tu belleza natural sin complicaciones.</p>
            <div className="hero-botones">
              <Link to="/productos" className="btn btn-primario">Ver Catálogo</Link>
              <Link to="/contacto" className="btn btn-secundario">Consultas</Link>
            </div>
          </div>
          <div className="hero-imagen">
            <img src={imagenPresentacion} alt="Productos de maquillaje Tersa" />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="container">
          <h2 className="titulo-seccion">Destacados</h2>
          <p className="subtitulo-seccion">Los favoritos de nuestra línea para rostro, labios y ojos.</p>
          {cargando && <p className="mensaje-estado">Cargando productos...</p>}
          {error && <p className="mensaje-error mensaje-estado" role="alert">{error}</p>}
          <div className="grid-productos">
            {destacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} onAgregar={agregar} />
            ))}
          </div>
          <div className="ver-todos">
            <Link to="/productos" className="btn btn-borde">Ver todos los productos</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
