// Definindo função calcular
function calcular(){
    //Pegado valores do input pelo id
    var tn1 = window.document.getElementById('v1');
    var tn2 = window.document.getElementById('v2');
    var tn3 = window.document.getElementById('v3');
    var res = window.document.getElementById ('res');
    //Convertendo valores para tipo number
    var v1 = Number(tn1.value);
    var v2 = Number(tn2.value);
    var v3 = Number(tn3.value);
    // Validando valores e imprimindo resultados com parágrafos e concatenações
    if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0 ){
        res.innerHTML = "Favor Digitar um valor válido";
    }else { if (v1 > 0) {
        res.innerHTML = `A raiz quadrada do valor ${v1} é: ${Math.sqrt(v1)}` ;
    }else {
        res.innerHTML = `O quadrado do valor ${v1} é: ${v1 * v1}`;
    }
    if (v2 > 10 && v2<100){
         res.innerHTML += `<p>O número ${v2} está entre 10 e 100 - intervalo permitido</p>`;
    }else {
         res.innerHTML += `<p>O número ${v2} não está entre 10 e 100 - favor digitar um valor válido</p>`
    }if (v3 < v2) {
         res.innerHTML += `<p>A diferença entre ${v2} e ${v3} é ${v2 - v3}</p>`
    }else{
         res.innerHTML += `<p>O valor ${v3} + 1 é: ${v3 + 1}</p>`
    }
}
}
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}