# Tersa — Cosmética y Maquillaje

Proyecto integrador de la materia **Taller de Desarrollo Web** (UCC) — **2026**.

Sitio web de e-commerce para **Tersa**, una marca ficticia de cosmética vegana y cruelty-free, con catálogo de productos, carrito de compras, registro e inicio de sesión, y formulario de contacto.

## Índice

- [Tersa — Cosmética y Maquillaje](#tersa--cosmética-y-maquillaje)
  - [Índice](#índice)
  - [Autoras](#autoras)
  - [Sitio publicado](#sitio-publicado)
  - [Segunda entrega: React](#segunda-entrega-react)
    - [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
    - [Scripts](#scripts)
    - [Usuario de prueba](#usuario-de-prueba)
    - [Páginas](#páginas)
    - [Funcionalidades de la segunda entrega](#funcionalidades-de-la-segunda-entrega)
    - [Servicio mock](#servicio-mock)
    - [Tecnologías de la segunda entrega](#tecnologías-de-la-segunda-entrega)
    - [Estructura de la segunda entrega](#estructura-de-la-segunda-entrega)
    - [Vulnerabilidades](#vulnerabilidades)
  - [Primera entrega: HTML, CSS y JavaScript](#primera-entrega-html-css-y-javascript)
    - [Contenido](#contenido)
    - [Funcionalidades](#funcionalidades)
    - [Validaciones](#validaciones)
    - [Tecnologías](#tecnologías)
    - [Prototipos](#prototipos)

## Autoras

- **Lucía Neme** — [@lucianeme1205](https://github.com/lucianeme1205)
- **Sofía Andreoli** — [@sofiandDD](https://github.com/sofiandDD)

## Sitio publicado

- **Primera entrega en GitHub Pages:** [https://lucianeme1205.github.io/proyecto2026-Neme-Andreoli/primera-entrega/](https://lucianeme1205.github.io/proyecto2026-Neme-Andreoli/primera-entrega/)
- **Repositorio:** [https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli](https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli)

## Segunda entrega: React

La segunda entrega está en la carpeta `segunda-entrega` y es una aplicación de **React** creada con **Vite**, que obtiene los productos de un servicio mock hecho con **json-server**.

### Cómo ejecutar el proyecto

Se necesita tener instalado **Node.js** (versión 22 o superior).

1. Clonar el repositorio y entrar a la carpeta de la segunda entrega:
   ```bash
   git clone https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli.git
   cd proyecto2026-Neme-Andreoli/segunda-entrega
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. En una terminal, levantar el servicio mock (queda escuchando en `http://localhost:4000`):
   ```bash
   npm run services
   ```
4. En **otra** terminal, levantar la aplicación:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador la dirección que muestra la terminal (por defecto `http://localhost:5173`).

> **Importante:** si el servicio mock no está corriendo, la aplicación muestra un mensaje de error al cargar los productos y el carrito.

### Scripts

| Script | Comando | Qué hace |
|---|---|---|
| `dev` | `npm run dev` | Levanta la aplicación en modo desarrollo |
| `services` | `npm run services` | Levanta json-server con `src/data/db.json` en el puerto 4000 |
| `build` | `npm run build` | Genera la versión de producción en `dist` |
| `lint` | `npm run lint` | Revisa el código con ESLint |
| `preview` | `npm run preview` | Muestra la versión de producción generada |

### Usuario de prueba

| Campo | Valor |
|---|---|
| Correo | `admin@tersa.com` |
| Contraseña | `1234` |

También se puede crear una cuenta nueva desde la página **Crear cuenta** (`/registro`).

### Páginas

Todas las páginas se muestran dentro de un **Layout** con encabezado y pie, usando `<Outlet />` de react-router-dom.

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Inicio | Presentación de la marca y productos destacados |
| `/productos` | Productos | Catálogo completo con buscador y filtro por categoría |
| `/nosotras` | Nosotras | Historia y valores de Tersa |
| `/contacto` | Contacto | Formulario de consultas |
| `/login` | Login | Inicio de sesión |
| `/registro` | Registro | Creación de una cuenta nueva |
| `/carrito` | Carrito | Carrito de compras (**solo con sesión iniciada**) |
| Cualquier otra | No encontrada | Mensaje de página inexistente |

### Funcionalidades de la segunda entrega

- **Catálogo dinámico:** los productos se obtienen del servicio mock con `fetch` y `async/await`.
- **Buscador y filtro:** se busca por nombre (sin importar mayúsculas ni acentos) y se filtra por categoría.
- **Registro e inicio de sesión:** se puede crear una cuenta, que se guarda en el servicio mock, y después iniciar sesión con ella. No se permiten dos cuentas con el mismo correo. Usa Context API, un provider y el hook personalizado `useAuth`. La sesión se guarda en `localStorage` (sin la contraseña), así que se mantiene al recargar.
- **Ruta protegida:** si no hay sesión, el carrito redirige al login.
- **Carrito:** se agregan productos, se suman o restan unidades, se eliminan y se vacía. Los datos se guardan en el servicio mock.
- **Validaciones en tiempo real:** los formularios de contacto, login y registro, y la cantidad de cada producto se validan con `onChange` y muestran mensajes de error accesibles (`aria-invalid`, `aria-describedby` y `aria-live`).
- **Componentes genéricos:** `Button`, `Input` y `ProductCard` se reutilizan en varias páginas.

### Servicio mock

El archivo `src/data/db.json` tiene cuatro colecciones:

| Colección | Uso | Métodos |
|---|---|---|
| `productos` | Catálogo de productos | GET |
| `carrito` | Productos agregados al carrito | GET, POST, PATCH, DELETE |
| `consultas` | Consultas del formulario de contacto | POST |
| `usuarios` | Cuentas para iniciar sesión | GET, POST |

La dirección del servicio se configura en el archivo `.env` con la variable `VITE_BASE_URL`.

### Tecnologías de la segunda entrega

- **React 19** — componentes, hooks (`useState`, `useEffect`, `useContext`, `useNavigate`) y Context API
- **Vite** — creación del proyecto, servidor de desarrollo y alias de imports
- **React Router** — rutas, rutas anidadas con `Outlet` y rutas protegidas
- **Sass (SCSS)** — variables, mixins, anidación, parciales con `@use` y `@each`
- **json-server** — servicio mock con `db.json`
- **ESLint** — revisión de código
- **Google Fonts** — tipografía *Poppins*

### Estructura de la segunda entrega

```
segunda-entrega/
├── .env
├── index.html
├── jsconfig.json
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.png
│   └── imagenes/          → fotos de los productos
└── src/
    ├── api/               → funciones que consultan el servicio mock
    ├── assets/            → imagen de presentación
    ├── components/        → Header, Footer, Button, Input, ProductCard, ProtectedRoute
    ├── context/           → AuthContext
    ├── data/              → db.json del servicio mock
    ├── hooks/             → useAuth, useProductos, useAgregarAlCarrito
    ├── layout/            → Layout con el Outlet de las rutas
    ├── pages/             → Inicio, Productos, Nosotras, Contacto, Login, Registro, Carrito, NoEncontrada
    ├── providers/         → AuthProvider
    ├── styles/            → archivos .scss
    ├── utils/             → validaciones y formato de precios
    ├── App.jsx
    └── main.jsx
```

### Vulnerabilidades

Al ejecutar `npm audit` no se encontraron vulnerabilidades (0 críticas, 0 altas, 0 moderadas y 0 bajas).

## Primera entrega: HTML, CSS y JavaScript

La primera entrega está en la carpeta `primera-entrega`.

### Contenido

El sitio tiene **3 páginas** que comparten encabezado, navegación, pie de página y carrito:

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Presentación de la marca y catálogo de productos |
| Nosotras | `nosotras.html` | Historia y filosofía de Tersa |
| Contacto | `contacto.html` | Formulario de consultas |

### Funcionalidades

- El catálogo tiene **8 productos** en tres categorías: **Rostro**, **Labios** y **Ojos**.
- Un **buscador** filtra los productos por nombre y un **filtro por categoría** permite ver solo una categoría.
- En cada producto se escribe la **cantidad** y se agrega al carrito, que calcula el **subtotal** y el **total**.
- El carrito se guarda en `localStorage`, por lo que se mantiene al recargar o cambiar de página.

### Validaciones

Cuando un valor es incorrecto se avisa con un `alert` y se blanquea el campo:

| Campo | Regla |
|---|---|
| Cantidad | Número entero mayor a 0, hasta 99 unidades por producto en el carrito |
| Nombre y Apellido | Al menos dos palabras, solo letras, guiones o apóstrofes (máximo 50 caracteres) |
| Correo Electrónico | Formato `nombre@correo.com` |
| Consulta o Mensaje | Mínimo 10 caracteres |

### Tecnologías

- **HTML5** — etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — variables, Flexbox, Grid y `@media` para la versión mobile
- **JavaScript** — funciones flecha, manejo del DOM y `localStorage`
- **Google Fonts** — tipografía *Poppins*
- **Git y GitHub** — control de versiones y publicación con GitHub Pages

### Prototipos

- **Sketch:** prototipo en papel, en versión desktop y mobile, dentro de `primera-entrega/Sketch`.
- **Wireframe:** prototipo digital realizado en Figma, en versión desktop y mobile, dentro de `primera-entrega/Wireframe`.