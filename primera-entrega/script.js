/**
 * Listado de productos del catálogo de Tersa.
 * @type {Array<{nombre: string, precio: number, imagen: string}>}
 */
const productos = [
    { nombre: "Labial Matte Velvet", precio: 4200, imagen: "imagenes/labial.jpg" },
    { nombre: "Gloss Brillo Radiante", precio: 3600, imagen: "imagenes/gloss.jpg" },
    { nombre: "Paleta de Sombras Warm", precio: 8900, imagen: "imagenes/paleta.jpg" },
    { nombre: "Máscara Lash Volume", precio: 5200, imagen: "imagenes/mascara.jpg" }
];

/**
 * Formatea un número como precio en pesos argentinos, sin decimales.
 * @method formatearPrecio
 * @param {number} valor - Monto a formatear.
 * @return {string} Precio formateado, por ejemplo "$ 4.200".
 */
const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(valor);
};

/**
 * Obtiene el carrito guardado en localStorage.
 * @method obtenerCarrito
 * @return {Array<{nombre: string, cantidad: number}>} Carrito actual (vacío si no hay nada guardado).
 */
const obtenerCarrito = () => {
    const datos = localStorage.getItem("carritoTersa");
    return datos ? JSON.parse(datos) : [];
};

/**
 * Guarda el carrito en localStorage.
 * @method guardarCarrito
 * @param {Array<{nombre: string, cantidad: number}>} carrito - Carrito a guardar.
 * @return {void}
 */
const guardarCarrito = (carrito) => {
    localStorage.setItem("carritoTersa", JSON.stringify(carrito));
};

/**
 * Avisa al usuario de un error con un alert, blanquea el campo y le devuelve el foco.
 * @method avisarError
 * @param {HTMLElement} campo - Input o textarea que contiene el valor incorrecto.
 * @param {string} mensaje - Texto que se le muestra al usuario.
 * @return {void}
 */
const avisarError = (campo, mensaje) => {
    alert(mensaje);
    campo.value = "";
    campo.focus();
};

/**
 * Comprueba que la cantidad ingresada sea un número entero mayor a 0.
 * Si no lo es, avisa al usuario y blanquea el campo.
 * @method validarCantidad
 * @param {string} inputId - Id del input de cantidad a comprobar.
 * @return {number|null} La cantidad como número, o null si el valor no era válido.
 */
const validarCantidad = (inputId) => {
    const campo = document.getElementById(inputId);
    const valor = campo.value.trim();
    const soloDigitos = /^[0-9]+$/;
    if (!soloDigitos.test(valor) || Number(valor) <= 0) {
        avisarError(campo, "Ingresá una cantidad válida (número entero mayor a 0).");
        return null;
    }
    return Number(valor);
};

/**
 * Actualiza el número que se muestra en el botón del carrito.
 * @method actualizarContadorCarrito
 * @return {void}
 */
const actualizarContadorCarrito = () => {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((acumulado, item) => acumulado + item.cantidad, 0);
    document.getElementById("contadorCarrito").innerHTML = totalItems;
};

/**
 * Calcula el subtotal de cada producto y el total a pagar, y los muestra en el modal del carrito.
 * @method renderizarCarrito
 * @return {void}
 */
const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    let html = "";
    let total = 0;
    carrito.forEach((item) => {
        const productoInfo = productos.find((producto) => producto.nombre === item.nombre);
        if (productoInfo) {
            const subtotal = productoInfo.precio * item.cantidad;
            total += subtotal;
            html += `
                <div class="carrito-item">
                    <img src="${productoInfo.imagen}" alt="${item.nombre}">
                    <div class="carrito-item-info">
                        <p><strong>${item.nombre}</strong></p>
                        <p>Cantidad: ${item.cantidad} — Subtotal: ${formatearPrecio(subtotal)}</p>
                    </div>
                    <button type="button" class="btn btn-borde btn-chico" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
                </div>`;
        }
    });
    document.getElementById("listaCarrito").innerHTML = html || "<p class=\"carrito-vacio\">Todavía no agregaste nada.</p>";
    document.getElementById("totalCarrito").innerHTML = `Total: ${formatearPrecio(total)}`;
};

/**
 * Agrega un producto al carrito con la cantidad escrita por el usuario,
 * comprobando antes que esa cantidad sea válida.
 * @method agregarAlCarrito
 * @param {string} nombre - Nombre del producto.
 * @param {string} inputId - Id del input de cantidad asociado al producto.
 * @return {void}
 */
const agregarAlCarrito = (nombre, inputId) => {
    const cantidad = validarCantidad(inputId);
    if (cantidad !== null) {
        const carrito = obtenerCarrito();
        const existente = carrito.find((item) => item.nombre === nombre);
        if (existente) {
            existente.cantidad += cantidad;
        } else {
            carrito.push({ nombre: nombre, cantidad: cantidad });
        }
        guardarCarrito(carrito);
        actualizarContadorCarrito();
        alert(`Se agregaron ${cantidad} unidad(es) de "${nombre}" al carrito.`);
    }
};

/**
 * Elimina un producto del carrito por completo.
 * @method eliminarDelCarrito
 * @param {string} nombre - Nombre del producto a eliminar.
 * @return {void}
 */
const eliminarDelCarrito = (nombre) => {
    const carrito = obtenerCarrito().filter((item) => item.nombre !== nombre);
    guardarCarrito(carrito);
    actualizarContadorCarrito();
    renderizarCarrito();
};

/**
 * Vacía el carrito completo.
 * @method vaciarCarrito
 * @return {void}
 */
const vaciarCarrito = () => {
    localStorage.removeItem("carritoTersa");
    actualizarContadorCarrito();
    renderizarCarrito();
};

/**
 * Abre el modal del carrito con los datos actuales.
 * @method abrirCarrito
 * @return {void}
 */
const abrirCarrito = () => {
    renderizarCarrito();
    document.getElementById("modalCarrito").classList.add("modal-abierto");
};

/**
 * Cierra el modal del carrito.
 * @method cerrarCarrito
 * @return {void}
 */
const cerrarCarrito = () => {
    document.getElementById("modalCarrito").classList.remove("modal-abierto");
};

/**
 * Comprueba que el nombre tenga al menos 3 caracteres y solo letras y espacios.
 * @method validarNombre
 * @param {string} nombre - Nombre ingresado por el usuario.
 * @return {boolean} true si el nombre es válido.
 */
const validarNombre = (nombre) => {
    const patron = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,50}$/;
    return patron.test(nombre.trim());
};

/**
 * Comprueba que un correo tenga un formato básico correcto.
 * @method validarEmail
 * @param {string} email - Correo ingresado por el usuario.
 * @return {boolean} true si el formato es válido.
 */
const validarEmail = (email) => {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email.trim());
};

/**
 * Comprueba que el mensaje tenga al menos 10 caracteres.
 * @method validarMensaje
 * @param {string} mensaje - Consulta ingresada por el usuario.
 * @return {boolean} true si el mensaje es válido.
 */
const validarMensaje = (mensaje) => {
    return mensaje.trim().length >= 10;
};

/**
 * Comprueba los tres campos del formulario de contacto. Si alguno es incorrecto,
 * avisa al usuario y blanquea ese campo; si todos son correctos, confirma el envío.
 * @method enviarFormulario
 * @param {Event} evento - Evento submit del formulario.
 * @return {boolean} false siempre, para evitar que la página se recargue.
 */
const enviarFormulario = (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    if (!validarNombre(nombre.value)) {
        avisarError(nombre, "Ingresá tu nombre y apellido (solo letras, mínimo 3 caracteres).");
    } else if (!validarEmail(email.value)) {
        avisarError(email, "Ingresá un correo electrónico válido (ej: nombre@correo.com).");
    } else if (!validarMensaje(mensaje.value)) {
        avisarError(mensaje, "Escribí tu consulta (mínimo 10 caracteres).");
    } else {
        alert("¡Gracias por tu consulta! Te responderemos a la brevedad.");
        evento.target.reset();
    }
    return false;
};

/**
 * Inicializa la página: muestra en el encabezado la cantidad de productos guardados en el carrito.
 * @method iniciar
 * @return {void}
 */
const iniciar = () => {
    actualizarContadorCarrito();
};
