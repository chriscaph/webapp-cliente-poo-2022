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
var emp;

var nombreCliente = obtenerParametro('nom');
var idSession = obtenerParametro('ses');

if (idSession.length == 0) {
    idSession = '1';
}

var categorias = [];
var empresas = [];
var productos = [];

function generarCategorias() {

    axios({
        method: 'GET',
        url: 'http://localhost:4200/categorias'
    })
        .then(res => {
            categorias = res.data;
            sectionCategorias.innerHTML = '<div class="titulo-section borde-azul">Categorías</div>';
            categorias.forEach((categoria, indice) => {
                sectionCategorias.innerHTML +=
                    `<div class="col-12 col-sm-6 col-md-4">
                    <div class="card flex-row color${indice % 4 + 1} div-categoria" onclick="generarEmpresas('${categoria._id}');">
                        <img class="card-img-left example-card-img-responsive" src="${categoria.imagen}" />
                        <h5 class="h5-categoria">${categoria.nombre}</h5>
                    </div>
                </div>`;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function generarEmpresas(codigoCategoria) {

    axios({
        method: 'GET',
        url: 'http://localhost:4200/empresas'
    })
        .then(res => {
            empresas = res.data;
            let filtro = empresas.filter(empresa => empresa.codigoCategoria == codigoCategoria);
            categoriaActual = categorias.filter(categoria => categoria._id == codigoCategoria)[0];
            sectionCategorias.style.display = 'none';
            sectionEmpresas.innerHTML = `<div class="titulo-section borde-azul">${categoriaActual.nombre}</div>`;
            filtro.forEach((empresa, indice) => {

                estrellas = '';
                for (let i = 0; i < empresa.calificacion; i++) {
                    estrellas += '<i class="fa-solid fa-star"></i>';
                }
                for (let i = 0; i < 5 - empresa.calificacion; i++) {
                    estrellas += '<i class="fa-regular fa-star"></i>';
                }

                sectionEmpresas.innerHTML +=
                    `<div class="col-12 col-sm-6">
            <div class="card borde-verde div-empresa" onclick="generarProductos('${empresa._id}');">
                <div class="card-img banner" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empresa.banner}); background-repeat: no-repeat; background-size: 100% 100%">
                </div>
                <div class="card-img-overlay">
                    <h5 class="card-title text-white h5-empresa">${empresa.nombre}</h5>
                </div>
                <div class="card flex-row content-empresa">
                    <img class="card-img-left example-card-img-responsive" src="${empresa.logo}" />
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
        })
        .catch(error => {
            console.log(error);
        });
}

function generarProductos(codigoEmpresa) {

    emp = empresas.filter(empresa => empresa._id == codigoEmpresa)[0].nombre;

    axios({
        method: 'GET',
        url: 'http://localhost:4200/productos'
    })
        .then(res => {
            productos = res.data;
            let filtro = productos.filter(producto => producto.codigoEmpresa == codigoEmpresa);
            empresaActual = empresas.filter(empresa => empresa._id == codigoEmpresa)[0];
            sectionEmpresas.style.display = 'none';
            sectionProductos.innerHTML = `<div class="titulo-section borde-azul">${empresaActual.nombre}</div>`;
            filtro.forEach((producto, indice) => {
                sectionProductos.innerHTML +=
                    `<div class="col-12 col-md-6 col-lg-4">
            <div class="card flex-row borde-verde div-producto" onclick="seleccionarProducto('${producto._id}');">
                <img class="card-img-left example-card-img-responsive" src="${producto.imagen}" />
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
        })
        .catch(error => {
            console.log(error);
        });
}

function seleccionarProducto(codigoProducto) {
    productoActual = productos.filter(producto => producto._id == codigoProducto)[0];
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
    axios({
        method: 'get',
        url: `http://localhost:4200/sesiones/${idSession}`,
    })
        .then(res => {
            console.log(res.data);
            if (res.data.codigo == 0) {
                alert('No estás registrado, regístrate para poder comprar.');
            } else {
                carrito.push(
                    {
                        codigo: productoActual._id,
                        imagen: productoActual.imagen,
                        nombre: productoActual.nombre,
                        cantidad: Number(spinCantidad.value),
                        descripcion: productoActual.descripcion,
                        precio: Number(productoActual.precio),
                        empresa: emp
                    }
                );
            
                contador = carrito.length;
                divContador.innerHTML = contador;
            
                cerrarModal();
                localStorage.setItem('carrito', JSON.stringify(carrito));
            }
        })
        .catch(error => console.log('error de la verificación', error));
}

function obtenerLocalStorage() {
    if (localStorage.getItem('carrito') != null) {
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
                <img class="card-img-left example-card-img-responsive" src="${producto.imagen}" />
                <div class="contenido-producto">
                    <h6>${producto.nombre}</h6>
                    <div class="contenidoDescripcion">
                        <p>${producto.descripcion}</p>
                    </div>
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
            <button class="boton boton-verde" onclick="comprar(); cargarMapa();">Comprar</button>
        </div>`;
    }
    abrirModal();
}

function comprar() {
    modalBodyCliente.innerHTML =
        `<h5 class="titulo-modal my-3">Finalizar compra</h5>
        <label class="form-control mt-2 border-0">Celular:</label>
        <input class="form-control borde-naranja" type="text" id="text-celular" placeholder="xxxx-xxxx" required>
        <label class="form-control mt-2 border-0">Correo:</label>
        <input class="form-control borde-naranja" type="text" id="text-correo" placeholder="xxxx@xxxx.com" required>
        <label class="form-control mt-2 border-0">Escribe tu dirección:</label>
        <textarea id="textDireccion" class="textarea-dirección form-control borde-naranja" rows="4" cols="50" required></textarea>
        <label class="form-control mt-2 border-0">Selecciona tu ubicación:</label>
        <div id="mapa" style="width: 100%; height: 200px;"></div>
        <input type="hidden" id="longitud" value="-87.17472108959961">
        <input type="hidden" id="latitud" value= "14.07425613883513">
        <label class="form-control mt-2 border-0">Información de tarjeta:</label>
        <div class="informacion-tarjeta borde-naranja row pb-3">
            <div class="col-12">
                <label>Número:</label>
                <input class="form-control borde-naranja" type="text" id="text-numero" placeholder="xxxx-xxxx-xxxx-xxxx" required>
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
                <input class="form-control borde-naranja" type="text" id="text-cvc" placeholder="xxx" required>
            </div>
        </div>
        <div class="botones-modal my-3">
            <button class="boton boton-blanco borde-rojo" onclick="cerrarModal();">Cerrar</button>
            <button class="boton boton-verde" onclick="validarFormulario();">Finalizar</button>
        </div>`;
}

function validarFormulario() {
    let txtcelular = document.getElementById('text-celular').value;
    let txtcorreo = document.getElementById('text-correo').value;
    let txtdireccion = document.getElementById('textDireccion').value;
    let txtnumero = document.getElementById('text-numero').value;
    let txtnombre = document.getElementById('text-nombre').value;
    let txtexpiracion = document.getElementById('text-expiracion').value;
    let txtcvc = document.getElementById('text-cvc').value;
    let longitud = document.getElementById('longitud').value;
    let latitud = document.getElementById('latitud').value;

    if (txtcelular == '' || txtcorreo == '' || txtdireccion == '' || txtnumero == '' || txtnombre == '' || txtexpiracion == '' || txtcvc == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        if (longitud == '' || latitud == '') {
            alert('seleccione su ubicación en el mapa.');
        } else {
            let o = {
                nombre: carrito[0].empresa,
                estado: 'disponible',
                cliente: {
                    nombre: nombreCliente,
                    correo: txtcorreo,
                    celular: txtcelular
                },
                envio: {
                    productos: carrito,
                    direccion: txtdireccion,
                    empresa: carrito[0].empresa,
                    subtotal: subtotal,
                    total: total,
                    coordenadas: {
                        longitud: longitud,
                        latitud: latitud
                    },
                    estado: null,
                    isv: isv,
                    comisionMotorista: subtotal * 0.1,
                    comisionAdministrador: subtotal * 0.05
                },
                motorista: null
            }

            finalizarCompra(o);
        }
    }
}

function finalizarCompra(o) {

    axios({
        method: 'POST',
        url: 'http://localhost:4200/ordenes',
        data: o
    })
        .then(res => {
            cerrarModal();

            modalBodyCliente.parentNode.classList.remove('borde-naranja');
            modalBodyCliente.parentNode.classList.add('borde-verde');

            modalBodyCliente.innerHTML =
                `<h5 class="titulo-modal my-4">¡Orden pendiente!</h5>
                <div class="check my-3">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h6 class="subtitulo-modal">${res.data}</h6>
                <button class="boton boton-blanco borde-verde my-4" onclick="cerrarModal();">Aceptar</button>`;

            setTimeout(abrirModal, 500);
            limpiarLocalStorage();
        })
        .catch(error => {
            console.log(error);
        });
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

function obtenerParametro(valor){
    valor = valor.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let expresionRegular = "[\\?&]" + valor + "=([^&#]*)";
    let regex = new RegExp(expresionRegular);
    let r = regex.exec( window.location.href );
    if( r == null )
        return "";
    else
        return decodeURIComponent(r[1].replace(/\ + /g, " "));
}

generarCategorias();
obtenerLocalStorage();