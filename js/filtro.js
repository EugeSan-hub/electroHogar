const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

const parametroCategoria = new URLSearchParams(window.location.search).get(
  "categoria"
);

const seccionPadre = document.getElementById("contenedorCard");
const seccionIndex = document.getElementById("contenedorIndex");

const productosCategorias = listaProductos.filter(
  (producto) => producto.categoria === parametroCategoria
);

const cargaInicial = () => {
  if (seccionIndex) {
    productosCategorias.map((producto) => {
      seccionIndex.innerHTML += `
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
  } else {
    productosCategorias.map((producto) => {
      seccionPadre.innerHTML += `
            <article class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3">
              <a href="./categoriaCocinas.html">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded-2"/>
              </a>
              <p class="text-center mt-3 py-2">
                <span>${producto.marca}<br />${producto.descripcion}</span>
              </p>
              <p class="fw-bold text-center">${producto.precio}</p>
            </article>`;
    });
  }
};

cargaInicial();

const checkboxes = document.querySelectorAll(".form-check-input");

const actualizarVistaProductos = () => {
  console.log(checkboxes);
  const marcasSeleccionadas = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  console.log(marcasSeleccionadas);
  console.log(checkboxes);

  const productosFiltrados = productosCategorias.filter((productos) => {
    return (
      marcasSeleccionadas.length === 0 ||
      marcasSeleccionadas.includes(productos.marca)
    );
  });
  seccionPadre.innerHTML = "";
  console.log(productosFiltrados);

  if (productosFiltrados.length > 0) {
    productosFiltrados.map((producto) => {
      seccionPadre.innerHTML += `
          <article class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3">
            <a href="./categoriaCocinas.html">
              <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded-2"/>
            </a>
            <p class="text-center mt-3 py-2">
              <span>${producto.marca}<br />${producto.descripcion}</span>
            </p>
            <p class="fw-bold text-center">${producto.precio}</p>
          </article>`;
    });
  } else {
    cargaInicial();
  }
};

document.querySelectorAll(".form-check-input").forEach((checkbox) => {
  checkbox.addEventListener("change", actualizarVistaProductos);
});

console.log(listaProductos);
console.log("Productos en LocalStorage:", listaProductos);
