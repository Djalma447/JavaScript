var agora = new Date() // Adquire a Data e Horário em Tempo Real
var hora = agora.getHours() // Adquire a Hora exata em Tempo Real da Variável acima
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6){
    console.log('Boa madrugada!')
}
else if (hora < 12){
    console.log('Bom dia!')
}
else if(hora < 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}