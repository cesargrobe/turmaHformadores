
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length ){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+ efeito;

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
}


