const login = document.getElementById("iniciarSesion");
const adminUsuario = "admin20";
const adminContraseña = "holamundo321";
const formLogin = document.getElementById("formLogin");
const modalLogin = new bootstrap.Modal(document.getElementById("modalAdmin"));

const abrirModal = ()=>{
    modalLogin.show();
}

const iniciarSesion = (e)=>{
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if(usuario === adminUsuario && contraseña === adminContraseña){
        window.location.href="./pages/paginaAdministrado.html"
    }else{
        alert('¡Usuario o Contraseña incorrecta')
    }
    limpiarFormLogin();
}

const limpiarFormLogin = ()=>{
    formLogin.reset();
}

login.addEventListener("click", abrirModal)
formLogin.addEventListener("submit", iniciarSesion)
