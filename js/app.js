// Usuario y Contraseña de la app
var user = {
    email: 'luillin.escobar@example.com',
    password: 123456
};

// Inicio de Sesion
function login() {
    if (document.getElementById('email').value == user.email &&
        document.getElementById('password').value == user.password) {
        window.location = './../index.html';
        if (JSON.parse(localStorage.getItem('sesionState')) == null) {
            localStorage.setItem('sesionState', 'true');

        }

    } else {
        alert('Ingresa un usuario y contraseña valido');
    }
}
var loginState = JSON.parse(localStorage.getItem('sesionState'));
// alternar entre Iniciar o Cerrar Sesion
function loginNav() {
    document.open();
    if (loginState == true) {
        document.write('Cerrar Sesion');
    } else {
        document.write('Iniciar Sesion');
    }
    document.close();
}
// funcion que cierra la sesion
function logout() {
    if (loginState == true) {
        localStorage.removeItem('sesionState');
    }
}

// ---> Productos
var product = [{
        id: 0,
        name: 'Moka',
        description: 'Tiene un sabor que recuerda al chocolate.',
        price: 3,
        unds: 100
    },
    {
        id: 1,
        name: 'Java',
        description: 'Es una semilla que da un sabor fuerte y picante, a la vez que dulce.',
        price: 4,
        unds: 100
    },
    {
        id: 2,
        name: 'Kenya aa',
        description: 'Un sabor complejo con aroma a frutos del bosque y toques ácidos.',
        price: 2,
        unds: 100
    },
    {
        id: 3,
        name: 'Tarrazu',
        description: 'Ácido, con un recuerdo a chocolate.',
        price: 2,
        unds: 100
    },
    {
        id: 4,
        name: 'Peaberry',
        description: 'Muy exótico, caracterizado por proceder de las semillas fertilizadas',
        price: 3,
        unds: 100
    },
    {
        id: 5,
        name: 'Sierra nevada de santa marta',
        description: 'Desprende un sabor que recuerda al caramelo y al pan tostado.',
        price: 4,
        unds: 100
    },
    {
        id: 6,
        name: 'Harrar',
        description: 'Toques terrosos y ásperos, a la vez que afrutados.',
        price: 3,
        unds: 100
    },
    {
        id: 9,
        name: 'Yirgacheffe',
        description: 'Con una acidez muy refinada, distingue muy claramente tonos afrutados y silvestres.',
        price: 1,
        unds: 100
    },
    {
        id: 8,
        name: 'Kopi luwak',
        description: 'Un amargor muy tenue, dejando paso al chocolate y al caramelo.',
        price: 3,
        unds: 100
    },

    {
        id: 9,
        name: 'Mandheling y lington',
        description: 'Intenso aroma a hierbas del bosque.',
        price: 2,
        unds: 100
    },
    {
        id: 10,
        name: 'Toraja kalossi',
        description: 'Una acidez muy equilibrada.',
        price: 4,
        unds: 100
    },
    {
        id: 11,
        name: 'Blue mountain',
        description: 'Suavidad impactante con un aroma intenso pero muy agradable.',
        price: 5,
        unds: 100
    }
];

// ---> cargar los roductos en la tienda
var i;
var resB = document.getElementById('resB');

function crearProductos() {
    document.open();
    if (loginState == true) {
        if (resB === null) {
            for (i = 0; i < product.length; i++) {
                var id = product[i].id;
                document.write(
                    '<div class="card m-2" style = "width: 18rem;" >' +
                    '<img src="./img/' + product[i].name + '.jpg" class="card-img-top imagen" alt="' + product[i].name + '">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + product[i].name + '</h5>' +
                    '<p class="card-text">' + product[i].description + '</p>' +
                    '<p class="card-text">Costo: $' + product[i].price + '</p>' +
                    '<p class="card-text">Unidades disponibles: ' + product[i].unds + '</p>' +
                    '<a href="vistas/product.html" onclick="guardarProducto(' + id + ')" class="btn btn-primary">Ver +</a>' +
                    '</div>' +
                    '</div>'
                );
            }
        }
    } else {
        document.write(
            '<p>Necesita <a href="./vistas/login.html">Iniciar Sesion</a> para acceder a nuestros productos.<br>' +
            'Click <a href="./vistas/login.html">aqui</a> para Iniciar Sesion.</p>'
        );
    }
    document.close();
}

// ---> Almacenar producto en LocalStorage al hacer click en Ver +
function guardarProducto(id) {
    localStorage.setItem("producto", JSON.stringify(product[id]));
}

// ---> se lee e imprime el producto almacenado para su visulizacion independiente
function productoSeleccionado() {
    var productSelected = JSON.parse(localStorage.getItem("producto"));
    document.open();
    document.write(
        '<div class="card mb-3" style="max-width: 640px;">' +
        '<div class="row no-gutters">' +
        '<div class="col-md-4">' +
        '<img src="./../img/' + productSelected.name + '.jpg" class="card-img imagen" alt="' + productSelected.name + '">' +
        '</div>' +
        '<div class="col-md-8">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + productSelected.name + '</h5>' +
        '<p class="card-text">' + productSelected.description + '</p>' +
        '<p class="card-text"><small class="text-muted">Unidades disponibles: ' + productSelected.unds + '</small></p>' +
        '<p class="card-text"><small class="text-muted">Price: ' + productSelected.price + '</small></p>' +
        '<div class="col-12 d-flex justify-content-center align-items-center">' +
        '<a href="./../index.html" class="btn btn-primary m-1 col-md-4">atras</a>' +
        '<input type="number" class="form-control col-md-4" id="sellUnds" aria-describedby="sellUndsHelp" placeholder="' + productSelected.unds + '" required>' +
        '<a class="btn btn-primary m-1 col-md-4" onClick="addCar()">Comprar</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
    document.close;
}

// ---> Agregar producto selecionado al Carrito de Compras
function addCar() {
    var sellUnds = document.getElementById('sellUnds').value;
    var items = JSON.parse(localStorage.getItem("producto"));
    if (sellUnds == '' || sellUnds > 100) {
        alert('El producto no fue agregado a tu carrito debido a que no proporcionaste un numero valido de unidades a comprar, intentalo nuevamente.');
        window.location = './product.html';
    } else {
        var carShop = [{
            name: items.name,
            description: items.description,
            price: items.price,
            unds: sellUnds,
            subtotal: items.price * sellUnds
        }];
        if (localStorage.getItem("shoppingCar") == null) {
            localStorage.setItem("shoppingCar", JSON.stringify(carShop));
        } else {
            var carShop = {
                name: items.name,
                description: items.description,
                price: items.price,
                unds: sellUnds,
                subtotal: items.price * sellUnds
            };
            var shoppingCar = JSON.parse(localStorage.getItem("shoppingCar"));
            shoppingCar.push(carShop);
            localStorage.setItem("shoppingCar", JSON.stringify(shoppingCar));
        }
        alert('El producto se agrego con exito a su Carito de Compras');
        window.location = './shoppingcar.html';
    }
}

// mostrar productos en carrito
function productInShoppingCar() {
    var loginState = JSON.parse(localStorage.getItem('sesionState'));
    document.open();
    if (loginState == true) {
        if (JSON.parse(localStorage.getItem("shoppingCar")) == null) {
            alert('aun no tienes productos en tu carrito');
        } else {
            var item = JSON.parse(localStorage.getItem("shoppingCar"));
            for (var j = 0; j < item.length; j++) {
                document.write(
                    '<div class="card mb-3" style="max-width: 640px;">' +
                    '<div class="row no-gutters">' +
                    '<div class="col-md-4">' +
                    '<img src="./../img/' + item[j].name + '.jpg" class="card-img imagen" alt="' + item[j].name + '">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + item[j].name + '</h5>' +
                    '<p class="card-text">' + item[j].description + '</p>' +
                    '<p class="card-text"><small class="text-muted">Unidades a comprar: ' + item[j].unds + '</small></p>' +
                    '<p class="card-text"><small class="text-muted">Price: $' + item[j].price + '</small></p>' +
                    '<p class="card-text"><small class="text-muted">Subtotal: $' + item[j].subtotal + '</small></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
            }
            document.write('<div class="col-12 d-flex justify-content-center">' +
                '<a href="./../index.html" class="btn btn-primary m-1 col-md-4">¡Ir por más!</a>' +
                '<a href="paid.html" class="btn btn-success m-1 col-md-4">Pagar</a>' +
                '</div>')
        }
    } else {
        document.write('<p>Debe <a href="./login.html">iniciar sesion</a> para ver su tiene productos en su carrito de compras')
    }
    document.close;
}

// Numero de Productos en el Carrito de Compras
function productsInCar() {
    var myCar = JSON.parse(localStorage.getItem("shoppingCar"));
    document.open();
    if (loginState == true) {
        if (myCar == null) {
            document.write('<span class="badge badge-secondary">0</span>');
        } else {
            document.write('<span class="badge badge-secondary">' + myCar.length + '</span>');
        }
        document.close();
    }
}

// ---> tabla de resumen para efectuar pago
function buyProducts() {
    var myCar = JSON.parse(localStorage.getItem("shoppingCar"));
    document.open();
    document.write(
        '<div class="col-10">' +
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th scope="col">#</th>' +
        '<th scope="col">Producto</th>' +
        '<th scope="col">unidades</th>' +
        '<th scope="col">Precio unidad</th>' +
        '<th scope="col">Sub-Total</th>' +
        '</thead>' +
        '<tbody>');
    var suma = 0
    for (var y = 0; y < myCar.length; y++) {
        document.write(
            '<tr>' +
            '<th scope="row">' + (y + 1) + '</th>' +
            '<td>' + myCar[y].name + '</td>' +
            '<td>' + myCar[y].unds + '</td>' +
            '<td>$' + myCar[y].price + '</td>' +
            '<td>$' + myCar[y].subtotal + '</td>' +
            '</tr>'
        );
        suma = suma + myCar[y].subtotal;
    }
    document.write(
        '<tr>' +
        '<td colspan="4">TOTAL:</td>' +
        '<td>$' + suma + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '<div class="d-flex justify-content-center col-12">' +
        '<a class="btn btn-success m-1 col-md-4" onClick="cleanShoppingCar()">Finalizar Compra</a>' +
        '</div>'
    );
    document.close();
}

// ---> formulario de contacto
function valContact() {
    var contactNombre = document.getElementById('contactNombre').value;
    var contactEmail = document.getElementById('contactEmail').value;
    var contactTelefono = document.getElementById('contactTelefono').value;
    var contactMotivo = document.getElementById('contactMotivo').value;
    var contactComentario = document.getElementById('contactComentario').value;
    if (contactNombre == '' || contactEmail == '' || contactTelefono == '' || contactMotivo == '') {
        alert('Tiene campos obligatorios pendientes por rellenar');
    } else {
        if (contactNombre.length > 20 || contactTelefono.length > 12 || contactComentario.length > 300) {
            alert('excediste el numero de caracteres en uno de los campos. recuerda que puedes utilizar: 20 para tu nombre completo - 12 para tu numero telefonico - 300 para el comentario de informacion.')
        } else {

            alert('Gracias por contactarnos, sus opiniones son muy importante para nosotros. Responderemos lo mas pronto posible a sus inquietudes.');
        }
    }
}

// ---> para pagar y destruir ShoppingCar
function cleanShoppingCar() {
    localStorage.removeItem('shoppingCar');
    localStorage.removeItem('producto');
    alert('Gracias por su compra, disfruta tu café y vuelve pronto.')
    window.location = './../index.html';
}