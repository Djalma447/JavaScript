let num = [2, 8, 4, 9, 7, 1] // Iniciando um vetor já com valores

console.log(`O Vetor é esse: ${num}`) // Exibição de vetor
console.log(num) // Exibição de vetor

num[6] = 3 // Acrescentando um novo valor ao vetor
console.log(`Vetor com um novo valor: ${num}`)
console.log(num)

num.push(5) // Acrescentando outro valor no final sem mencionar a posição
console.log(`Vetor atualizado: ${num}`)
console.log(num)

console.log(`Número de elementos no Vetor: ${num.length}`) // Mostra o comprimento do Vetor, quantos elementos ele possui
console.log(`Primeiro elemento do Vetor: ${num[0]}`)
console.log(`Vetor em ordem crescente: ${num.sort()}`) // Exibindo o Vetor em ordem Crescente
// AVISO: O sort() muda a ordem dos elementos de forma permanente!!
num.push(0)
console.log(num)

console.log(`Criando um Loop para todo o Vetor:`)
for (var i = 0; i < num.length; i++){
    console.log(num[i])
}