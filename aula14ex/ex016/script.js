function contar(){
    var iniciotxt = document.getElementById('iniciotxt')
    var fimtxt = document.getElementById('fimtxt')
    var passotxt = document.getElementById('passotxt')
    var res = document.getElementById('res')

    if (iniciotxt.value == '' || fimtxt.value == '' || passotxt.value == ''){
        res.innerHTML = `Impossível contar!`
    }
    else{
        res.innerHTML = `<p>Contando:</p>`
        var i = Number(iniciotxt.value)
        var f = Number(fimtxt.value)
        var p = Number(passotxt.value)
        if (p <= 0){
            window.alert('VALOR INVÁLIDO! CONSIDERANDO O PASSO 1')
            p = 1
        }
        if (i > f){
            for (i; i >= f; i -= p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        else{
            for (i; i <= f; i += p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}