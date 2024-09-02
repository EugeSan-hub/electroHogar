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
let estoyCreando = true;
//crea el array
const listaProductos =
  JSON.parse(localStorage.getItem("ListaProductosKey")) || [];

//funciones como abrir el modal desde js y no desde el data-bs-tarjet
const MostrarModal = () => {
  modalProducto.show();
};

const crearProducto = () => {
  estoyCreando = true;
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

// const limpiarTabla = (productos)=>{
//   tabla.innerHTML = 
// }

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
                  <button class="btn btn-primary">ver</button>
                  <button class="btn btn-warning"  onclick="prepararEditarProducto('${productos.id}')">editar</button>
                  <button class="btn btn-danger">borrar</button>
                </td>
              </tr>
  `;
};

//voy a tener un array de objetos productos, poner la linea del NEW en el boton submit y despues un array para guardar

//logica crud
btnNuevo.addEventListener("click", MostrarModal);
crear.addEventListener("submit", administrarProducto);

cargaInicial();
