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
const btnPassword = document.getElementById("btnPassword");
const btnMayuscula = document.getElementById("btnMayuscula");

const btnTablas = document.getElementById("btnTablas");
const btnCaracteres = document.getElementById("btnCaracteres");
const btnCuenta = document.getElementById("btnCuenta");
const btnReversa = document.getElementById("btnReversa");

let funcionEjercicioActual;
//Eventos
btnParImpar.addEventListener("click", () => {
    abrirModal("Numero Par o Impar", "Ingresa un numero para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click", () => {
    abrirModal("Mayor de edad", "Ingresa tu edad para saber si eres mayor de edad", verificarEdad);
});

btnPassword.addEventListener("click", () => {
    abrirModal("Contraseña valida", "Ingrese una contraseña valida", longPassword)
});

btnMayuscula.addEventListener("click", () => {
    abrirModal("Compruebe si hay mayusculas", "Ingrese el texto a comprobar", contieneMayuscula);
})

btnTablas.addEventListener("click", () => {
    abrirModal("Tablas de multiplicar", "Ingrese un numero entre 1-10", tablasMultiplicar);
})

btnCaracteres.addEventListener("click", () => {
    abrirModal("Imprimir caracteres", "Ingrese una palabra", imprimirCaracteres);
})

btnCuenta.addEventListener("click", () => {
    abrirModal("Cuenta Regresiva", "Ingrese un numero mayor a 0", cuentaRegresiva);
})

btnReversa.addEventListener("click", () => {
    abrirModal("Mostrar palabra al reves", "Ingrese una palabra", revertirPalabra)
})

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

const longPassword = () => {
    let data = respuesta.value;
    if (data.length < 7) {
        mensaje.textContent = "Su contraseña no cuenta con al menos 8 caracteres"
    } else {
        mensaje.textContent = `Su contraseña cuenta con ${data.length} caracteres, es segura`;
    }
};

const contieneMayuscula = () => {
    let data = respuesta.value;
    if (data.toLowerCase() === data) {
        mensaje.textContent = "El texto ingresado no contiene mayusculas";
    } else {
        mensaje.textContent = "Su texto tiene mayusculas";
    }
}

const tablasMultiplicar = () => {
    let number = respuesta.value;
    if (isNaN(number)) {
        mensaje.textContent = "El dato ingresado no es un numero, intentelo de nuevo";
    } else if (number >= 1 && number <= 10) {
        let tablas;
        mensaje.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            tablas = document.createElement("p");
            mensaje.appendChild(tablas);
            tablas.textContent = `${i} * ${number} = ${i * number}`;
        }
    } else {
        mensaje.textContent = "Numero ingresado no es valido."
    }
}

const imprimirCaracteres = () => {
    let data = respuesta.value;
    if (Number.isInteger(parseInt(data))) {
        mensaje.textContent = "El dato ingresado es un numero, intente con una palabra";
    } else {
        let caracter;
        mensaje.innerHTML = ""
        for (let i = 0; i <= data.length; i++) {
            caracter = document.createElement("p");
            mensaje.appendChild(caracter);
            caracter.textContent = data[i];
        }
    }
}

const cuentaRegresiva = () => {
    let number = respuesta.value;
    if (isNaN(number)) {
        mensaje.textContent = "Ingrese un numero";
    } else if (number < 1 || number > 20) {
        mensaje.textContent = "Intentelo de nuevo, el numero debe de ser entre 1 - 20"
    } else {
        let tag;
        mensaje.innerHTML = ""
        for (let i = number; i >= 0; i--) {
            tag = document.createElement("p");
            mensaje.appendChild(tag);
            tag.textContent = i;
        }
    }
}

const revertirPalabra = () => {
    let word = respuesta.value;
    if (isNaN(word)) {
        let newWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            newWord += word[i];
        }
        mensaje.textContent = `Nueva palabra al reves ${newWord}`;
    } else {
        mensaje.textContent = `Ingrese una palabra valida`;
    }
}