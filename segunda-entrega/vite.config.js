import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

/**
 * Devuelve la ruta absoluta de una carpeta dentro de src, para usarla como alias.
 * @method rutaSrc
 * @param {string} carpeta - Nombre de la carpeta dentro de src.
 * @return {string} Ruta absoluta de la carpeta.
 */
const rutaSrc = (carpeta) => fileURLToPath(new URL(`./src/${carpeta}`, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': rutaSrc(''),
      '@api': rutaSrc('api'),
      '@assets': rutaSrc('assets'),
      '@components': rutaSrc('components'),
      '@context': rutaSrc('context'),
      '@hooks': rutaSrc('hooks'),
      '@layout': rutaSrc('layout'),
      '@pages': rutaSrc('pages'),
      '@providers': rutaSrc('providers'),
      '@styles': rutaSrc('styles'),
      '@utils': rutaSrc('utils'),
    },
  },
});

