import { useState } from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import { formatearPrecio } from '@utils/formatearPrecio';
import { validarCantidad } from '@utils/validaciones';

/**
 * Tarjeta de un producto con su foto, precio y un campo para elegir la cantidad.
 * @method ProductCard
 * @param {object} props - Propiedades de la tarjeta.
 * @param {object} props.producto - Producto que se muestra.
 * @param {Function} props.onAgregar - Función que agrega el producto al carrito. Recibe el producto y la cantidad.
 * @return {JSX.Element} Tarjeta del producto.
 */
const ProductCard = ({ producto, onAgregar }) => {
  const [cantidad, setCantidad] = useState('1');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);
  const idCantidad = `cantidad-${producto.id}`;

  /**
   * Guarda la cantidad escrita y la valida mientras se escribe.
   * @method cambiarCantidad
   * @param {Event} evento - Evento de cambio del input.
   * @return {void}
   */
  const cambiarCantidad = (evento) => {
    setCantidad(evento.target.value);
    setError(validarCantidad(evento.target.value));
    setMensaje('');
  };

  /**
   * Agrega el producto al carrito si la cantidad es válida y muestra el resultado.
   * @method agregar
   * @return {Promise<void>}
   */
  const agregar = async () => {
    const errorCantidad = validarCantidad(cantidad);
    if (errorCantidad) {
      setError(errorCantidad);
      return;
    }
    setEnviando(true);
    setMensaje('');
    try {
      const agregado = await onAgregar(producto, Number(cantidad));
      if (agregado) {
        setMensaje('¡Agregado al carrito!');
        setCantidad('1');
      }
    } catch {
      setMensaje('No pudimos agregarlo. Probá de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <article className="tarjeta-producto">
      <img src={`/imagenes/${producto.imagen}`} alt={producto.nombre} />
      <div className="info-producto">
        <p className="marca">{producto.marca}</p>
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.description}</p>
        <p className="categoria">{producto.categoria} · {producto.tono}</p>
        <p className="precio">{formatearPrecio(producto.precio)}</p>
        <Input id={idCantidad} label="Cantidad:" value={cantidad} onChange={cambiarCantidad} error={error} maxLength={2} placeholder="1" />
        <Button variante="borde" chico onClick={agregar} disabled={error !== '' || enviando}>Agregar al carrito</Button>
        <p className="mensaje-exito" aria-live="polite">{mensaje}</p>
      </div>
    </article>
  );
};

export default ProductCard;