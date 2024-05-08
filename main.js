function tocarSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

/*EXECUTANDO SEM A FUNÇÃO ONCLICK NO HTML*/
function tocarSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocarSomClap;
