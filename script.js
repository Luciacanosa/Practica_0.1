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
