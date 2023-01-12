//01
let classCard = document.getElementsByClassName("card")
function mudaCorCard() {
    for(const elemento of classCard){
        elemento.setAttribute("style", "background-color: #b5590b; color: #f8ddad;")
    }
}
mudaCorCard();

//02-03
let tituloCard = document.getElementsByClassName("titulo-card")
function mudaTituloCard() {
    for(const elemento of tituloCard){
        elemento.innerText = "Meu card"
        elemento.setAttribute("style", "color: #2d3958; padding: 15px; margin-top: 15px;"  )
    }
}
mudaTituloCard();

//04-05
let descricaoCard = document.getElementsByClassName("descricao-card")
function mudaDescricaoCard() {
    for(const elemento of descricaoCard){
        elemento.innerText = "Descrição modificada pelo JavaScript"
        elemento.setAttribute("style", "font-size: 15px; margin-bottom: 15px;")
    }
}
mudaDescricaoCard();

//06
let botaoCard = document.getElementsByClassName("botao-editar")
function mudaBotaoCard() {
    for (const elemento of botaoCard) {
        elemento.setAttribute('style', 'background-color: green; border: none; border-radius: 7px; padding: 7px; color: white')
        elemento.setAttribute("onclick", "mostraAlertaEditar()" )
    }
}
mudaBotaoCard();

//07
let botaoCardDelete = document.getElementsByClassName("botao-apagar")
function mudarBotaoCardDelete() {
    for (const elemento of botaoCardDelete) {
        elemento.setAttribute('style', 'background-color: red; border: none; border-radius: 7px; padding: 7px; color: white')
        elemento.setAttribute("onclick", "mostraAlertaApagar()" )
    }
}
mudarBotaoCardDelete();

//08
function mostraAlertaEditar() {
    alert("Clicou em Editar!")
}

//09
function mostraAlertaApagar() {
    const confirma = confirm("Confirma que quer apagar o Card?")
    if (confirma) {
        alert("Card apagado!")
    }else{
        alert("Cancelou!")
    }
}