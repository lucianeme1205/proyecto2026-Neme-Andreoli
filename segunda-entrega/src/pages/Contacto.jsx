import { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import { enviarConsulta } from '@api/consultas';
import { validarEmail, validarMensaje, validarNombre } from '@utils/validaciones';

/**
 * Valores iniciales del formulario.
 * @type {{nombre: string, email: string, mensaje: string}}
 */
const FORMULARIO_VACIO = { nombre: '', email: '', mensaje: '' };

/**
 * Función de validación que corresponde a cada campo del formulario.
 * @type {Object<string, Function>}
 */
const VALIDADORES = {
  nombre: validarNombre,
  email: validarEmail,
  mensaje: validarMensaje,
};

/**
 * Página de contacto con un formulario que se valida mientras el usuario escribe.
 * @method Contacto
 * @return {JSX.Element} Página de contacto.
 */
const Contacto = () => {
  const [datos, setDatos] = useState(FORMULARIO_VACIO);
  const [errores, setErrores] = useState(FORMULARIO_VACIO);
  const [estado, setEstado] = useState('');

  /**
   * Guarda lo que se escribe en un campo y lo valida en el momento.
   * @method cambiarCampo
   * @param {Event} evento - Evento de cambio del campo.
   * @return {void}
   */
  const cambiarCampo = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
    setErrores({ ...errores, [name]: VALIDADORES[name](value) });
    setEstado('');
  };

  /**
   * Valida todos los campos y, si están bien, envía la consulta al servicio.
   * @method enviar
   * @param {Event} evento - Evento submit del formulario.
   * @return {Promise<void>}
   */
  const enviar = async (evento) => {
    evento.preventDefault();
    const nuevosErrores = {
      nombre: validarNombre(datos.nombre),
      email: validarEmail(datos.email),
      mensaje: validarMensaje(datos.mensaje),
    };
    setErrores(nuevosErrores);
    if (Object.values(nuevosErrores).some((error) => error !== '')) {
      return;
    }
    try {
      await enviarConsulta({ ...datos, fecha: new Date().toISOString() });
      setDatos(FORMULARIO_VACIO);
      setEstado('¡Gracias por tu consulta! Te responderemos a la brevedad.');
    } catch {
      setEstado('No pudimos enviar tu consulta. Probá de nuevo en unos minutos.');
    }
  };

  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Contacto / Consultas</h2>
        <p className="subtitulo-seccion">Escribinos tu consulta y te respondemos a la brevedad.</p>
        <form className="formulario" onSubmit={enviar} noValidate>
          <Input id="nombre" label="Nombre y Apellido:" value={datos.nombre} onChange={cambiarCampo} error={errores.nombre} placeholder="Tu nombre completo" maxLength={50} />
          <Input id="email" label="Correo Electrónico:" type="email" value={datos.email} onChange={cambiarCampo} error={errores.email} placeholder="ejemplo@correo.com" maxLength={50} />
          <Input id="mensaje" label="Consulta o Mensaje:" value={datos.mensaje} onChange={cambiarCampo} error={errores.mensaje} placeholder="Escribinos tu consulta..." maxLength={300} multilinea />
          <Button type="submit" ancho>Enviar Mensaje</Button>
          <p className="mensaje-exito" aria-live="polite">{estado}</p>
        </form>
      </div>
    </section>
  );
};

export default Contacto;