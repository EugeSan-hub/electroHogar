window.verPagDetalle = (id) => {
  window.location.href = "/pages/detallesProductos.html?id=" + id;
};
const parametroId = new URLSearchParams(window.location.search).get("id");
const contenedorDetalle = document.querySelector("#detalleProducto");
console.log(parametroId);
if (parametroId) {
  const productoEncontrado = listaProductos.find(
    (producto) => producto.id === parametroId
  );
  console.log(productoEncontrado);
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
