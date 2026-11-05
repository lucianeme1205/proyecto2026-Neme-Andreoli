/**
 * Campo de formulario reutilizable con label y mensaje de error accesible.
 * Si se indica multilinea, muestra un textarea en lugar de un input.
 * @method Input
 * @param {object} props - Propiedades del campo.
 * @param {string} props.id - Id del campo, que también usa el label.
 * @param {string} props.label - Texto del label.
 * @param {string} props.value - Valor actual del campo.
 * @param {Function} props.onChange - Función que se ejecuta cada vez que cambia el valor.
 * @param {string} [props.error] - Mensaje de error. Si está vacío, no se muestra.
 * @param {string} [props.type] - Tipo de input, por ejemplo "text", "email" o "password".
 * @param {string} [props.placeholder] - Texto de ayuda dentro del campo.
 * @param {number} [props.maxLength] - Cantidad máxima de caracteres.
 * @param {boolean} [props.multilinea] - Si es true, se muestra un textarea.
 * @return {JSX.Element} Campo con su label y su mensaje de error.
 */
const Input = ({ id, label, value, onChange, error = '', type = 'text', placeholder, maxLength, multilinea = false }) => {
  const idError = `${id}-error`;
  const propiedades = {
    id,
    name: id,
    value,
    onChange,
    placeholder,
    maxLength,
    'aria-invalid': error !== '',
    'aria-describedby': error ? idError : undefined,
  };

  return (
    <div className={error ? 'campo campo-invalido' : 'campo'}>
      <label htmlFor={id}>{label}</label>
      {multilinea ? <textarea rows="4" {...propiedades} /> : <input type={type} {...propiedades} />}
      <p id={idError} className="mensaje-error" aria-live="polite">
        {error}
      </p>
    </div>
  );
};

export default Input;