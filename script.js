let tamanhoFonte = 16;


// AUMENTAR LETRA

function aumentarFonte() {

    if (tamanhoFonte < 24) {

        tamanhoFonte += 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";
    }
}


// DIMINUIR LETRA

function diminuirFonte() {

    if (tamanhoFonte > 12) {

        tamanhoFonte -= 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";
    }
}


// =========================
// MODO CLARO / ESCURO
// =========================

function alternarTema() {

    document.body.classList.toggle("escuro");

}
