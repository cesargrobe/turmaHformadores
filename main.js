
function tocaSomRisada() {
    document.querySelector("#som_tecla_aplausos ").play();
}

const listaDeTeclas = document.querySelectorAll(".teclado");

listaDeTeclas[2].onclick = tocaSomRisada;


