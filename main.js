/*function tocarSomPom(){
    document.querySelector('#som_tecla_pom').play();
}/*POR ALGUMA RAZÃO QUE EU DESCONHEÇO, A FUNÇÃO tocarSomPom vai sem os ()
sem parênteses para garantir que a função seja chamada dinamicamente 
no momento do evento (clique), e não imediatamente durante a atribuição.
*/

/*EXECUTANDO SEM A FUNÇÃO ONCLICK NO HTML
function tocarSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocarSomClap; */

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//let contador = 0;

/* while(contador<listaDeTeclas.length){

        // 1º CRIANDO LISTA DE BOTÕES/ LIGANDO BOTÃO A INDICE DE LISTA 
    const tecla =listaDeTeclas[contador];
    ->  listaDeTeclas = lista de todos os elementos button da classe tecla;
        -> While: Cada loop associa o indice do loop a um botão/tecla específico
        listaDeTeclas[0=button.tecla.tecla.pom;1=button.tecla.tecla.clap;2=button.tecla.tecla.tim...]
        tecla =  listaDeTeclas[contador];
    console.log(tecla);


        //2º LISTA QUE ASSOCIA O INDICE DA LISTA TECLAS/BOTÃO A UMA CLASSE ESPECÍFICA (QUE REPETE NO ID DO AUDIO) 
    const instrumento = tecla.classList[1];
    -> instrumento = a tecla/button.tecla.tecla.som com referencia por indice +
        classlist = lista das classe daquele elemento 0=tecla;1=tecla_som,
        tecla.classList[1] = usando indice 1, que repete no id do som
        Intrumento é uma lista, que associa o indice da lista tecla, a uma classe espefica tecla_som
        instrumento
     console.log(instrumento);


        //3º LISTA QUE ASSOCIA O ID DO SOM E A CLASSE DA LISTA INSTRUMENTO #som_${instrumento} CRASE
    const IdAudio = `#som_${instrumento}`;
    console.log(IdAudio);

        //AO CLIQUE NA TECLA(INDICE DO CONTADOR ASSOCIADO A UM BOTÃO DEFINIDO POR UMA CLASSE ESPEÍFICA)
        // CHAMA A FUNÇÃO TOCAR SOM, QUE EXECUTA O PLAY NO AUDIO QUE TEM UMA CLASSE COMUM E ESPECÍFICA
    tecla.onclick=function(){ 
        tocaSom(IdAudio);
    };

    contador++;
    console.log(contador);
}*/

for(contador=0;contador<listaDeTeclas.length;contador++){
const tecla =listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const IdAudio = `#som_${instrumento}`;

 tecla.onclick = function(){
    tocaSom(IdAudio);
}
}
