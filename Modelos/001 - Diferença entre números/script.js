
//Definindo função subtrair
function subtrair(){
    //Pegando valores dos inputs pelo id
    var tn1  = window.document.getElementById('n1');
    var tn2 = window.document.getElementById ('n2');
    var res = window.document.getElementById('res');
    // Convertendo valores para tipo number.
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 - n2;
    //Caso de valores vazios.
    if (tn1.value.length == 0 || tn2.value.length == 0 ){
        res.innerHTML = "Favor Digitar um valor válido";
    }else
    //Caso n1 seja maior que n2. 
    if(n1>n2){
        res.innerHTML = `${n1} é maior que ${n2}, a diferença entre eles é <strong>${s}</strong>.`;
    }else 
    //Caso n2 seja maior que n1.
    if (n1<n2){
        s = n2 - n1;                
        res.innerHTML = `${n2} é maior que ${n1}, a diferença entre eles é <strong>${s}</strong>.`;
    }
    //Caso sejam iguais.
    else{
            res.innerHTML = `Os Números são iguais, a diferença é <strong>${s}</strong>.`;
        }
    }

    function limpar(){
        var inputVal = window.document.querySelector('input[type=Number]');
        inputVal.value = " ";
        res.innerHTML = "Resultado";
    }

    
    
    