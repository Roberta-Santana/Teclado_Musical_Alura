function tocarSomPom(){
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

const listaDeTeclas = document.querySelectorAll('.tecla');
/* const listaDeSons = document.querySelector('#som');*/
let contador = 0;

while(contador<listaDeTeclas.length){
    listaDeTeclas[contador].onclick=tocarSomPom;
    contador++;
    console.log(contador);
}



