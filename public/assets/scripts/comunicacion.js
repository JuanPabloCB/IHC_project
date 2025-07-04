document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const inputArea = document.getElementById("input-area");
    const opciones = document.querySelectorAll(".option");
    const volverBtn = document.querySelector(".back-btn");

    opciones.forEach(opcion => {
        opcion.addEventListener("click", () => {
            modal.style.display = "none";
            if (inputArea) inputArea.style.display = "flex";
        });
    });

    volverBtn.addEventListener("click", () => {
        window.location.href = "intranet.html";
    });
});
