import { Link } from 'react-router-dom';

/**
 * Valores de la marca que se muestran en tarjetas.
 * @type {Array<{titulo: string, descripcion: string}>}
 */
const VALORES = [
  { titulo: 'Vegana', descripcion: 'Fórmulas pensadas sin ingredientes de origen animal.' },
  { titulo: 'Cruelty-free', descripcion: 'No testeamos nuestros productos en animales.' },
  { titulo: 'Formulada localmente', descripcion: 'Desarrollamos nuestros productos en el país.' },
];

/**
 * Página con la historia y los valores de Tersa.
 * @method Nosotras
 * @return {JSX.Element} Página Nosotras.
 */
const Nosotras = () => {
  return (
    <>
      <section className="seccion nosotras-seccion">
        <div className="container nosotras-texto">
          <h2>Sobre Tersa</h2>
          <p>Nacimos con la idea de ofrecer productos de cosmética accesibles, cruelty-free y formulados localmente.</p>
          <p>Buscamos que cada producto sea fácil de aplicar y cómodo de llevar durante todo el día.</p>
          <Link to="/productos" className="btn btn-primario">Ver Catálogo</Link>
        </div>
      </section>
      <section className="seccion">
        <div className="container">
          <h2 className="titulo-seccion">Lo que nos define</h2>
          <div className="grid-valores">
            {VALORES.map((valor) => (
              <article key={valor.titulo} className="tarjeta-valor">
                <h3>{valor.titulo}</h3>
                <p>{valor.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotras;