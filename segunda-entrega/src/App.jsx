import { Route, Routes } from 'react-router-dom';
import Layout from '@layout/Layout';
import ProtectedRoute from '@components/ProtectedRoute';
import Inicio from '@pages/Inicio';
import Productos from '@pages/Productos';
import Nosotras from '@pages/Nosotras';
import Contacto from '@pages/Contacto';
import Login from '@pages/Login';
import Carrito from '@pages/Carrito';
import NoEncontrada from '@pages/NoEncontrada';

/**
 * Define las rutas del sitio. Todas se muestran dentro del Layout,
 * y el carrito solo se puede ver con la sesión iniciada.
 * @method App
 * @return {JSX.Element} Rutas de la aplicación.
 */
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="nosotras" element={<Nosotras />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="carrito" element={<Carrito />} />
        </Route>
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default App;
