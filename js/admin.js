import Producto from "./classProducto.js";

const modalProducto = new bootstrap.Modal(document.getElementById("modalAdmi"));
const btnNuevo = document.getElementById("btnNuevo");
const crear = document.getElementById("Form");

const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const marca = document.getElementById("marca");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");

const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];
const tabla = document.querySelector("tbody");

const MostrarModal = () => {
  modalProducto.show();
};

const crearProducto = (e) => {
  e.preventDefault();

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
  console.log(listaProductos);
  limpiarFormulario();

  guardarEnLocalStorage();

  dibujarFila(nuevoProducto);
};

const limpiarFormulario = () => {
  crear.reset();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
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
                  <button class="btn btn-primary">ver</button>
                  <button class="btn btn-warning">editar</button>
                  <button class="btn btn-danger"onclick="borrarProducto()">Borrar</button>
                </td>
              </tr>`
};

window.borrarProducto = () => {
  console.log("hola");
};

//logica crud
btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", crearProducto);

cargaInicial();
