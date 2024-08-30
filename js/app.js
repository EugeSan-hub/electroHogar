// // para el index


// // extraer el parametro de la url
// const  parametroId = new URLSearchParams(window.location.search).get('id')

// // buscar el id en el local storag
// const listaProductos =
//   JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
// // dibujar el objeto en la card


// const productoBuscado = listaProductos.find((elemento) => elemento.id === parametroId);
// console.log(productoBuscado);

// const card = document.querySelector('#contenedorCard');
// card.innerHTML = `<article class="container pb-3">
//                 <div class="row d-flex">
//               <div class="col-sm-12 col-md-4 col-lg-4">
//                 <div class="card mb-3">
//                   <img
//                     src= ${productoBuscado.imagen}
//                      class="card-img-top img-fluid"
//                     alt="${productoBuscado.nombre}"
//                   />
//                   <div class="card-body shadow">
//                     <h5 class="card-title">${productoBuscado.nombre}</h5>
//                     <p class="card-text">
//                     ${productoBuscado.descripcion}
//                     </p>
//                     <p>
//                     $${productoBuscado.precio}
//                     </p>
//                     <button class="btn btn-outline-info text-center">Ver Detalle</button>
//                   </div>
//                 </div>
//               </div>`

// SE HIZO DIBUJAR CADA OBJETO IGRESADO PERO HABRIA QUE CAMBIAR EL ROW Y PONERLO EN LA SECCION HTML PARA QUE NO SE DIBUJE DEBAJO
// Obtener la lista de productos desde localStorage
const listaProductos = JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

// Seleccionar el contenedor donde se dibujarán las tarjetas
const contenedorCards = document.querySelector('#contenedorCard');

// Iterar sobre todos los productos y crear una tarjeta para cada uno
listaProductos.forEach(producto => {
  contenedorCards.innerHTML += `
          
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
          <div class="card h-100 mb-3">
            <img
              src="${producto.imagen}"
              class="card-img-top img-fluid"
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