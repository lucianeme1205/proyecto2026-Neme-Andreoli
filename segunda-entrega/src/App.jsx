import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import Nosotras from '@pages/Nosotras';
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
        <Route path="nosotras" element={<Nosotras />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default App;