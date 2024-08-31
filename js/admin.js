import Producto from "./classProducto.js";
//logica del CRUD
//necesito crear una clase, archivo por cada clase
//aqui implemento en new, crea el objeto

//variables
const modalProducto = new bootstrap.Modal(document.getElementById("modalAdmi"));
const btnNuevo = document.getElementById("btnNuevo");
const crear = document.getElementById("Form");
const tabla = document.querySelector("tbody");

//traigo inputs del formulario
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const marca = document.getElementById("marca");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");
//crea el array
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

//funciones como abrir el modal desde js y no desde el data-bs-tarjet
const MostrarModal = () => {
  modalProducto.show();
};

const crearProducto = (e) => {
  e.preventDefault();
  //julian hay q validar el form con un archivo js
  //guardar objeto en array y guardar el array en el localstorage
  //acceder al value y pasarlo al contacto usando los inputs
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
};

const limpiarFormulario = () => {
  crear.reset();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("ListaProductosKey", JSON.stringify(listaProductos));
};

//en teoria con esto me tendria que mostrar lo que tengo guardado en el local storage, pero no me esta mostrando
const cargaInicial = () => {
  if (listaProductos.length !== 0) {
    listaProductos.map((productos) => dibujarFila(productos));
  }
};

//esta funcion muestra el producto que se agrego
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
                  <button class="btn btn-primary" onclick="verDetalle('${productos.id}')">ver</button>
                  <button class="btn btn-warning">editar</button>
                  <button class="btn btn-danger">borrar</button>
                </td>
              </tr>
  `;
};

//voy a tener un array de objetos productos, poner la linea del NEW en el boton submit y despues un array para guardar

//logica crud
btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", crearProducto);

cargaInicial();

// funcion ver para redireccionar pagina cocina 

window.verDetalle = (id) => {
  window.location.href = "/index.html?id=" + id;
};