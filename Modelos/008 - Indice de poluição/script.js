//Definindo funçao validar
function validar(){
    var tnum = window.document.getElementById('num');
    var res = window.document.getElementById ('res');
    //Convertendo valor para tipo float
    var num = Number.parseFloat(tnum.value);
    // Validando Índice de Poluição e valores vazios
    if (tnum.value.length == 0){
        res.innerHTML = "Favor digitar um valor."
    }else if (num < 0.3){
        res.innerHTML = `Índice de poluição em <strong>${num}</strong>, não é necessário suspender as atividades.`;
    }else if (num >= 0.3 && num < 0.4){
        res.innerHTML = `Índice de poluição em <strong>${num}</strong>, 1º grupo suspende as atividades.`;
    }else if (num >= 0.4 && num < 0.5){
        res.innerHTML = `Índice de poluição em <strong>${num}</strong>, 1º e 2º grupos suspendem as atividades.`;
    }else if (num >= 0.5){
        res.innerHTML = `Índice de poluição em <strong>${num}</strong>, todos os grupos suspendem as atividades.`;
    }
}
//Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}