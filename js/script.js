// lógica del menu (simplemente el clik en un icono)

// selección de elementos del html

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// definimos evneto click sobre le botón del menú
burger.addEventListener("click", function () {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  menu_opt.classList.toggle("menu-show");
});


// menu acordeon página información
// Función para mostrar/ocultar el texto extendido
const botones = document.querySelectorAll(".ver-mas");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const texto = boton.nextElementSibling;
    texto.style.display = texto.style.display === "block" ? "none" : "block";
    boton.textContent =
      texto.style.display === "block" ? "Leer menos" : "Leer más";
  });
});

// efecto scroll cabecera

/*jslint devel: true*/
/*eslint-env browser*/

function shrinkHeader() {
    "use strict";
    var scroll = window.scrollY;
    var threshold = window.innerHeight / 2;
    var header = document.getElementsByTagName("header")[0];
    if (scroll > threshold) {
        header.style.height = "3em";
        header.firstElementChild.style.fontSize = "2em";
        header.lastElementChild.className = "desaparecer";
    } else {
        header.style.height = "7em";
        header.firstElementChild.style.fontSize = "3em";
        header.lastElementChild.className = "";
    }
}

window.onscroll = function () {
    "use strict";
    shrinkHeader();
};





//  JS PARA FORMULARIO COMPRAENTRADAS
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="number"]');
  // detecta que cada  ez q cambia uno de los imputs, cambia todo
  const totalPriceElement = document.getElementById("totalPrice");

  // Añade a cada input un evento change para calcular el precio total
  inputs.forEach((input) => {
    input.addEventListener("change", calculateTotalPrice);
  });
  // por cada uno de los imputs que hay seleccionados, le pone un evento que es changue, pq es caudno cambia el valor, pq no es ningun hover o click

  // Función para calcular el precio total
  function calculateTotalPrice() {
    let totalPrice = 0;
    inputs.forEach((input) => {
      const price = parseFloat(input.dataset.price) || 0;
      const quantity = parseInt(input.value) || 0;
      totalPrice += price * quantity;

      // Si el precio es mayor que 0, se habilita el botón de comprar
      if (totalPrice > 0) {
        document.getElementById("buyFood").classList.remove("disabled");
      } else {
        document.getElementById("buyFood").classList.add("disabled");
      }
    });
    totalPriceElement.textContent = totalPrice.toFixed(2) + " €";
  }

  // La primera llamada a la función hará el calculo inicial para poner 0.00 €
  calculateTotalPrice();

  // Evitar el envio del formulario si el usuario pulsa enter o el precio es 0
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

// VENTANAS MODALES INFORMACIÓN VER MÁS

// Lógica abrir/cerrar de la ventana modal
let btnOpenModal = document.querySelector("#openModal");

btnOpenModal.addEventListener("click", openModalWindow);

// Función propia para abrir ventana modal
function openModalWindow() {
  let modalWindow = document.querySelector("#modalWindow");
  modalWindow.classList.add("show-modal");
}

let btnCloseModal = document.querySelector(
  "#modalWindow > .modal-content > .close"
);
let btnCloseModalAccept = document.querySelector(
  "#modalWindow > .modal-content > #closeModalAccept"
);

btnCloseModal.addEventListener("click", closeModalWindow);
btnCloseModalAccept.addEventListener("click", closeModalWindow);

// Función para cerrar la ventana modal
function closeModalWindow() {
  let modalWindow = document.querySelector("#modalWindow");
  modalWindow.classList.remove("show-modal");
}

// Cerrar ventana modal cuando se detecta click fuera
window.addEventListener("click", function (event) {
  // llama solo a la función de cerrar modal siempre que el click no sea en la propia ventana modal
  let modal = document.querySelector("#modalWindow");

  if (event.target == modal) {
    closeModalWindow();
  }
});


// modal info 2
let btnOpenModal2 = document.querySelector("#openModal2");
btnOpenModal2.addEventListener("click", function () {
  let modalWindow2 = document.querySelector("#modalWindow2");
  modalWindow2.classList.add("show-modal");
});

let btnCloseModal2 = document.querySelector("#modalWindow2 > .modal-content > .close");
let btnCloseModalAccept2 = document.querySelector("#modalWindow2 > .modal-content > #closeModalAccept2");

btnCloseModal2.addEventListener("click", function () {
  document.querySelector("#modalWindow2").classList.remove("show-modal");
});

btnCloseModalAccept2.addEventListener("click", function () {
  document.querySelector("#modalWindow2").classList.remove("show-modal");
});

window.addEventListener("click", function (event) {
  let modal2 = document.querySelector("#modalWindow2");
  if (event.target == modal2) {
    modal2.classList.remove("show-modal");
  }
});

// modal info 3
let btnOpenModal3 = document.querySelector("#openModal3");
btnOpenModal3.addEventListener("click", function () {
  let modalWindow3 = document.querySelector("#modalWindow3");
  modalWindow3.classList.add("show-modal");
});

let btnCloseModal3 = document.querySelector("#modalWindow3 > .modal-content > .close");
let btnCloseModalAccept3 = document.querySelector("#modalWindow3 > .modal-content > #closeModalAccept3");

btnCloseModal3.addEventListener("click", function () {
  document.querySelector("#modalWindow3").classList.remove("show-modal");
});

btnCloseModalAccept3.addEventListener("click", function () {
  document.querySelector("#modalWindow3").classList.remove("show-modal");
});

window.addEventListener("click", function (event) {
  let modal3 = document.querySelector("#modalWindow3");
  if (event.target == modal3) {
    modal3.classList.remove("show-modal");
  }
});

// modal info 4
let btnOpenModal4 = document.querySelector("#openModal4");
btnOpenModal4.addEventListener("click", function () {
  let modalWindow4 = document.querySelector("#modalWindow4");
  modalWindow4.classList.add("show-modal");
});

let btnCloseModal4 = document.querySelector("#modalWindow4 > .modal-content > .close");
let btnCloseModalAccept4 = document.querySelector("#modalWindow4 > .modal-content > #closeModalAccept4");

btnCloseModal4.addEventListener("click", function () {
  document.querySelector("#modalWindow4").classList.remove("show-modal");
});

btnCloseModalAccept4.addEventListener("click", function () {
  document.querySelector("#modalWindow4").classList.remove("show-modal");
});

window.addEventListener("click", function (event) {
  let modal4 = document.querySelector("#modalWindow4");
  if (event.target == modal4) {
    modal4.classList.remove("show-modal");
  }
});



// script para la cuenta atrás del festival
// página principal
document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Sept 18, 2026 15:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});


/*jslint devel: true*/
/*eslint-env browser*/

function shrinkHeader() {
    "use strict";
    var scroll = window.scrollY;
    var threshold = window.innerHeight / 2;
    var header = document.getElementsByTagName("header")[0];
    if (scroll > threshold) {
        header.style.height = "3em";
        header.firstElementChild.style.fontSize = "2em";
        header.lastElementChild.className = "desaparecer";
    } else {
        header.style.height = "7em";
        header.firstElementChild.style.fontSize = "3em";
        header.lastElementChild.className = "";
    }
}

window.onscroll = function () {
    "use strict";
    shrinkHeader();
};



