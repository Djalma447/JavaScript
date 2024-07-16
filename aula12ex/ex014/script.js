function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hoje = new Date()
    var hora = hoje.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#fccd61'
    }
    else if (hora < 18){
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#f2c5a6'
    }
    else{
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#063674'
    }
}