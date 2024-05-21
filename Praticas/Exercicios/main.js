const listaButton = document.querySelectorAll('input[type=button]');
console.log(listaButton);
//LISTA ORDENADA DE CADA INPUT, MAS NÃO TEM VALOR

const resp01 = document.querySelector('input[class=ex01]');

//01 - cada vez que um botão é cliclado, incrementa 1
//resposta na tela 

/* for(i=0;i<listaButton.length;i++){
    const numLista = listaButton[i]; 
    //Atribuindo um indice a cada item da lista input button
    console.log(numLista);

    numLista.onclick = function(){
        //ao clique um dos botões do indice,
        resp01.value++;
        //o valor do elemento resp01 é incrementado a mais 1
        //= quantas vezes vc clicou
    }
} */

// USANDO SOLUÇÃO DO PROF
//1 - Cada vez que um botão é clicado, deve incrementar 1
//1º criar a função incremento, 
let contador = 0;

function incrementoContador(){
    contador++;
    console.log('Contador: '+contador);
}
//Contador valor 0,(botão 1) incrementa a lista
//listaButton[0].onclick = incrementoContador;

/*QUESTÃO 3 - Incrementar sempre que o quarto elemento do array for clicado 
    listaButton[3].onclick = function (){
        incrementoContador()
    }; OUUUUU
        listaButton[3].onclick = incrementoContador; 
    se colocar () a função executa sozinha e uma única vez */

/*QUESTÃO 4 - Incrementar quando algum botão da lista for clicado
necessário criar indice I, no while não esquecer de i++
    let i=0;
    while(i<listaButton.length){
        listaButton[i].onclick = incrementoContador;
        i++;}
*/

/*QUESTÃO 5 - Usando o for */

for(i=0;i<listaButton.length;i++){
    console.log(i)
listaButton[i].onclick = incrementoContador;
}