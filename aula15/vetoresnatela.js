let valores = [2, 9, 7, 6, 4, 3]

console.log(`Exibindo valores do Vetor:`)
for (let i = 0; i < valores.length; i++){
    console.log(`A Posição ${i} tem o valor ${valores[i]}`)
}

console.log(`--------------------------`)
console.log(`Usando o For`)
for (let pos in valores){
    console.log(`A Posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(7))
console.log(valores.indexOf(1))
