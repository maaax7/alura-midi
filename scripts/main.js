const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas.forEach(tecla => {
    tecla.onclick = function () {
        tocaSom(`#som_${tecla.classList[1]}`);
    }

    tecla.onkeydown = function (event) {
        if (event.code === "Enter" || event.code === "Space")
            adicionaClasseAtiva(tecla);
    }

    tecla.onkeyup = function () {
        removeClasseAtiva(tecla);
    }

});

function tocaSom(seletor) {
    const elemento = document.querySelector(seletor);
     
    if (elemento === null)
        console.log("Elemento nao encontrado!");
    else if (elemento.localName !== "audio")
        console.log("Elemento nao é do tipo audio!");
    else
        elemento.play();
}

function adicionaClasseAtiva(tecla) { tecla.classList.add('ativa'); }
function removeClasseAtiva(tecla) { tecla.classList.remove('ativa'); }
