# Requisitos del Primer Parcial
* Sketch
* Wireframe/Mockup
* Repositorio
* Proyecto general
* HTML
* Imágenes
* CSS
* Accesibilidad
* JavaScript
* Documentación

## Sketch
- [ ] Versión Desktop y Mobile
- [ ] Guardado en formato PNG, JPG ó PDF
- [ ] Dentro de una carpeta llamada "Sketch"
- [ ] Tener en cuenta los mensajes de error para el usuario
- [ ] Debe ser realizado con el template

## Wireframe/Mockup
- [ ] Dibujado con algún programa como: Figma, AdobeXD, Canvas, Draw.io en Drive, Pencil Project, Mockups, NinjaMock, o similares.
- [ ] Diseño de Mensajes de error para el usuario
- [ ] Versión Desktop y Mobile
- [ ] Guardado en formato PNG, JPG ó PDF
- [ ] Dentro de una carpeta llamada "Wireframe" ó "Mockup"


## Repositorio
- [ ] El proyecto debe estar subido al repositorio adecuado "Proyecto2026-ApellidoAlumno1-ApellidoAlumno2" (en gitHub Classroom)
- [ ] Crear un Readme.MD en la base del proyecto y colocar información del proyecto/página (mínimamente: título del proyecto, autores, link de gh-pages, contenido de la página,  listado de tecnologías usadas, etc)
- [ ] En el **readme.md** se debe emplear **Markdown** y aplicar negrita, título de orden 1, 2 y 3, link, items, tabla, index a cada sección
- [ ] El código debe estar en **gitHubPages** (emplear gh-pages o configurar github para que se tome a la main como la página a visualizar)
- [ ] Se debe crear al menos una branch por cada desarrollador
- [ ] Publicar la Web empleando GitHubPages
- [ ] El repositorio no debe contener archivos innecesarios (no debe contener .idea o .vsc o .DS_Store o node_modules, en todo caso emplear **.gitignore**)
- [ ] Se debe emplear conventional commits
- [ ] El historial debe ser consistente y tener al menos 10 commits separados en al menos 4 días

## Proyecto general
- [ ] NO está permitido descargar un TEMPLATE (diseño 100% desde cero)
- [ ] La página principal debe llamarse index
- [ ] La estructura del proyecto debe ser adecuada (crear una carpeta para las imágenes, otra para los sketch/mockups).
- [ ] Identar correctamente el código
- [ ] No debe haber errores presentes (en Webstorm *Code* > *Inspect Code* para verificar que no haya errores)
- [ ] Se debe emplear favicon
- [ ] Emplear alguna fuente de google fonts o subir al proyecto alguna fuente externa (aunque sea para un título)
- [ ] Debe haber navegación entre todas las páginas
- [ ] No debe haber errores de ortografía en el contenido visual
- [ ] "Lorem ipsum" es sólo válido para los prototipos, NO para la página
- [ ] No debe existir código comentado

## Sobre el HTML
- [ ] Todas las etiquetas deben estar en minúscula
- [ ] Poner comillas a todos los atributos
- [ ] **Title** debe contener el título de la página
- [ ] En el ```<head></head>``` incluir las etiquetas ```<meta>``` detallando: autor, descripción y palabras clave
- [ ] Emplear al menos 3 etiquetas semánticas diferentes
- [ ] Emplear ```<header></header>```. En el contenido de la cabecera debe haber un título ```<h1></h1>```, puede tener color de fondo, algún logotipo, etc.
- [ ] La estructura de la página debe estar definida con ```<div></div>```
- [ ] Debe contener al menos 3 elementos de tipo ```<input>``` o ```<select>``` o ```<button>``` que le permitan al usuario ingresar valores para poder realizar un cálculo de un ejercicio o seleccionar opciones o llamar a una función.
- [ ] Emplear el atributo **placeholder** (mínimamente en 1 input)
- [ ] Emplear el atributo **size** para que el tamaño de los inputs sea prolijo
- [ ] Emplear el atributo **maxlength** para que el usurario no pueda ingresar valores "muy grandes"
- [ ] No espaciar con excesivos ```<br>```. Utilizar márgenes, paddings, etc.
- [ ] La anidación de etiquetas HTML debe ser correcta.
- [ ] No utilizar etiquetas deprecadas.
- [ ] Todas las etiquetas que correspondan deben estar correctamente cerradas
- [ ] Los ids de los elementos deben ser unívocos

## Imágenes
- [ ] Debe contener por lo menos una etiqueta ```<img>``` en la página.
- [ ] Todas las imágenes deben ser incluidas en el repositorio dentro de una carpeta llamada **imagenes** (salvo que sean demasiado pesadas. En ese caso, se puede emplear un servidor externo).
- [ ] No se deben subir videos en el repositorio (excepto que sean MUY livianos).
- [ ] Toda imagen debe tener su atributo alt
- [ ] Las imágenes deben poseer un nombre representativo 

## Sobre el CSS
- [ ] El estilo de los elementos debe establecerse en un archivo CSS (prohibido poner el atributo style a los elementos o emplear estilos incrustados).
- [ ] El CSS debe contar mínimo con un tipo de cada forma (por Tag, por ID y por clase).
- [ ] Se debe emplear pseudoclase
- [ ] No emplear ```!important```
- [ ] El diseño de la página debe ser consistente
- [ ] Debe existir un único archivo CSS (se debe evitar código duplicado. Se debe aplicar re-utilización de código/estilos)

#### Sobre Accesibilidad
- [ ] Toda imagen debe tener su atributo alt
- [ ] Todo ```<input>``` o ```<select>``` debe tener su ```<label>```
- [ ] Los labels deben contener el atributo **for** (el for debe contener el id del input al cual se referencia) 
- [ ] Si hay una tabla en la página, debe contener ```<caption></caption>```

#### Sobre la funcionalidad JavaScript
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
- [ ] Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert o dialog, y que blanquee el contenido del campo.
- [ ] Una función que calcule/muestre algo en base a los valores ingresados por el usuario en los inputs.
- [ ] El código Js debe estar en un archivo externo
- [ ] Se debe emplear var, let o const según corresponda para mayor eficiencia
- [ ] Los event listener deben ser colocados en el HTML
- [ ] No deben existir funciones innecesarias que no se llamen en ninguna sección del código
- [ ] Las funciones deben estar escritas cómo **función flecha**
- [ ] No debe haber errores JavaScript presentes (F12 > Consola)
- [ ] El funcionamiento de la página debe ser consistente.

## Sobre la documentación
- [ ] **TODAS** las funciones javaScript deben estar documentadas como vimos en clase.
````javascript
/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */
````

## Sobre las Correcciones
- [ ] Se corregirá el proyecto con el último commit realizado en Github hasta las 23:59 del día anterior a la fecha de entrega
- [ ] Las notas serán de la siguiente manera: (Por ejemplo 55% 4; 59% 5; 67% 6; 75% 7; 82% 8; 89% 9; 97% 10)
- [ ] Todas los errores o la falta de cumplimiento de los requisitos serán reportados a través de la plataforma de GitHub, en la pestaña de ISSUES
![Issues en GitHub](images/correcciones.jpg)


| Items a Evaluar    | %   |
|--------------------|-----|
| Prototipo en papel | 7%  |
| Prototipo Mockup   | 8%  |
| HTML+CSS+Js        | 85% |

Por cada corrección o defecto en el HTML+CSS+Js se descontará un 5% del 85%.
