// para el index


// extraer el parametro de la url
const  parametroId = new URLSearchParams(window.location.search).get('id')

// buscar el id en el local storag
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
// dibujar el objeto en la card


const productoBuscado = listaProductos.find((producto) => producto.id === parametroId)

const card1 = document.getElementById("#contenedorCard")
card1.innerHTML = `<article
                class="col-10 col-md-5 col-lg-3 mx-2 my-3 border border-2 rounded-3 p-3"
                id="contenedorCard">
                <a href="./categoriaCocinas.html"
                  ><img
                    src="../img/imgJu/cocinas/Orbis/Orbis1.png"
                    alt="Cocina Orbis color Acero"
                    class="img-fluid rounded-2"
                /></a>
                <p class="text-center mt-3 py-2">
                  <span
                    >Cocina Orbis 96eac4 Combinada Color Acero<br />
                    Horno eléctrico Hornalla Gas</span
                  >
                </p>
                <p class="fw-bold text-center">${productoBuscado.precio}</p>
              </article>'`