import { useState } from 'react';
import ProductCard from '@components/ProductCard';
import Input from '@components/Input';
import Button from '@components/Button';
import { useProductos } from '@hooks/useProductos';
import { useAgregarAlCarrito } from '@hooks/useAgregarAlCarrito';
import { normalizarTexto } from '@utils/normalizarTexto';

/**
 * Categorías disponibles para filtrar el catálogo.
 * @type {Array<string>}
 */
const CATEGORIAS = ['Rostro', 'Labios', 'Ojos'];

/**
 * Página del catálogo completo, con buscador por nombre y filtro por categoría.
 * @method Productos
 * @return {JSX.Element} Página de productos.
 */
const Productos = () => {
  const { productos, cargando, error } = useProductos();
  const agregar = useAgregarAlCarrito();
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todas');

  const texto = normalizarTexto(busqueda);
  const filtrados = productos.filter((producto) => {
    const coincideTexto = normalizarTexto(producto.nombre).includes(texto);
    const coincideCategoria = categoria === 'todas' || producto.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });
  const hayFiltros = texto !== '' || categoria !== 'todas';

  /**
   * Borra el texto buscado y vuelve a mostrar todas las categorías.
   * @method limpiarFiltros
   * @return {void}
   */
  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('todas');
  };

  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Nuestros Productos</h2>
        <p className="subtitulo-seccion">Conocé nuestra línea completa para rostro, labios y ojos.</p>

        <div className="barra-filtros">
          <Input id="buscador" label="Buscar producto:" value={busqueda} onChange={(evento) => setBusqueda(evento.target.value)} placeholder="Ej: labial, rubor..." maxLength={30} />
          <div className="campo">
            <label htmlFor="filtroCategoria">Categoría:</label>
            <select id="filtroCategoria" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
              <option value="todas">Todas</option>
              {CATEGORIAS.map((nombre) => (
                <option key={nombre} value={nombre}>{nombre}</option>
              ))}
            </select>
          </div>
          <Button variante="borde" chico onClick={limpiarFiltros} disabled={!hayFiltros}>Limpiar filtros</Button>
        </div>

        {cargando && <p className="mensaje-estado">Cargando productos...</p>}
        {error && <p className="mensaje-error mensaje-estado" role="alert">{error}</p>}
        {!cargando && !error && (
          <p className="mensaje-estado" aria-live="polite">
            {filtrados.length === 0
              ? 'No encontramos productos que coincidan con tu búsqueda.'
              : hayFiltros && `Se encontraron ${filtrados.length} producto(s).`}
          </p>
        )}

        <div className="grid-productos">
          {filtrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onAgregar={agregar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
