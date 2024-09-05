
//console.log ('Adicione Valores antes de Finalizar!')
//console.log ('Valor inválido ou já encontrado na lista.')
var vetor = []
var res = window.document.getElementById('res')
function adicionar(n){
    var num = window.document.getElementById('txtn')
    var val = window.document.getElementById('selval')
    var n = Number(num.value)
    existe = false
    if (Number(n) < 1 || Number(n) > 100){
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
            res.innerHTML = ''            
        }
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if(vetor.length == 0){
        window.alert('Adicione Valores antes de Finalizar!')

    }else{       
        maior = vetor[0]
        soma = 0
        menor = vetor[0]
        for (c = 0; c < vetor.length; c++){
            soma+= vetor[c]
            if(maior < vetor[c]){
               maior = vetor[c]
            }
            if(menor > vetor[c]){
                menor = vetor[c]
            }    
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media = soma / vetor.length}.</p>`
        }
}

    



//console.log(vetor)
//console.log(vetor.length)
