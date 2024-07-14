var idade = 14
console.log(`Você possui ${idade} anos`)
if (idade < 16){
    console.log('Proibido votar')
}
else if (idade < 18 || idade > 60){
    console.log('Voto Opcional')
    }
else{
    console.log('Voto Obrigatório')
}