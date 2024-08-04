let ntxt = document.querySelector('input#ntxt')
let nlist = document.querySelector('select#numlist')
let res = document.querySelector('div#res')
let list = []

function adicionar(){
    if (ntxt.value.length == 0){
        window.alert('Valor inválido ou já encontrado na lista')
    }
    else{
        let n = Number(ntxt.value)
        if (n < 1 || n > 100){
            window.alert('Valor inválido ou já encontrado na lista')
        }
        else{
            if (list.indexOf(n) != -1){
                window.alert('Valor inválido ou já encontrado na lista')
            }
            else{
                list.push(n)
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado.`
                nlist.appendChild(item)
                res.innerHTML = ''
            }
        }
    }
    ntxt.value = ''
    ntxt.focus()
}

function finalizar(){
    if (list.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        res.innerHTML = ''
        total = list.length
        maior = list[0]
        menor = list[0]
        soma = 0
        media = 0
        for (let i in list){
            soma += list[i]
            if (list[i] > maior){
                maior = list[i]
            }
            if (list[i] < menor){
                menor = list[i]
            }
        }
        media = soma / total
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }
}