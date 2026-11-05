import { useEffect, useState } from 'react';
import { getProductos } from '@api/productos';

/**
 * Hook que trae los productos del servicio al montar el componente.
 * @method useProductos
 * @return {{productos: Array<object>, cargando: boolean, error: string}} Productos, estado de carga y mensaje de error.
 */
export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    /**
     * Pide los productos al servicio y guarda el resultado o el error.
     * @method cargarProductos
     * @return {Promise<void>}
     */
    const cargarProductos = async () => {
      try {
        const datos = await getProductos();
        setProductos(datos);
      } catch {
        setError('No pudimos cargar los productos. Revisá que el servicio esté corriendo con npm run services.');
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  return { productos, cargando, error };
};
