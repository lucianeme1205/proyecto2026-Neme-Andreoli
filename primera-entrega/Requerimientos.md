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
- [x] Dibujado con algún programa como: Figma, AdobeXD, Canvas, Draw.io en Drive, Pencil Project, Mockups, NinjaMock, o similares.
- [x] Diseño de Mensajes de error para el usuario
- [x] Versión Desktop y Mobile
- [x] Guardado en formato PNG, JPG ó PDF
- [x] Dentro de una carpeta llamada "Wireframe" ó "Mockup"


## Repositorio
- [x] El proyecto debe estar subido al repositorio adecuado "Proyecto2026-ApellidoAlumno1-ApellidoAlumno2" (en gitHub Classroom)
- [x] Crear un Readme.MD en la base del proyecto y colocar información del proyecto/página (mínimamente: título del proyecto, autores, link de gh-pages, contenido de la página,  listado de tecnologías usadas, etc)
- [x] En el **readme.md** se debe emplear **Markdown** y aplicar negrita, título de orden 1, 2 y 3, link, items, tabla, index a cada sección
- [x] El código debe estar en **gitHubPages** (emplear gh-pages o configurar github para que se tome a la main como la página a visualizar)
- [x] Se debe crear al menos una branch por cada desarrollador
- [x] Publicar la Web empleando GitHubPages
- [x] El repositorio no debe contener archivos innecesarios (no debe contener .idea o .vsc o .DS_Store o node_modules, en todo caso emplear **.gitignore**)
- [x] Se debe emplear conventional commits
- [x] El historial debe ser consistente y tener al menos 10 commits separados en al menos 4 días

## Proyecto general
- [x] NO está permitido descargar un TEMPLATE (diseño 100% desde cero)
- [x] La página principal debe llamarse index
- [x] La estructura del proyecto debe ser adecuada (crear una carpeta para las imágenes, otra para los sketch/mockups).
- [x] Identar correctamente el código
- [x] No debe haber errores presentes (en Webstorm *Code* > *Inspect Code* para verificar que no haya errores)
- [x] Se debe emplear favicon
- [x] Emplear alguna fuente de google fonts o subir al proyecto alguna fuente externa (aunque sea para un título)
- [x] Debe haber navegación entre todas las páginas
- [x] No debe haber errores de ortografía en el contenido visual
- [x] "Lorem ipsum" es sólo válido para los prototipos, NO para la página
- [x] No debe existir código comentado

## Sobre el HTML
- [x] Todas las etiquetas deben estar en minúscula
- [x] Poner comillas a todos los atributos
- [x] **Title** debe contener el título de la página
- [x] En el ```<head></head>``` incluir las etiquetas ```<meta>``` detallando: autor, descripción y palabras clave
- [x] Emplear al menos 3 etiquetas semánticas diferentes
- [x] Emplear ```<header></header>```. En el contenido de la cabecera debe haber un título ```<h1></h1>```, puede tener color de fondo, algún logotipo, etc.
- [x] La estructura de la página debe estar definida con ```<div></div>```
- [x] Debe contener al menos 3 elementos de tipo ```<input>``` o ```<select>``` o ```<button>``` que le permitan al usuario ingresar valores para poder realizar un cálculo de un ejercicio o seleccionar opciones o llamar a una función.
- [x] Emplear el atributo **placeholder** (mínimamente en 1 input)
- [x] Emplear el atributo **size** para que el tamaño de los inputs sea prolijo
- [x] Emplear el atributo **maxlength** para que el usurario no pueda ingresar valores "muy grandes"
- [x] No espaciar con excesivos ```<br>```. Utilizar márgenes, paddings, etc.
- [x] La anidación de etiquetas HTML debe ser correcta.
- [x] No utilizar etiquetas deprecadas.
- [x] Todas las etiquetas que correspondan deben estar correctamente cerradas
- [x] Los ids de los elementos deben ser unívocos

## Imágenes
- [x] Debe contener por lo menos una etiqueta ```<img>``` en la página.
- [x] Todas las imágenes deben ser incluidas en el repositorio dentro de una carpeta llamada **imagenes** (salvo que sean demasiado pesadas. En ese caso, se puede emplear un servidor externo).
- [x] No se deben subir videos en el repositorio (excepto que sean MUY livianos).
- [x] Toda imagen debe tener su atributo alt
- [x] Las imágenes deben poseer un nombre representativo 

## Sobre el CSS
- [x] El estilo de los elementos debe establecerse en un archivo CSS (prohibido poner el atributo style a los elementos o emplear estilos incrustados).
- [x] El CSS debe contar mínimo con un tipo de cada forma (por Tag, por ID y por clase).
- [x] Se debe emplear pseudoclase
- [x] No emplear ```!important```
- [x] El diseño de la página debe ser consistente
- [x] Debe existir un único archivo CSS (se debe evitar código duplicado. Se debe aplicar re-utilización de código/estilos)

#### Sobre Accesibilidad
- [x] Toda imagen debe tener su atributo alt
- [x] Todo ```<input>``` o ```<select>``` debe tener su ```<label>```
- [x] Los labels deben contener el atributo **for** (el for debe contener el id del input al cual se referencia) 
- [x] Si hay una tabla en la página, debe contener ```<caption></caption>```

#### Sobre la funcionalidad JavaScript
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
- [x] Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert o dialog, y que blanquee el contenido del campo.
- [x] Una función que calcule/muestre algo en base a los valores ingresados por el usuario en los inputs.
- [x] El código Js debe estar en un archivo externo
- [x] Se debe emplear var, let o const según corresponda para mayor eficiencia
- [x] Los event listener deben ser colocados en el HTML
- [x] No deben existir funciones innecesarias que no se llamen en ninguna sección del código
- [x] Las funciones deben estar escritas cómo **función flecha**
- [x] No debe haber errores JavaScript presentes (F12 > Consola)
- [x] El funcionamiento de la página debe ser consistente.

## Sobre la documentación
- [x] **TODAS** las funciones javaScript deben estar documentadas como vimos en clase.
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
