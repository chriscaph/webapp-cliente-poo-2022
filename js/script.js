var usuarios = [
    {
        codigo: 'U-1',
        nombre: 'Juan',
        usuario: 'juan123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-2',
        nombre: 'Pedro',
        usuario: 'pedro123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-3',
        nombre: 'Carlos',
        usuario: 'carlos123',
        password: '1234',
        tipo: 'B',
        aprobado: true,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-4',
        nombre: 'María',
        usuario: 'maria123',
        password: '1234',
        tipo: 'B',
        aprobado: false,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-5',
        nombre: 'Alberto',
        usuario: 'alberto123',
        password: '1234',
        tipo: 'B',
        aprobado: null,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-6',
        nombre: 'Alex',
        usuario: 'alex123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-7',
        nombre: 'Matusalen',
        usuario: 'matusalen123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-8',
        nombre: 'Francisco',
        usuario: 'francisco123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-9',
        nombre: 'Paola',
        usuario: 'paola123',
        password: '1234',
        tipo: 'C'
    }
];

var categorias = [
    {
        codigo: 'C-1',
        nombre: 'Farmacias',
        imagen: 'farmacia.png',
        descripcion: 'Lorem ipsum.',
    }          
];

var empresas = [
    {
        codigo: 'E-1',
        nombre: 'Farmacias Kielsa',
        descripcion: 'Ubicados en cualquier punto estratégico del país.',
        telefono: '2772-0011',
        calificacion: 5,
        direccion: 'Estamos ubicados en el boulevard Morazán.',
        correo: 'kielsahonduras@kielsa.com',
        logo: 'kielsa-logo.png',
        banner: 'kielsa-banner.png',
        codigoCategoria: 'C-1'
    }, 
    {
        codigo: 'E-2',
        nombre: 'Farmacias del ahorro',
        descripcion: 'Ubicados en cualquier punto estratégico del país.',
        telefono: '2772-2020',
        calificacion: 4,
        direccion: 'Estamos ubicados en el boulevard fuerzas armadas.',
        correo: 'farmaciasdelahorro@ahorro.com',
        logo: 'ahorro-logo.png',
        banner: 'ahorro-banner.png',
        codigoCategoria: 'C-1'
    }
];

var productos = [
    {
        codigo: 'P-1',
        nombre: 'Panadol ultra 104 tabletas',
        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
        cantidad: 25,
        precio: 314.95,
        imagen: 'panadol-ultra.jpg',
        codigoEmpresa: 'E-1'
    },
    {
        codigo: 'P-2',
        nombre: 'Sudagrip antigripal',
        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
        cantidad: 100,
        precio: 14.98,
        imagen: 'sudagrip-antigripal.png',
        codigoEmpresa: 'E-1'
    },
    {
        codigo: 'P-3',
        nombre: 'Panadol ultra 104 tabletas',
        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
        cantidad: 25,
        precio: 314.95,
        imagen: 'panadol-ultra.jpg',
        codigoEmpresa: 'E-2'
    },
    {
        codigo: 'P-4',
        nombre: 'Sudagrip antigripal',
        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
        cantidad: 100,
        precio: 14.98,
        imagen: 'sudagrip-antigripal.png',
        codigoEmpresa: 'E-2'
    }
];

var ordenes = [
    {
        codigo: 'O-1',
        nombre: 'Orden 1',
        estado: 'disponible',
        cliente: {
            nombre: 'Alex',
            telefono: '9199-1111',
            correo: 'alex@unah.hn'
        },
        envio: {
            productos: [
                {
                    codigo: 'P-1',
                    nombre: 'Panadol ultra 104 tabletas',
                    precio: 314.95,
                    cantidad: 3
                },
                {
                    codigo: 'P-2',
                    nombre: 'Sudagrip antigripal',
                    precio: 14.98,
                    cantidad: 2
                }
            ],
            direccion: 'lorem ipsum.',
            empresa: 'Farmacias Kielsa',
            subtotal: 974.81,
            isv: 146.22,
            comisionMotorista: 97.48,
            comisionAdministrador: 48.74,
            total: 292.44,
            estado: null,
            coordenadas: null,
            motorista: null,

        }
    }
];

var sectionCategorias = document.getElementById('section-categorias');
var sectionEmpresas = document.getElementById('section-empresas');
var sectionProductos = document.getElementById('section-productos');
var modalBodyCliente = document.getElementById('modal-body-cliente');
var divContador = document.getElementById('contador');
var categoriaActual;
var empresaActual;
var productoActual;
var subtotal = 0;
var isv = 0;
var comisiones = 0;
var total = 0;
var carrito = [];
var contador = 0;

function generarCategorias() {
    sectionCategorias.innerHTML = '<div class="titulo-section borde-azul">Categorías</div>';
    categorias.forEach( (categoria, indice) => {
        sectionCategorias.innerHTML +=
        `<div class="col-12 col-sm-6 col-md-4">
            <div class="card flex-row color${indice % 4 + 1} div-categoria" onclick="generarEmpresas('${categoria.codigo}');">
                <img class="card-img-left example-card-img-responsive" src="img/categorias/${categoria.imagen}" />
                <h5 class="h5-categoria">${categoria.nombre}</h5>
            </div>
        </div>`;
    });
}

function generarEmpresas(codigoCategoria) {
    let filtro = empresas.filter(empresa => empresa.codigoCategoria == codigoCategoria);
    categoriaActual = categorias.filter(categoria => categoria.codigo == codigoCategoria)[0];
    sectionCategorias.style.display = 'none';
    sectionEmpresas.innerHTML = `<div class="titulo-section borde-azul">${categoriaActual.nombre}</div>`;
    filtro.forEach( (empresa, indice) => {

        estrellas = '';
        for (let i = 0; i < empresa.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';
        }
        for (let i = 0; i < 5 - empresa.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';
        }

        sectionEmpresas.innerHTML +=
        `<div class="col-12 col-sm-6">
            <div class="card borde-verde div-empresa" onclick="generarProductos('${empresa.codigo}');">
                <img class="card-img banner" src="img/empresas/${empresa.banner}" alt="banner">
                <div class="card-img-overlay">
                    <h5 class="card-title text-white h5-empresa">${empresa.nombre}</h5>
                </div>
                <div class="card flex-row content-empresa">
                    <img class="card-img-left example-card-img-responsive" src="img/empresas/${empresa.logo}" />
                    <div class="contenido-empresa">
                        <h6>Descripción:</h6>
                        <p>${empresa.descripcion}</p>
                        <div class="calificacion">
                            <h6>Calificación:</h6>
                            <div class="estrellas">
                                ${estrellas}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    sectionEmpresas.style.display = 'flex';
}

function generarProductos(codigoEmpresa) {
    let filtro = productos.filter(producto => producto.codigoEmpresa == codigoEmpresa);
    empresaActual = empresas.filter(empresa => empresa.codigo == codigoEmpresa)[0];
    sectionEmpresas.style.display = 'none';
    sectionProductos.innerHTML = `<div class="titulo-section borde-azul">${empresaActual.nombre}</div>`;
    filtro.forEach( (producto, indice) => {
        sectionProductos.innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
            <div class="card flex-row borde-verde div-producto" onclick="seleccionarProducto('${producto.codigo}');">
                <img class="card-img-left example-card-img-responsive" src="img/productos/${producto.imagen}" />
                <div class="contenido-producto">
                    <h6 class="mb-2">${producto.nombre}</h6>
                    <div class="contenidoDescripcion">
                        <p>${producto.descripcion}</p>
                    </div>
                    <h6 class="precio-producto">L. ${producto.precio}</h6>
                </div>
            </div>
        </div>`;
    });

    sectionProductos.style.display = 'flex';
}

function seleccionarProducto(codigoProducto) {
    productoActual = productos.filter(producto => producto.codigo == codigoProducto)[0];
    modalBodyCliente.innerHTML =
    `<h5 class="titulo-modal mb-5 mt-3">Cantidad de productos:</h5>
    <input id="cantidadProductos" class="borde-naranja mb-5" type="number" min="1" max="${productoActual.cantidad}" value="1">
    <div class="botones-modal mb-3">
        <button class="boton boton-blanco borde-rojo" onclick="cerrarModal();">Cerrar</button>
        <button class="boton boton-blanco borde-verde" onclick="agregarAlCarrito();">Aceptar</button>
    </div>`;
    abrirModal();
}

function abrirModal() {
    $('#modal').modal('show');
}

function cerrarModal() {
    $('#modal').modal('hide');
    modalBodyCliente.parentNode.classList.add('borde-naranja');
    modalBodyCliente.parentNode.classList.remove('borde-verde');
}

function agregarAlCarrito() {
    let spinCantidad = document.getElementById('cantidadProductos');
    carrito.push(
        {
            codigo: productoActual.codigo,
            imagen: productoActual.imagen,
            producto: productoActual.nombre,
            cantidad: spinCantidad.value,
            descripcion: productoActual.descripcion,
            precio: productoActual.precio
        }
    );
    
    contador = carrito.length;
    divContador.innerHTML = contador;

    cerrarModal();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function obtenerLocalStorage() {
    if (localStorage.getItem('carrito') != null){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        contador = carrito.length;
        divContador.innerHTML = contador;
    }
}

function abrirCarrito() {
    subtotal = 0;
    if (carrito.length == 0) {
        modalBodyCliente.innerHTML =
        `<h5 class="titulo-modal my-3">Carrito de compras</h5>
        <i class="fa-solid fa-cart-shopping carrito-modal my-4"></i>
        <h6 class="subtitulo-modal mb-2">Carrito vacío</h6>
        <p class="parrafo-modal mb-3">Agrega productos para empezar.</p>
        <button class="boton boton-blanco borde-rojo mb-3" onclick="cerrarModal();">Cerrar</button>`;
    } else {
        let productosCarrito = '';
        carrito.forEach(producto => {
            subtotal += producto.precio * producto.cantidad;
            productosCarrito +=
            `<div class="card flex-row borde-verde div-producto mb-1">
                <img class="card-img-left example-card-img-responsive" src="img/productos/${producto.imagen}" />
                <div class="contenido-producto">
                    <h6>${producto.producto}</h6>
                    <p>${producto.descripcion}</p>
                    <h6 class="precio-producto">L. ${producto.precio} x ${producto.cantidad}</h6>
                </div>
            </div>`;
        });
        isv = subtotal * 0.15;
        comisiones = subtotal * 0.15;
        total = subtotal + isv + comisiones;
        modalBodyCliente.innerHTML =
        `<h5 class="titulo-modal my-3">Carrito de compras</h5>
        ${productosCarrito}
        <div class="total mt-3">
            <div class="carrito">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="detalle-total mb-4">
                <h6 class="negro">Subtotal:</h6>
                <h6 class="gris mb-3">L. ${subtotal.toFixed(2)}</h6>
                <h6 class="negro">ISV (15%):</h6>
                <h6 class="gris mb-3">L. ${isv.toFixed(2)}</h6>
                <h6 class="negro">Comisiones (15%):</h6>
                <h6 class="gris mb-3">L. ${comisiones.toFixed(2)}</h6>
                <h6 class="negro">TOTAL:</h6>
                <h6 class="gris mb-3">L. ${total.toFixed(2)}</h6>
            </div>
        </div>
        <div class="botones-modal mb-3">
            <button class="boton boton-blanco borde-rojo" onclick="cerrarModal();">Cerrar</button>
            <button class="boton boton-verde" onclick="comprar();">Comprar</button>
        </div>`;
    }
    abrirModal();
}

function comprar() {
    cerrarModal();

    modalBodyCliente.innerHTML =
    `<h5 class="titulo-modal my-3">Finalizar compra</h5>
    <label class="form-control mt-2 border-0">Celular:</label>
    <input class="form-control borde-naranja" type="text" id="text-celular" placeholder="9999-9999" required>
    <label class="form-control mt-2 border-0">Correo:</label>
    <input class="form-control borde-naranja" type="text" id="text-correo" placeholder="9999-9999" required>
    <label class="form-control mt-2 border-0">Escribe tu dirección:</label>
    <textarea id="textDireccion" class="textarea-dirección form-control borde-naranja" rows="4" cols="50" required></textarea>
    <label class="form-control mt-2 border-0">Selecciona tu ubicación:</label>
    <img src="img/mapa 1.png" class="borde-naranja" alt="mapa">
    <label class="form-control mt-2 border-0">Información de tarjeta:</label>
    <div class="informacion-tarjeta borde-naranja row pb-3">
        <div class="col-12">
            <label>Número:</label>
            <input class="form-control borde-naranja" type="text" id="text-numero" placeholder="9999-9999-9999" required>
        </div>
        <div class="col-12">
            <label>Nombre:</label>
            <input class="form-control borde-naranja" type="text" id="text-nombre" placeholder="Nombre exacto" required>
        </div>
        <div class="col-6">
            <label>Expiración:</label>
            <input class="form-control borde-naranja" type="text" id="text-expiracion" placeholder="MM/AA" required>
        </div>
        <div class="col-6">
            <label>CVC:</label>
            <input class="form-control borde-naranja" type="text" id="text-cvc" placeholder="999" required>
        </div>
    </div>
    <div class="botones-modal my-3">
        <button class="boton boton-blanco borde-rojo" onclick="cerrarModal();">Cerrar</button>
        <button class="boton boton-verde" onclick="validarFormulario();">Finalizar</button>
    </div>`;

    setTimeout(abrirModal, 500);
}

function validarFormulario() {
    let txtcelular = document.getElementById('text-celular').value;
    let txtcorreo = document.getElementById('text-correo').value;
    let txtdireccion = document.getElementById('textDireccion').value;
    let txtnumero = document.getElementById('text-numero').value;
    let txtnombre = document.getElementById('text-nombre').value;
    let txtexpiracion = document.getElementById('text-expiracion').value;
    let txtcvc = document.getElementById('text-cvc').value;

    if (txtcelular == '' || txtcorreo == '' || txtdireccion == '' || txtnumero == '' || txtnombre == '' || txtexpiracion == '' || txtcvc == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        finalizarCompra();
    }
}

function finalizarCompra() {
    cerrarModal();

    modalBodyCliente.parentNode.classList.remove('borde-naranja');
    modalBodyCliente.parentNode.classList.add('borde-verde');

    modalBodyCliente.innerHTML =
    `<h5 class="titulo-modal my-4">¡Orden pendiente!</h5>
    <div class="check my-3">
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <h6 class="subtitulo-modal">Tu orden será tomada en breve.</h6>
    <button class="boton boton-blanco borde-verde my-4" onclick="cerrarModal();">Aceptar</button>`;

    setTimeout(abrirModal, 500);
    limpiarLocalStorage();
}

function irAtras() {
    if (sectionEmpresas.style.display == 'flex') {
        sectionEmpresas.style.display = 'none';
        sectionCategorias.style.display = 'flex';
    }
    if (sectionProductos.style.display == 'flex') {
        sectionProductos.style.display = 'none';
        sectionEmpresas.style.display = 'flex';
    }
}

function limpiarLocalStorage() {
    localStorage.clear();
    carrito.length = 0;
    contador = carrito.length
    divContador.innerHTML = contador;
}

generarCategorias();
obtenerLocalStorage();