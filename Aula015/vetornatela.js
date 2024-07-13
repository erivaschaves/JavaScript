var num = [8 , 1 , 7 , 4 , 2, 9]

console.log(num)

/*for (var pos = 0; pos<num.length; pos++){
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)
}*/

for(var pos in num){
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)

}