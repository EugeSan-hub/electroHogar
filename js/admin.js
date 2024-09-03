import Producto from "./classProducto.js";
import { validarCaracteres, validarNumber } from "./validaciones.js";

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

const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

const MostrarModal = () => {
  modalProducto.show();
};


const crearProducto = () => {
  estoyCreando = true;

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
    listaProductos.push(nuevoProducto);
    limpiarFormulario();

    guardarEnLocalStorage();

    dibujarFila(nuevoProducto);
  } else {
    return false;
  }

};

let indiceProductoEditar = null; 

window.prepararEditarProducto = (id) => {
  estoyCreando = false;
  MostrarModal();
  indiceProductoEditar = listaProductos.findIndex(
    (producto) => producto.id === id
  );
  const productoAEditar = listaProductos[indiceProductoEditar];
  if (productoAEditar) {
    nombre.value = productoAEditar.nombre;
    descripcion.value = productoAEditar.descripcion;
    marca.value = productoAEditar.marca;
    cantidad.value = productoAEditar.cantidad;
    precio.value = productoAEditar.precio;
    imagen.value = productoAEditar.imagen;
    categoria.value = productoAEditar.categoria;
  }
};

const modificarProducto = () => {
  if (indiceProductoEditar !== null) {
    listaProductos[indiceProductoEditar].nombre = nombre.value;
    listaProductos[indiceProductoEditar].descripcion = descripcion.value;
    listaProductos[indiceProductoEditar].marca = marca.value;
    listaProductos[indiceProductoEditar].cantidad = cantidad.value;
    listaProductos[indiceProductoEditar].precio = precio.value;
    listaProductos[indiceProductoEditar].imagen = imagen.value;
    listaProductos[indiceProductoEditar].categoria = categoria.value;

    guardarEnLocalStorage();
    limpiarFormulario();
    tabla.innerHTML = ``;
    cargaInicial(); 
  }
};

const administrarProducto = (e) => {
  e.preventDefault();
  if (estoyCreando) {
    crearProducto();
  } else {
    modificarProducto();
  }
};

const limpiarFormulario = () => {
  crear.reset();
  const inputs = document.querySelectorAll(".form-control");
  inputs.forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");
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
                  <button class="btn btn-primary" onclick="verDetalle('${productos.categoria}')">Ver</button>
                  <button class="btn btn-warning" onclick="prepararEditarProducto('${productos.id}')">Editar</button>
                  <button class="btn btn-danger"  onclick="borrarProducto('${productos.id}')">Borrar</button>
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

      tabla.removeChild(tabla.children[posicionProductoBuscado]);

      Swal.fire({
        title: "Producto eliminado!",
        text: "El producto fue eliminado exitosamente.",
        icon: "success",
      });
    }
  });
};


btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", administrarProducto);

cargaInicial();


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
