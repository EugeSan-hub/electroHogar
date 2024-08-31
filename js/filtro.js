const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

// Extraer el parámetro de la URL
const parametroCategoria = new URLSearchParams(window.location.search).get(
    "categoria"
  );
  
// Referencia al contenedor donde se mostrarán los productos
const seccionPadre = document.getElementById("contenedorCard");

const productosCategorias = listaProductos.filter(
    (producto) => producto.categoria === parametroCategoria
  );

const cargaInicial = () => {
  productosCategorias.map((producto) => {
    // Dibujar el producto en el contenedor
    seccionPadre.innerHTML += `
          <article class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3">
            <a href="./categoriaCocinas.html">
              <img src="${producto.imagen}" alt="${producto.marca}" class="img-fluid rounded-2"/>
            </a>
            <p class="text-center mt-3 py-2">
              <span>${producto.nombre}<br />${producto.descripcion}</span>
            </p>
            <p class="fw-bold text-center">${producto.precio}</p>
          </article>`;
  });
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
      // Dibujar el producto en el contenedor
      seccionPadre.innerHTML += `
          <article class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3">
            <a href="./categoriaCocinas.html">
              <img src="${producto.imagen}" alt="${producto.marca}" class="img-fluid rounded-2"/>
            </a>
            <p class="text-center mt-3 py-2">
              <span>${producto.nombre}<br />${producto.descripcion}</span>
            </p>
            <p class="fw-bold text-center">${producto.precio}</p>
          </article>`;
    });
  } else {
    cargaInicial();
  }
};

// Agregar eventos a los checkboxes
document.querySelectorAll(".form-check-input").forEach((checkbox) => {
  checkbox.addEventListener("change", actualizarVistaProductos);
});

console.log(listaProductos);
console.log("Productos en LocalStorage:", listaProductos);