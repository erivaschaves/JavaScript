function contar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0|| fim.value.length == 0 || passo.value.length==0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Inválido! Considerando Passo 1')
            p=1
        }
        // Contagem Crescente
        if(i < f){
            for (var c = i; c<=f; c+=p){
                res.innerHTML += ` ${c} \u{1F449} ` 
            }
        // Contagem Decrescente   
        } else{
            for(var c = i ; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`

    }
    
    
}



/*inicio = 5
fim = 12
passo = 2
res = inicio
while(res<fim){
    console.log(res)
    res = res + passo
}*/