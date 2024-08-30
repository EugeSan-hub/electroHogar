// para el index


// extraer el parametro de la url
const  parametroId = new URLSearchParams(window.location.search).get('id')

// buscar el id en el local storag
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
// dibujar el objeto en la card


const productoBuscado = listaProductos.find((elemento) => elemento.id === parametroId);
console.log(productoBuscado);

const card = document.querySelector('#contenedorCard');
card.innerHTML = `<article class="container pb-3">
                <div class="row d-flex">
              <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="card mb-3">
                  <img
                    src= ${productoBuscado.imagen}
                     class="card-img-top img-fluid"
                    alt="${productoBuscado.nombre}"
                  />
                  <div class="card-body shadow">
                    <h5 class="card-title">${productoBuscado.nombre}</h5>
                    <p class="card-text">
                    ${productoBuscado.descripcion}
                    </p>
                    <p>
                    $${productoBuscado.precio}
                    </p>
                    <button class="btn btn-outline-info text-center">Ver Detalle</button>
                  </div>
                </div>
              </div>`