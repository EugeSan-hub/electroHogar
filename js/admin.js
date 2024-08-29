import Producto from "./classProducto.js";
//logica del CRUD
//necesito crear una clase, archivo por cada clase
//aqui implemento en new, crea el objeto

//variables
const modalProducto = new bootstrap.Modal(document.getElementById("modalAdmi"));
const btnNuevo = document.getElementById("btnNuevo");
const crear = document.getElementById("Form");

//traigo inputs del formulario
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const marca = document.getElementById("marca");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");
//crea el array
const listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];

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
  console.log(listaProductos)
  limpiarFormulario();
  //Guardar en el LocalStorage
  guardarEnLocalStorage();
};

const limpiarFormulario = ()=>{
  crear.reset();
}

const guardarEnLocalStorage = ()=>{
  localStorage.setItem('ListaProductosKey', JSON.stringify(listaProductos));
}

//voy a tener un array de objetos productos, poner la linea del NEW en el boton submit y despues un array para guardar

//logica crud
btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", crearProducto);
