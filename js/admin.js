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
                  <button class="btn btn-primary" onclick="verDetalle('${productos.id}')">ver</button>
                  <button class="btn btn-warning">editar</button>
                  <button class="btn btn-danger"onclick="borrarProducto('${productos.id}')">Borrar</button>
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
crear.addEventListener("submit", crearProducto);

cargaInicial();

// funcion ver para redireccionar pagina cocina 

window.verDetalle = (id) => {
  window.location.href = "/index.html?id=" + id;
};