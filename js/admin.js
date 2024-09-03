import Producto from "./classProducto.js";
import { validarCaracteres, validarNumber } from "./validaciones.js";
//logica del CRUD
//necesito crear una clase, archivo por cada clase
//aqui implemento en new, crea el objeto
const modalProducto = new bootstrap.Modal(document.getElementById("modalAdmi"));
const btnNuevo = document.getElementById("btnNuevo");
const crear = document.getElementById("Form");
const tabla = document.querySelector("tbody");

const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const marca = document.getElementById("marca");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");

let estoyCreando = true;
//crea el array
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

//funciones como abrir el modal desde js y no desde el data-bs-toggle
const MostrarModal = () => {
  modalProducto.show();
};
//para validar

//Debo validar

const crearProducto = () => {
  estoyCreando = true;
  
  //validar form
  if (
    validarCaracteres(nombre, 3, 30) &&
    validarCaracteres(descripcion, 3, 30) &&
    validarCaracteres(marca, 3, 30) &&
    validarCaracteres(categoria, 3, 30) &&
    validarNumber(cantidad, 1, 30) &&
    validarNumber(precio, 1, Infinity)
  ) {
    const nuevoProducto = new Producto(
      nombre.value,
      descripcion.value,
      marca.value,
      cantidad.value,
      precio.value,
      imagen.value,
      categoria.value
    );
    //push del array al nuevo contacto
    listaProductos.push(nuevoProducto);
    console.log(listaProductos);
    limpiarFormulario();
    //Guardar en el LocalStorage
    guardarEnLocalStorage();
    //Mostrar una fila agregada
    dibujarFila(nuevoProducto);
  } else {
    return false;
  }
  //julian hay q validar el form con un archivo js
  //guardar objeto en array y guardar el array en el localstorage
  //acceder al value y pasarlo al contacto usando los inputs
};

window.prepararEditarProducto = (id)=>{
  estoyCreando = false;
  MostrarModal();
  const encontrarProductos = listaProductos.find((producto) => producto.id === id)
  if(encontrarProductos){
    nombre.value = encontrarProductos.nombre;
    descripcion.value = encontrarProductos.descripcion;
    marca.value = encontrarProductos.marca;
    cantidad.value = encontrarProductos.cantidad;
    precio.value = encontrarProductos.precio;
    imagen.value = encontrarProductos.imagen;
    categoria.value = encontrarProductos.categoria;
  }
}

const modificarProducto = ()=>{
  listaProductos[0].nombre = nombre.value;
  listaProductos[0].descripcion = descripcion.value;
  listaProductos[0].marca = marca.value;
  listaProductos[0].cantidad = cantidad.value;
  listaProductos[0].precio = precio.value;
  listaProductos[0].imagen = imagen.value;
  listaProductos[0].categoria = categoria.value;

  guardarEnLocalStorage();
  limpiarFormulario();
  tabla.innerHTML = ``;
  cargaInicial();
}

const administrarProducto = (e)=>{
  e.preventDefault();
  if(estoyCreando){
    crearProducto();
  }else{
    modificarProducto();
  }
}

const limpiarFormulario = () => {
  crear.reset();
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.classList.remove('is-valid', 'is-invalid');
  });
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("ListaProductosKey", JSON.stringify(listaProductos));
};

function cargaInicial() {
  if (listaProductos.length !== 0) {
    listaProductos.map((productos) => dibujarFila(productos));
  }
}

const dibujarFila = (productos) => {
  tabla.innerHTML += `
              <tr>
                <th>${productos.id}</th>
                <td>${productos.nombre}</td>
                <td>${productos.descripcion}</td>
                <td>${productos.marca}</td>
                <td>${productos.cantidad}</td>
                <td>${productos.precio}</td>
                <td>${productos.categoria}</td>
                <td>
                
                  <button class="btn btn-primary" onclick="verDetalle('${productos.categoria}')">ver</button>
                  <button class="btn btn-warning" onclick="prepararEditarProducto('${productos.id}')">editar</button>
                  <button class="btn btn-danger"  onclick="borrarProducto('${productos.id}')">borrar</button>
                </td>
              </tr>`;
};

window.borrarProducto = (id) => {
  console.log(id);
  Swal.fire({
    title: "¿Estas seguro de eliminar este producto?",
    text: "Este proceso no puede revertirse",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#000080",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionProductoBuscado = listaProductos.findIndex(
        (productos) => productos.id === id
      );
      console.log(posicionProductoBuscado);
      listaProductos.splice(posicionProductoBuscado, 1);
      guardarEnLocalStorage();
      
      tabla.removeChild(tabla.children[posicionProductoBuscado])
   
      Swal.fire({
        title: "Producto eliminado!",
        text: "El producto fue eliminado exitosamente.",
        icon: "success",
      });
    }
  });
};

//logica crud
btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", administrarProducto);

cargaInicial();

// funcion ver para redireccionar pagina cocina

window.verDetalle = (categoria) => {
  let url = "";

  switch (categoria.toLowerCase()) {
    case "heladeras":
      url = "/pages/categoriaHeladeras.html?categoria=" + categoria;
      break;
    case "cocinas":
      url = "/pages/categoriaCocinas.html?categoria=" + categoria;
      break;
    case "tv":
      url = "/pages/categoriaTv.html?categoria=" + categoria;
      break;
    case "lavarropas":
      url = "/pages/categoriaLavarropas.html?categoria=" + categoria;
      break;
    case "index":
      url = "/index.html?categoria=" + categoria;
      break;

    default:
      console.error("Categoría no válida");
      return;
  }
  window.location.href = url;
};
