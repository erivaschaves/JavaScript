// Definindo função Validar
function validar(){
    //Pegando valores digitados no input
    var tn1 = window.document.getElementById('n1');
    var tn2 = window.document.getElementById('n2');
    var tfreq = window.document.getElementById('freq');
    var res = window.document.getElementById('res');
    //Convertendo valores para tipo float
    var n1 = Number.parseFloat(tn1.value);
    var n2 = Number.parseFloat(tn2.value);
    //Convertendo valores para tipo number
    var freq = Number(tfreq.value);
    var media = (n1 + n2) / 2;
    // Validando valores faltantes e o resultado do aluno com uma casa decimal.
    if (tn1.value.length == 0 || tn2.value.length == 0 ||tfreq.value.length == 0){       
        res.innerHTML = '';
        res.innerHTML += "Faltam Dados";  
    }else if (media > 10 || freq < 0 || freq > 40){
            res.innerHTML = '';
            res.innerHTML += "Valor inválido, notas entre 0 e 10 e frequência entre 0 e 40!!!";} else {
            if (media >= 6 && freq >= (40* 0.75)){
            res.innerHTML = `Sua média é ${media.toFixed(1)} com frequência de ${(100*freq)/40}% você foi aprovado`;
            }else{
            res.innerHTML = `Sua média é ${media.toFixed(1)} com frequência de ${(100*freq)/40}% você foi reprovado`;
            }
        }          
}
// Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}