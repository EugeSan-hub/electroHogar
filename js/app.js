// SE HIZO DIBUJAR CADA OBJETO IGRESADO PERO HABRIA QUE CAMBIAR EL ROW Y PONERLO EN LA SECCION HTML PARA QUE NO SE DIBUJE DEBAJO
// Obtener la lista de productos desde localStorage
const listaProductos = JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

// Seleccionar el contenedor donde se dibujarán las tarjetas
const contenedorCards = document.querySelector('#contenedorCard');

// Iterar sobre todos los productos y crear una tarjeta para cada uno
listaProductos.forEach(producto => {
  contenedorCards.innerHTML += `
          
        <div class="col-sm-12 col-md-6 col-lg-3 ">
          <div class="card mt-4">
            <img
              src="${producto.imagen}"
              class="card-img-top "
              alt="${producto.nombre}"
            />
            <div class="card-body shadow">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">
                ${producto.descripcion}
              </p>
              <p>
                $${producto.precio}
              </p>
              <button class="btn btn-outline-info text-center">Ver Detalle</button>
            </div>
            </div>
      </div>
   
  `;
});