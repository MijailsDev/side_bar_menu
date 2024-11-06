const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click", (event) => {
    event.stopPropagation();
    barraLateral.classList.toggle("max-barra-lateral");
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
});

palanca.addEventListener("click", (event) => {
    event.stopPropagation();
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click", (event) => {
    event.stopPropagation();
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});

// Nuevo evento para minimizar la barra lateral al hacer clic en el main
main.addEventListener("click", () => {
    if (!barraLateral.classList.contains("mini-barra-lateral")) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
});

// Iniciar el sitio con la barra lateral minimizada
window.addEventListener("DOMContentLoaded", () => {
    barraLateral.classList.add("mini-barra-lateral");
    main.classList.add("min-main");
    spans.forEach((span) => {
        span.classList.add("oculto");
    });
});

