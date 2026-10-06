# Tersa — Cosmética y Maquillaje

Proyecto integrador de la materia **Taller de Desarrollo Web** (UCC) — **Primer Parcial 2026**.

Sitio web de e-commerce para **Tersa**, una marca ficticia de cosmética vegana y cruelty-free, con catálogo de productos, carrito de compras y formulario de contacto.

## Índice

- [Tersa — Cosmética y Maquillaje](#tersa--cosmética-y-maquillaje)
  - [Índice](#índice)
  - [Autoras](#autoras)
  - [Sitio publicado](#sitio-publicado)
  - [Contenido](#contenido)
  - [Funcionalidades](#funcionalidades)
    - [Carrito de compras](#carrito-de-compras)
    - [Validaciones](#validaciones)
  - [Tecnologías](#tecnologías)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Prototipos](#prototipos)
    - [Sketch](#sketch)
    - [Wireframe](#wireframe)

## Autoras

- **Lucía Neme** — [@lucianeme1205](https://github.com/lucianeme1205)
- **Sofía Andreoli** —  [@sofiandDD ](https://github.com/sofiandDD)

## Sitio publicado

- **GitHub Pages:** [https://lucianeme1205.github.io/proyecto2026-Neme-Andreoli/primera-entrega/](https://lucianeme1205.github.io/proyecto2026-Neme-Andreoli/primera-entrega/)
- **Repositorio:** [https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli](https://github.com/lucianeme1205/proyecto2026-Neme-Andreoli)

## Contenido

El sitio tiene **3 páginas** que comparten encabezado, navegación, pie de página y carrito:

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Presentación de la marca y catálogo de productos |
| Nosotras | `nosotras.html` | Historia y filosofía de Tersa |
| Contacto | `contacto.html` | Formulario de consultas |

## Funcionalidades

### Carrito de compras

- En cada producto se escribe la **cantidad** y se agrega al carrito.
- El carrito calcula el **subtotal** de cada producto y el **total** a pagar.
- Se puede eliminar un producto o vaciar el carrito completo.
- El carrito se guarda en `localStorage`, por lo que se mantiene al recargar o cambiar de página.

### Validaciones

Cuando un valor es incorrecto se avisa con un `alert` y se blanquea el campo:

| Campo | Regla |
|---|---|
| Cantidad | Número entero mayor a 0 |
| Nombre y Apellido | Solo letras, mínimo 3 caracteres |
| Correo Electrónico | Formato `nombre@correo.com` |
| Consulta o Mensaje | Mínimo 10 caracteres |

## Tecnologías

- **HTML5** — etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — variables, Flexbox, Grid y `@media` para la versión mobile
- **JavaScript** — funciones flecha, manejo del DOM y `localStorage`
- **Google Fonts** — tipografía *Poppins*
- **Git y GitHub** — control de versiones y publicación con GitHub Pages

## Estructura del proyecto

```
proyecto2026-Neme-Andreoli/
├── README.md
├── .gitignore
├── primera-entrega/
│   ├── index.html
│   ├── nosotras.html
│   ├── contacto.html
│   ├── style.css
│   ├── script.js
│   ├── imagenes/
│   ├── Sketch/
│   └── Wireframe/
└── segunda-entrega/
```

## Prototipos

### Sketch

Prototipo en papel, en versión desktop y mobile, dentro de la carpeta `primera-entrega/Sketch`.

### Wireframe

Prototipo digital realizado en Figma, en versión desktop y mobile, dentro de la carpeta `primera-entrega/Wireframe`.