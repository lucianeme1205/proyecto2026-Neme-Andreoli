import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import Inicio from '@pages/Inicio';
import Productos from '@pages/Productos';
import Nosotras from '@pages/Nosotras';
import Contacto from '@pages/Contacto';
import Login from '@pages/Login';
import NoEncontrada from '@pages/NoEncontrada';

/**
 * Define las rutas del sitio. Todas se muestran dentro del Layout.
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
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default App;
