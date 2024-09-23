// Definindo função validar 
function validar (){
    //Pegado valores do input pelo id
    var id = window.document.getElementById('id');
    //Convertendo valores para tipo number
    var idade = Number(id.value);
    var res = window.document.getElementById ('res');
    // Validando valores vazios e Imprimindo a idade
    if (id.value.length== 0 ) {
        res.innerHTML = "Favor digitar a idade!!!";   
    }else {
        if (idade < 5) {
        res.innerHTML = "Não pode nadar";
        }else if (idade >=5 && idade <=7){
        res.innerHTML = "Infantil A";
        }else if (idade >=8 && idade <=10){
        res.innerHTML = "Infantil B";
        }else if (idade >=11 && idade <=13){
        res.innerHTML = "Juvenil A";
        }else if (idade >=14 && idade <=17){
        res.innerHTML = "Juvenil B";
        }else if (idade >=18){
        res.innerHTML = "Sênior";
        }
    }
}
// Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}