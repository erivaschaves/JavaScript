var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O Valor da primeira posição do vetor é ${num[0]}`)

var pos = num.indexOf(10)

if(pos == -1){
    console.log(`O Valor não existe!!`)
}else{
    console.log(`O Valor 8 está na posição ${pos}`)
}
