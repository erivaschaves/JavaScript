//Definindo função calcular
function calcular(){
    //Pegado valores do input pelo id
    var talt = window.document.getElementById('alt');
    //Convertendo valores para tipo number
    var alt = Number(talt.value)
    var res = window.document.getElementById('res');
    // Validando a opção marcada e exbindo com 2 casas decimais com toFixed
    if( window.document.getElementById('mas').checked) {
        res.innerHTML = `Seu peso ideal é: ${((72.7 * alt) - 58).toFixed(2)} KG meu jovem.`;
    }else{
        res.innerHTML = `Seu peso ideal é: ${((62.1 * alt) - 44.7).toFixed(2)} KG minha jovem.`; 
    }
}
//Definindo função limpar
function limpar(){
    var inputVal = window.document.querySelector('input[type=Number]');
    inputVal.value = " ";
    res.innerHTML = "Resultado";
}