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
        empresas: [
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
                productos: [
                    {
                        codigo: 'P-1',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-2',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
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
                productos: [
                    {
                        codigo: 'P-3',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-4',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            }
        ]
    },
    {
        codigo: 'C-2',
        nombre: 'Farmacias',
        imagen: 'farmacia.png',
        descripcion: 'Lorem ipsum.',
        empresas: [
            {
                codigo: 'E-3',
                nombre: 'Farmacias Kielsa',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-0011',
                calificacion: 5,
                direccion: 'Estamos ubicados en el boulevard Morazán.',
                correo: 'kielsahonduras@kielsa.com',
                logo: 'kielsa-logo.png',
                banner: 'kielsa-banner.png',
                productos: [
                    {
                        codigo: 'P-5',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-6',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            },
            {
                codigo: 'E-4',
                nombre: 'Farmacias del ahorro',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-2020',
                calificacion: 4,
                direccion: 'Estamos ubicados en el boulevard fuerzas armadas.',
                correo: 'farmaciasdelahorro@ahorro.com',
                logo: 'ahorro-logo.png',
                banner: 'ahorro-banner.png',
                productos: [
                    {
                        codigo: 'P-7',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-8',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            }
        ]
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

localStorage.setItem('usuarios', JSON.stringify(usuarios));
localStorage.setItem('categorias', JSON.stringify(categorias));
localStorage.setItem('ordenes', JSON.stringify(ordenes));

function obtenerLocalStorage() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

sectionLogin = document.getElementById('section-login');
sectionRegistration = document.getElementById('section-registration');
modalBodySesion = document.getElementById('modal-body-sesion');

function validarFormulario1() {
    let txtusuario = document.getElementById('txtusuario-login').value;
    let txtpassword = document.getElementById('txtpassword-login').value;
    let filtro = [];
    if (txtusuario == '' || txtpassword == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        filtro = usuarios.filter(usuario => usuario.usuario == txtusuario && usuario.password == txtpassword && usuario.tipo == 'C');
        if (filtro.length == 0) {
            modalBodySesion.innerHTML =
            `<h5 class="titulo-modal my-4">¡Usuario no registrado!</h5>
            <div class="error my-3">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <button class="boton boton-blanco borde-rojo my-4" onclick="cerrarModal();">Aceptar</button>`;
            abrirModal();
        } else {
            window.open('usuarios.html', '_self');
        }
    }
}

function abrirRegistro() {
    sectionLogin.style.display = 'none';
    sectionRegistration.style.display = 'block';
}

function abrirLogin() {
    sectionLogin.style.display = 'block';
    sectionRegistration.style.display = 'none';
}

function validarFormulario2() {
    let txtnombre = document.getElementById('txtnombre-registration').value;
    let txtusuario = document.getElementById('txtusuario-registration').value;
    let txtpassword = document.getElementById('txtpassword-registration').value;

    let filtro = [];
    if (txtnombre == '' || txtusuario == '' || txtpassword == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        filtro = usuarios.filter(usuario => usuario.usuario == txtusuario && usuario.tipo == 'C');
        if (filtro.length != 0) {
            modalBodySesion.innerHTML =
            `<h5 class="titulo-modal my-4">¡Este usuario ya existe!</h5>
            <div class="error my-3">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <button class="boton boton-blanco borde-rojo my-4" onclick="cerrarModal();">Aceptar</button>`;
        } else {
            usuarios.push({
                codigo: 'U-' + (usuarios.length + 1),
                nombre: txtnombre,
                usuario: txtusuario,
                password: txtpassword,
                tipo: 'C'
            });
            modalBodySesion.parentNode.classList.add('borde-verde');
            modalBodySesion.parentNode.classList.remove('borde-rojo');
            modalBodySesion.innerHTML =
            `<h5 class="titulo-modal my-4">¡Usuario registrado!</h5>
            <div class="check my-3">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <button class="boton boton-blanco borde-verde my-4" onclick="cerrarModal();">Aceptar</button>`;

            localStorage.setItem('usuarios', JSON.stringify(usuarios));

        }
        abrirModal();
    }
}

function abrirModal() {
    $('#modal').modal('show');
}

function cerrarModal() {
    $('#modal').modal('hide');
    modalBodySesion.parentNode.classList.remove('borde-verde');
    modalBodySesion.parentNode.classList.add('borde-rojo');
}

function guardarLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

guardarLocalStorage();
obtenerLocalStorage();