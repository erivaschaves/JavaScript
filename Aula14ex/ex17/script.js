function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById ('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')

    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
}