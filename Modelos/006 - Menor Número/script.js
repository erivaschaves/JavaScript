//Definindo função validar
function validar(){
    //Pegando valores digitados no input
    var tn1 = window.document.getElementById('v1');
    var tn2 = window.document.getElementById('v2');
    var tn3 = window.document.getElementById('v3');
    var res = window.document.getElementById('res');
    //Convertendo valores para tipo number
    var v1 = Number(tn1.value);
    var v2 = Number(tn2.value);
    var v3 = Number(tn3.value);
    var men = v1;
    // Validando valores faltantes e menor valor. 
    if (tn1.value.length == 0 || tn2.value.length == 0 ||tn3.value.length == 0){
        res.innerHTML = 'Valor inválido ou vazio.';
    }else if (v1 == v2 && v2 == v3){
        res.innerHTML = "Os Valores são iguais.";
    }else if (v2 < v1 && v2 < v3){
        men = v2;
        res.innerHTML = `O Valor menor é ${men}.`;
    }else if (v3 < v1 && v3 < v2){
        men = v3;
        res.innerHTML = `O Valor menor é ${men}.`;
    }else {
        res.innerHTML = `O Valor menor é ${men}.`;   
    }
}
//Defindo função limpar
function limpar(){
    var n1 = window.document.getElementById('v1');
    var n2 = window.document.getElementById('v2');
    var n3 = window.document.getElementById('v3');
    n1.value = " ";
    n2.value = " ";
    n3.value = " ";
    res.innerHTML = "Resultado";
}