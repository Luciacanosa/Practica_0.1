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
