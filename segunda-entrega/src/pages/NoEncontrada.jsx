import { Link } from 'react-router-dom';

/**
 * Página que se muestra cuando la dirección no existe.
 * @method NoEncontrada
 * @return {JSX.Element} Mensaje de página no encontrada.
 */
const NoEncontrada = () => {
  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Página no encontrada</h2>
        <p className="subtitulo-seccion">La página que buscás no existe o cambió de lugar.</p>
        <p className="mensaje-estado">
          <Link to="/" className="btn btn-primario">Volver al inicio</Link>
        </p>
      </div>
    </section>
  );
};

export default NoEncontrada;