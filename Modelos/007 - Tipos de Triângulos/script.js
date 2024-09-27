//Definindo função validar
function validar(){
    //Pegando valores digitados no input
    var tn1 = window.document.getElementById('v1');
    var tn2 = window.document.getElementById('v2');
    var tn3 = window.document.getElementById('v3');
    var res = window.document.getElementById('res');
    var img = window.document.getElementById('img');
    //Convertendo valores para tipo number
    var v1 = Number(tn1.value);
    var v2 = Number(tn2.value);
    var v3 = Number(tn3.value);
    // Validando valores e tipos de triângulos
    if (tn1.value.length == 0 || tn2.value.length == 0 ||tn3.value.length == 0){
        res.innerHTML = 'Valor inválido ou faltante.';
    }else if((v1 + v2) < v3 || (v1 + v3) < v2 || (v2 + v3 < v1) || v1 <=0 || v2 <=0 || v3 <=0){
        res.innerHTML = "Não formam um Triângulo.";
    }else if (v1 == v2 && v1 == v3) {
        res.innerHTML = "Triâgulo equilátero.";
        img.src = 'Equilátero.png';
    }else if ( v1 != v2 && v1 != v3 && v2 != v3){
        res.innerHTML = "Triângulo escaleno.";
        img.src = 'Escaleno.png';
    }else if( (v1 == v2 && v1!= v3) ||(v1 == v3 &&  v1 != v2 ) ){
        res.innerHTML = "Triângulo isóceles.";
        img.src = 'Isósceles.png';
    }
}

// Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
    img.src = 'Interrogação.png';
}