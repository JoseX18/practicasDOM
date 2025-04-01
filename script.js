//Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//Constantes a cada boton
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");

let funcionEjercicioActual;
//Eventos
btnParImpar.addEventListener("click", () => {
    abrirModal("Numero Par o Impar", "Ingresa un numero para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click", () => {
    abrirModal("Mayor de edad", "Ingresa tu edad para saber si eres mayor de edad", verificarEdad);
});

const abrirModal = (titulo, descripcion, funcionEjercicio) => {
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = ""

    funcionEjercicioActual = funcionEjercicio;

    modal.classList.add("activarModal");
};

btnCerrar.addEventListener("click", () => {
    modal.classList.remove("activarModal");
});

const verificarParImpar = () => {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un numero valido";
    } else {
        mensaje.textContent = (numero % 2 === 0) ? "Es un numero PAR" : "Es un numero IMPAR";
    }
};

btnVerificar.addEventListener("click", () => {
    funcionEjercicioActual();
});

const verificarEdad = () => {
    let numero = parseInt(respuesta.value);
    if (isNaN(numero)) {
        mensaje.textContent = "Ingresa un numero valido"
    } else {
        mensaje.textContent = (numero >= 18) ? "Usted es mayor de edad" : "Usted no es mayor de edad";
    }
};