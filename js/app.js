// para el index


// extraer el parametro de la url
const  parametroId = new URLSearchParams(window.location.search).get('id')

// buscar el id en el local storag
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
// dibujar el objeto en la card


const productoBuscado = listaProductos.find((elemento) => elemento.id === parametroId);
console.log(productoBuscado);

