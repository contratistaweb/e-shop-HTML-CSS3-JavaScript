// **  Buscador **
var loginState = JSON.parse(localStorage.getItem('sesionState'));
const busqueda = document.getElementById('busqueda');
const boton = document.getElementById('botonBuscar');
const resultado = document.getElementById('resultado');

const filtrar = () => {

    resultado.innerHTML = '';
    if (busqueda.value === '' || loginState == null) {} else {
        const buscar = busqueda.value.toLowerCase();
        resultado.innerHTML +=
            `<div class="col-md-12">` +
            `<h3 class="col-md-12 my-3 text-center">Resultado de la busqueda</h3>`

        for (let prod of product) {
            let nombre = prod.name.toLowerCase();
            if (nombre.indexOf(buscar) !== -1) {
                resultado.innerHTML +=
                    `<div class="card m-2" style = "width: 18rem;" id="resB">` +
                    `<img src="./img/${prod.name}.jpg" class="card-img-top imagen" alt="${prod.name}">` +
                    `<div class="card-body">` +
                    `<h5 class="card-title">${prod.name}</h5>` +
                    `<p class="card-text">${prod.description}</p>` +
                    `<p class="card-text">Costo:$ ${prod.price}</p>` +
                    `<p class="card-text">Unidades disponibles: ${prod.unds}</p>` +
                    `<a href="vistas/product.html" onclick="guardarProducto('${prod.id}')" class="btn btn-primary">Ver +</a>` +
                    `</div>` +
                    `</div>` +
                    `</div>`;
            }

        }
        if (document.getElementById('resB') === null) {

            resultado.innerHTML =
                `<h3 class="col-md-12 my-3 text-center">Resultado de la busqueda</h3>` +
                `<span class="text-center col-md-12">Producto no encontrado</span>` +
                `</div>`;
        }
    }
}

//boton.addEventListener("click", filtrar);
busqueda.addEventListener("keyup", filtrar);