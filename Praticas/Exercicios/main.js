const listaButton = document.querySelectorAll('input[type=button]');
console.log(listaButton);
//LISTA ORDENADA DE CADA INPUT, MAS NÃO TEM VALOR
const resp01 = document.querySelector('input[class=ex01]')

//01 - cada vez qque um botão é cliclado, incrementa 1
//resposta na tela 

for(i=0;i<listaButton.length;i++){
    const numLista = listaButton[i]; 
    //Atribuindo um indice a cada item da lista input button
    console.log(numLista);

    numLista.onclick = function(){
        //ao clique um dos botões do indice,
        resp01.value++;
        //o valor do elemento resp01 é incrementado a mais 1
        //= quantas vezes vc clicou
    }
}


