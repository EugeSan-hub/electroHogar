const cerrar = document.getElementById("cerrarSesion");

const sesionCerrada = ()=>{
    window.location.href="../index.html";
}

cerrar.addEventListener("click", sesionCerrada)