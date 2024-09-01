const login = document.getElementById("iniciarSesion");

const formLogin = document.getElementById("formLogin");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");

const modalLogin = new bootstrap.Modal(document.getElementById("modalAdmin"));


const abrirModal = ()=>{
    modalLogin.show();
}

login.addEventListener("click", abrirModal)