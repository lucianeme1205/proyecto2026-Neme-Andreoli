import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import Button from '@components/Button';
import { useAuth } from '@hooks/useAuth';
import { validarEmail, validarPassword } from '@utils/validaciones';

/**
 * Página para iniciar sesión. Valida los campos mientras se escriben.
 * @method Login
 * @return {JSX.Element} Formulario de inicio de sesión, o una redirección si ya hay sesión.
 */
const Login = () => {
  const { login, estaLogueado } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  if (estaLogueado) {
    return <Navigate to="/carrito" replace />;
  }

  /**
   * Guarda el correo y lo valida mientras se escribe.
   * @method cambiarEmail
   * @param {Event} evento - Evento de cambio del input.
   * @return {void}
   */
  const cambiarEmail = (evento) => {
    setEmail(evento.target.value);
    setErrorEmail(validarEmail(evento.target.value));
    setErrorLogin('');
  };

  /**
   * Guarda la contraseña y la valida mientras se escribe.
   * @method cambiarPassword
   * @param {Event} evento - Evento de cambio del input.
   * @return {void}
   */
  const cambiarPassword = (evento) => {
    setPassword(evento.target.value);
    setErrorPassword(validarPassword(evento.target.value));
    setErrorLogin('');
  };

  /**
   * Valida los campos e intenta iniciar sesión. Si sale bien, va al carrito.
   * @method ingresar
   * @param {Event} evento - Evento submit del formulario.
   * @return {Promise<void>}
   */
  const ingresar = async (evento) => {
    evento.preventDefault();
    const nuevoErrorEmail = validarEmail(email);
    const nuevoErrorPassword = validarPassword(password);
    setErrorEmail(nuevoErrorEmail);
    setErrorPassword(nuevoErrorPassword);
    if (nuevoErrorEmail || nuevoErrorPassword) {
      return;
    }
    try {
      await login(email, password);
      navigate('/carrito', { replace: true });
    } catch (error) {
      setErrorLogin(error.message);
    }
  };

  return (
    <section className="seccion">
      <div className="container">
        <h2 className="titulo-seccion">Iniciar sesión</h2>
        <p className="subtitulo-seccion">Ingresá para guardar productos en tu carrito.</p>
        <form className="formulario" onSubmit={ingresar} noValidate>
          <Input id="email" label="Correo Electrónico:" type="email" value={email} onChange={cambiarEmail} error={errorEmail} placeholder="admin@tersa.com" maxLength={50} />
          <Input id="password" label="Contraseña:" type="password" value={password} onChange={cambiarPassword} error={errorPassword} maxLength={20} />
          <Button type="submit" ancho>Ingresar</Button>
          <p className="mensaje-error" role="alert">{errorLogin}</p>
          <p className="texto-ayuda">
            ¿No tenés cuenta? <Link to="/registro">Creá una</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;