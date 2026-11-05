import { Link } from 'react-router-dom';

/**
 * Pie de página del sitio, con links a contacto y al repositorio.
 * @method Footer
 * @return {JSX.Element} Pie de página.
 */
const Footer = () => {
  return (
    <footer className="footer-principal">
      <div className="container footer-container">
        <p>&copy; 2026 Tersa Cosmética — Taller de Desarrollo Web</p>
        <div className="footer-links">
          <Link to="/contacto">Contacto</Link>
          <a href="https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli" target="_blank" rel="noopener noreferrer">
            Repositorio en GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;