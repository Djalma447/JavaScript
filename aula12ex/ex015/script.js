function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number.parseInt(fano.value)
        var genero
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'crianca-m.png')
            }
            else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-m.png')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adulto-m.png')
            }
            else{
                //IDOSO
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'crianca-f.png')
            }
            else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-f.png')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adulto-f.png')
            }
            else{
                //IDOSO
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}