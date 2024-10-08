//Defindo função calcular
function calcular(){
    //Pegando valores do input pelo id
    tvalor = window.document.getElementById('valor');
    ttaxa = window.document.getElementById('taxa');
    tanos = window.document.getElementById('anos');
    res = window.document.getElementById('res');
    //Validando valores vazios
    if (tvalor.value.length == 0 || ttaxa.value.length == 0 || tanos.value.length == 0 || Number.parseFloat(tvalor.value)<1 || Number.parseFloat(tanos.value)<0){
    res.innerHTML = "Favor digitar um valor válido."
    }else if ( Number.parseFloat(ttaxa.value)<0 || Number.parseFloat(ttaxa.value)>100 ){
    res.innerHTML = "O juros deve estar entre 0 e 100."
}else {
    //Convertendo valor para tipo float
    valor = Number.parseFloat(tvalor.value);
    taxa = Number.parseFloat(ttaxa.value);
    //Convertendo valor para tipo Number
    anos = Number(tanos.value);
    juros = ((taxa/100) + 1);
    acumulo = ((juros * valor) * anos);
    // Exibindo o valor em Real.
    res.innerHTML = `O Valor acumulado é: ${acumulo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.`;
}
}
//Definindo a função limpar
function limpar(){
    var n1 = window.document.getElementById('valor');
    var n2 = window.document.getElementById('taxa');
    var n3 = window.document.getElementById('anos');
    n1.value = " ";
    n2.value = " ";
    n3.value = " ";
    res.innerHTML = "Resultado";
}