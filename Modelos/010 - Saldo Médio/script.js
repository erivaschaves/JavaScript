//Definindo função calcular
function calcular(){
    //Pegando valores do input pelo id {
        tsaldo = window.document.getElementById ('saldo');
        res = window.document.getElementById ('res');
        //Convertendo valor para tipo float
        saldo = Number.parseFloat(tsaldo.value);
         //Validando valores vazios, saldo e crédito
        if (tsaldo.value.length == 0 || saldo <1){
            res.innerHTML = "Favor Digitar um valor válido.";
        }else {
            if (saldo <=200.99){
            res.innerHTML = "Nenhum crédito.";
            }else if (saldo >=201 && saldo<=400){
            credito = saldo * 0.20;
            // Exibindo o valores em Real.
            res.innerHTML = `O saldo médio é: ${saldo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.<br> O valor do crédito é: ${credito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.`;
            }else if (saldo >= 401 && saldo <= 600){
            credito = saldo * 0.30;
            res.innerHTML = `O saldo médio é: ${saldo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.<br> O valor do crédito é: ${credito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.`;
            }else if (saldo > 600){
            credito = saldo * 0.40;
            res.innerHTML = `O saldo médio é: ${saldo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.<br> O valor do crédito é: ${credito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.`;
        }
    }
}
//Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}