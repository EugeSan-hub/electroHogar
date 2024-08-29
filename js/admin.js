import { Producto } from "./classProducto";
//logica del CRUD
//necesito crear una clase, archivo por cada clase
//aqui implemento en new, crea el objeto

const producto = new Producto("heladera", "samsung", 2, 2000);
console.log(producto);

const modalProducto = new bootstrap.Modal(document.getElementById("modalAdmi"));
const btnNuevo = document.getElementById("btnNuevo")


//funciones



//LOGICA EVENTOS ONCLICK