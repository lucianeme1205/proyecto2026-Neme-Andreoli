import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import { actualizarCantidad, eliminarItem, getCarrito, vaciarCarrito } from '@api/carrito';
import { formatearPrecio } from '@utils/formatearPrecio';

/**
 * Máximo de unidades de un mismo producto que se pueden tener en el carrito.
 * @type {number}
 */
const MAXIMO_POR_PRODUCTO = 99;

/**
 * Página privada con los productos del carrito, sus subtotales y el total a pagar.
 * @method Carrito
 * @return {JSX.Element} Página del carrito.
 */
const Carrito = () => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    /**
     * Pide los items del carrito al servicio.
     * @method cargarCarrito
     * @return {Promise<void>}
     */
    const cargarCarrito = async () => {
      try {
        setItems(await getCarrito());
      } catch {
        setMensaje('No pudimos cargar el carrito. Revisá que el servicio esté corriendo con npm run services.');
      } finally {
        setCargando(false);
      }
    };
    cargarCarrito();
  }, []);

  const total = items.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0);

  /**
   * Suma o resta unidades de un producto, sin bajar de 1 ni superar el máximo.
   * @method cambiarCantidad
   * @param {object} item - Item del carrito que se modifica.
   * @param {number} diferencia - Unidades que se suman (1) o se restan (-1).
   * @return {Promise<void>}
   */
  const cambiarCantidad = async (item, diferencia) => {
    const nuevaCantidad = item.cantidad + diferencia;
    if (nuevaCantidad < 1 || nuevaCantidad > MAXIMO_POR_PRODUCTO) {
      return;
    }
    try {
      const actualizado = await actualizarCantidad(item.id, nuevaCantidad);
      setItems(items.map((actual) => (actual.id === item.id ? actualizado : actual)));
    } catch {
      setMensaje('No pudimos cambiar la cantidad. Probá de nuevo.');
    }
  };

  /**
   * Saca un producto del carrito.
   * @method eliminar
   * @param {string} id - Id del item que se elimina.
   * @return {Promise<void>}
   */
  const eliminar = async (id) => {
    try {
      await eliminarItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch {
      setMensaje('No pudimos eliminar el producto. Probá de nuevo.');
    }
  };

  /**
   * Vacía el carrito y muestra el mensaje que corresponda.
   * @method vaciar
   * @param {string} textoFinal - Mensaje que se muestra al terminar.
   * @return {Promise<void>}
   */
  const vaciar = async (textoFinal) => {
    try {
      await vaciarCarrito(items);
      setItems([]);
      setMensaje(textoFinal);
    } catch {
      setMensaje('No pudimos vaciar el carrito. Probá de nuevo.');
    }
  };

  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Tu Carrito</h2>
        <p className="subtitulo-seccion">Revisá tus productos antes de finalizar la compra.</p>
        <div className="carrito">
          {cargando && <p className="mensaje-estado">Cargando carrito...</p>}
          {!cargando && items.length === 0 && (
            <p className="mensaje-estado">
              Todavía no agregaste nada. <Link to="/productos" className="btn btn-borde btn-chico">Ver productos</Link>
            </p>
          )}
          {items.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={`/imagenes/${item.imagen}`} alt={item.nombre} />
              <div className="carrito-item-info">
                <p><strong>{item.nombre}</strong></p>
                <p>Subtotal: {formatearPrecio(item.precio * item.cantidad)}</p>
              </div>
              <div className="carrito-cantidad">
                <Button variante="borde" chico onClick={() => cambiarCantidad(item, -1)} disabled={item.cantidad <= 1}>−</Button>
                <span aria-label={`Cantidad de ${item.nombre}`}>{item.cantidad}</span>
                <Button variante="borde" chico onClick={() => cambiarCantidad(item, 1)} disabled={item.cantidad >= MAXIMO_POR_PRODUCTO}>+</Button>
              </div>
              <Button variante="secundario" chico onClick={() => eliminar(item.id)}>Eliminar</Button>
            </div>
          ))}
          {items.length > 0 && (
            <>
              <p className="carrito-total">Total: {formatearPrecio(total)}</p>
              <div className="carrito-acciones">
                <Button variante="borde" onClick={() => vaciar('Vaciaste el carrito.')}>Vaciar carrito</Button>
                <Button onClick={() => vaciar('¡Gracias por tu compra! Te enviamos el detalle por correo.')}>Finalizar compra</Button>
              </div>
            </>
          )}
          <p className="mensaje-exito" aria-live="polite">{mensaje}</p>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
