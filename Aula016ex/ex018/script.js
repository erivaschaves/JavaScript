
//console.log ('Adicione Valores antes de Finalizar!')
//console.log ('Valor inválido ou já encontrado na lista.')
var vetor = []
var res = window.document.getElementById('res')
var mai = window.document.getElementById('maior')
var men = window.document.getElementById('menor')
var som = window.document.getElementById('soma')
var med = window.document.getElementById('media')
function adicionar(n){
    var num = window.document.getElementById('txtn')
    var val = window.document.getElementById('selval')
    var n = Number(num.value)
    existe = false
    if (n < 0 || n > 100 || n == 0){
        window.alert('Valor inválido ou já encontrado na lista.') 
    }else{
        for (c=0; c<vetor.length; c++){
            if(vetor[c] == n){
                window.alert('Valor inválido ou já encontrado na lista.') 
                existe = true 
            }
        }   
        if(existe == false){   
            var item = document.createElement('option')
            item.text = `O Valor ${n} foi adicionado.`
            val.value = `val ${n}`
            val.appendChild(item)
            vetor.push(Number(n))            
        }
    }
    
}


function finalizar(){
res.innerHTML= `Ao todo temos ${vetor.length} números cadastrados.`
maior = 0
soma = 0

for (c = 0; c < vetor.length; c++){
    if(maior < vetor[c]){
        maior = vetor[c]
    }
    soma+= vetor[c]
}
menor = maior
for (c = 0; c<vetor.length; c++){
    if(menor > vetor[c]){
        menor = vetor[c]
    }
}
mai.innerHTML = `O maior valor informado foi ${maior}.` + '<br>'
men.innerHTML = `O menor valor informado foi ${menor}.` + '<br>'
som.innerHTML = `Somando todos os valores, temos ${soma}.`+ '<br>'
med.innerHTML = `A média dos valores digitados é ${media = soma / vetor.length}.`
}

    



//console.log(vetor)
//console.log(vetor.length)
