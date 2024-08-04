let amigo = {nome:'Djalma',idade:31,peso:66.5,
    engordar(p){
        console.log('Engordou!')
        this.peso += p
}}

console.log(`O nome do usuário é ${amigo.nome}, ${amigo.idade} anos, pesando ${amigo.peso}`)
amigo.engordar(3.5) // Double ou Float usa ponto '.' Não vírgula ','
console.log(`Agora o usuário pesa ${amigo.peso}Kg`)