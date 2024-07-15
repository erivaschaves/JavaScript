
//console.log ('Adicione Valores antes de Finalizar!')
//console.log ('Valor inválido ou já encontrado na lista.')
var vetor = []
function adicionar(n){
    var num = window.document.getElementById('txtn')
    var val = window.document.getElementById('selval')
    val.innerHTML = ''
    if (n < 0 || n > 100 || vetor.length<0){
        window.alert('Valor inválido ou já encontrado na lista.') 
    }else
        existe = false
        for (c=0; c<vetor.length; c++){
            if(vetor[c] == n){
                window.alert('Valor inválido ou já encontrado na lista.') 
                existe = true 
            }
        }
        
        if(existe == false){
        vetor.push(num.value)
        var n1 = num.value
        var s = 1
        while(s<vetor.length){
            var item = document.createElement('option')
            item.text = `O Valor ${n1} foi adicionado.`
            val.value = `val ${s}`
            val.appendChild(item)
            s++
        }
        }
    }



console.log(vetor)
console.log(vetor.length)
