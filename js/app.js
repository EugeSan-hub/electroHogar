// Extraer el parámetro de la URL
const parametroCategoria = new URLSearchParams(window.location.search).get('categoria');
console.log("Parámetro categoria:", parametroCategoria);

// Obtener la lista de productos del LocalStorage
const listaProductos = JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
console.log(listaProductos);
console.log("Productos en LocalStorage:", listaProductos);

// Buscar el producto que coincide con la categoría en la URL
const productosFiltrados = listaProductos.filter((producto) => producto.categoria === parametroCategoria);
console.log("Productos Filtrados:", productosFiltrados);

// Referencia al contenedor donde se mostrarán los productos
const seccionPadre = document.getElementById('#contenedorCard');

// Verificar si se encontraron productos
  productosFiltrados.find((productoBuscado) => {
    // Dibujar el producto en el contenedor
    seccionPadre.innerHTML += `
      <article class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3">
        <a href="./categoriaCocinas.html">
          <img src="${productoBuscado.imagen}" alt="${productoBuscado.nombre}" class="img-fluid rounded-2"/>
        </a>
        <p class="text-center mt-3 py-2">
          <span>${productoBuscado.marca}<br />${productoBuscado.descripcion}</span>
        </p>
        <p class="fw-bold text-center">${productoBuscado.precio}</p>
      </article>`;
  });
