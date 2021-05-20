let num = document.getElementById('num')
let n = Number(num.value)
let lista = document.getElementById('adc')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true

    }
    else {
        return false
    }
}
function inLista (n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true 
    }
    else {
        return false
    }
}
function adicionar() {
    if (isNumero (num.value) && !inLista(num.value, valores)) {
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        valores.push(Number(num.value))
        num.value = ''
        num.focus()  
        res.innerHTML = ''                   
    }
    else {
        window.alert('Número inválido ou já listado')
    }
}


function analisar() {
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    if (valores.length == 0) {
        window.alert('Favor adicionar valores!')
    }
    else {
        for (let pos in valores) {
            soma += valores[pos]
            media = soma/valores.length
            if (valores[pos] > maior) 
                maior = valores[pos]
            
            else if (valores [pos] < menor) 
                menor = valores[pos]
            

            }
    /*  for (let i = 0; i <= valores.length; i++) {
            soma += valores[i]
            media = soma/valores.length
        } */
        }
        res.innerHTML - ''
        res.innerHTML += `<p>Ao todo temos ${valores.length} valores</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`


    }



