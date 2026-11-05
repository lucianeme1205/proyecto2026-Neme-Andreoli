/**
 * Botón reutilizable con las variantes de estilo de Tersa.
 * @method Button
 * @param {object} props - Propiedades del botón.
 * @param {React.ReactNode} props.children - Texto o contenido del botón.
 * @param {Function} [props.onClick] - Función que se ejecuta al hacer clic.
 * @param {string} [props.type] - Tipo de botón: "button" o "submit".
 * @param {string} [props.variante] - Estilo del botón: "primario", "secundario" o "borde".
 * @param {boolean} [props.chico] - Si es true, el botón es más chico.
 * @param {boolean} [props.ancho] - Si es true, el botón ocupa todo el ancho disponible.
 * @param {boolean} [props.disabled] - Si es true, el botón está deshabilitado.
 * @return {JSX.Element} Botón con estilos.
 */
const Button = ({ children, onClick, type = 'button', variante = 'primario', chico = false, ancho = false, disabled = false }) => {
  const clases = ['btn', `btn-${variante}`, chico ? 'btn-chico' : '', ancho ? 'btn-ancho' : ''].filter(Boolean).join(' ');

  return (
    <button type={type} className={clases} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;