

// SE HIZO DIBUJAR CADA OBJETO IGRESADO PERO HABRIA QUE CAMBIAR EL ROW Y PONERLO EN LA SECCION HTML PARA QUE NO SE DIBUJE DEBAJO
// Obtener la lista de productos desde localStorage
const listaProductos = JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

// Seleccionar el contenedor donde se dibujarán las tarjetas
const contenedorCards = document.querySelector("#contenedorCard");
window.verDetalle = (id) => {
  window.location.href = "/electroHogar/index.html?id=" + id;
};
if (contenedorCards) {
  // Iterar sobre todos los productos y crear una tarjeta para cada uno
  listaProductos.forEach((producto) => {
    contenedorCards.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-3 ">
        <div class="card mt-4">
          <img src="${producto.imagen}" class="card-img-top " alt="${producto.nombre}" />
          <div class="card-body shadow">
            <h5 class="card-title">${producto.nombre}</h5>
            <h5 class="card-text">${producto.descripcion}</h5>
            <h6>$${producto.precio}</h6>
            <button class="btn btn-outline-info text-center" onclick="verPagDetalle('${producto.id}')">Ver Detalle</button>
          </div>
        </div>
      </div>`;
  });
}

window.verPagDetalle = (id) => {
  window.location.href = "/pages/detallesProductos.html?id=" + id;
};
const parametroId = new URLSearchParams(window.location.search).get('id')
const contenedorDetalle = document.querySelector("#detalleProducto");
console.log (parametroId)
if (parametroId) {
    const productoEncontrado = listaProductos.find ((producto)=>
    producto.id === parametroId)
    console.log(productoEncontrado)
    contenedorDetalle.innerHTML = `
        <div class="row">
          <div class="col-sm-12 col-md-6 col-xl-8">
            <img src="${productoEncontrado.imagen}" alt="${productoEncontrado.nombre}" class="img-fluid" />
          </div>
          <div class="col-sm-12 col-md-6 col-xl-4 rounded-2">
            <h2 class="text-light">${productoEncontrado.nombre}</h2>
            <h6 class="text-light mb-3 fw-lighter fs-5">
              Venta de electrodomésticos verificada
              <i class="bi bi-patch-check-fill text-primary"></i>
            </h6>
            <h3 class="text-light">$${productoEncontrado.precio}</h3><h5 class="text-light mt-3">${productoEncontrado.descripcion}</h5>
        
            <p class ="text-ligth">12 cuotas sin interés de $65.833,25</p>

           <div>
             <a href="../pages/Error404.html" class=" mt-1 btn btn-primary btn-lg fw-light">Comprar</a>
           </div>
         </div>
        </div>`;
 }
