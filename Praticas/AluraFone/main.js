/* function addNum(idValue){
    document.querySelector('input[type=tel]')
}
const listaNumerica = document.querySelectorAll('.numero');
//no click de algum botão da minha lista numerica
//a caixa de digite seu telefone recebe o numero = 

for(i=0; i<listaNumerica.length;i++){
    const teclaNum = listaNumerica[i];
    console.log(teclaNum);

    //ao cliccar em tecla, ela add um n ao campo input type
    teclaNum.onclick = function(){
        addNum.value = addNum.value + teclaNum.value; 
    }
} */

const listaNumerica = document.querySelectorAll('input[type=button]');
const addNum = document.querySelector('input[type=tel]');

/* for(i=0;i<listaNumerica.length;i++){
    const tecla = listaNumerica[i];
    console.log(tecla);
    tecla.onclick = function(){
        addNum.value = addNum.value+ tecla.value;
    }    
} */



