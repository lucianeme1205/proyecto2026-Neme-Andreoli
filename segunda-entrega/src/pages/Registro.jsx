import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import Button from '@components/Button';
import { useAuth } from '@hooks/useAuth';
import { validarConfirmacion, validarEmail, validarNombre, validarPassword } from '@utils/validaciones';

/**
 * Valores iniciales del formulario de registro.
 * @type {{nombre: string, email: string, password: string, confirmacion: string}}
 */
const FORMULARIO_VACIO = { nombre: '', email: '', password: '', confirmacion: '' };

/**
 * Valida todos los campos del formulario de registro.
 * @method validarFormulario
 * @param {{nombre: string, email: string, password: string, confirmacion: string}} datos - Valores del formulario.
 * @return {{nombre: string, email: string, password: string, confirmacion: string}} Mensaje de error de cada campo.
 */
const validarFormulario = (datos) => ({
  nombre: validarNombre(datos.nombre),
  email: validarEmail(datos.email),
  password: validarPassword(datos.password),
  confirmacion: validarConfirmacion(datos.password, datos.confirmacion),
});

/**
 * Página para crear una cuenta nueva. Valida los campos mientras se escriben.
 * @method Registro
 * @return {JSX.Element} Formulario de registro, o una redirección si ya hay sesión.
 */
const Registro = () => {
  const { registrar, estaLogueado } = useAuth();
  const navigate = useNavigate();
  const [datos, setDatos] = useState(FORMULARIO_VACIO);
  const [errores, setErrores] = useState(FORMULARIO_VACIO);
  const [errorRegistro, setErrorRegistro] = useState('');
  const [enviando, setEnviando] = useState(false);

  if (estaLogueado) {
    return <Navigate to="/carrito" replace />;
  }

  /**
   * Guarda lo que se escribe en un campo y lo valida en el momento.
   * Si cambia la contraseña, también vuelve a comprobar la confirmación.
   * @method cambiarCampo
   * @param {Event} evento - Evento de cambio del campo.
   * @return {void}
   */
  const cambiarCampo = (evento) => {
    const { name, value } = evento.target;
    const nuevosDatos = { ...datos, [name]: value };
    const validaciones = validarFormulario(nuevosDatos);
    const nuevosErrores = { ...errores, [name]: validaciones[name] };
    if (name === 'password' && nuevosDatos.confirmacion !== '') {
      nuevosErrores.confirmacion = validaciones.confirmacion;
    }
    setDatos(nuevosDatos);
    setErrores(nuevosErrores);
    setErrorRegistro('');
  };

  /**
   * Valida todos los campos y, si están bien, crea la cuenta e inicia la sesión.
   * @method crearCuenta
   * @param {Event} evento - Evento submit del formulario.
   * @return {Promise<void>}
   */
  const crearCuenta = async (evento) => {
    evento.preventDefault();
    const nuevosErrores = validarFormulario(datos);
    setErrores(nuevosErrores);
    if (Object.values(nuevosErrores).some((error) => error !== '')) {
      return;
    }
    setEnviando(true);
    try {
      await registrar(datos.nombre, datos.email, datos.password);
      navigate('/carrito', { replace: true });
    } catch (error) {
      setErrorRegistro(error.message);
      setEnviando(false);
    }
  };

  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Crear cuenta</h2>
        <p className="subtitulo-seccion">Registrate para guardar productos en tu carrito.</p>
        <form className="formulario" onSubmit={crearCuenta} noValidate>
          <Input id="nombre" label="Nombre y Apellido:" value={datos.nombre} onChange={cambiarCampo} error={errores.nombre} placeholder="Tu nombre completo" maxLength={50} />
          <Input id="email" label="Correo Electrónico:" type="email" value={datos.email} onChange={cambiarCampo} error={errores.email} placeholder="ejemplo@correo.com" maxLength={50} />
          <Input id="password" label="Contraseña:" type="password" value={datos.password} onChange={cambiarCampo} error={errores.password} maxLength={20} />
          <Input id="confirmacion" label="Repetir contraseña:" type="password" value={datos.confirmacion} onChange={cambiarCampo} error={errores.confirmacion} maxLength={20} />
          <Button type="submit" ancho disabled={enviando}>Crear cuenta</Button>
          <p className="mensaje-error" role="alert">{errorRegistro}</p>
          <p className="texto-ayuda">
            ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registro;