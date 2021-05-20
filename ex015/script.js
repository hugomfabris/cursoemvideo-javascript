function contar() {
    var n0 = document.getElementById('ini')
    var nf= document.getElementById('fim')
    var passo = document.getElementById('pas')
    var i = Number(n0.value)
    var f = Number(nf.value)
    var p = Number(passo.value)    
    var res = document.getElementById('res')
    if (i.lenght == 0 || f.lenght == 0 || p.lenght == 0) {
        window.alert = 'Entradas inválidas, favor digite novamente!'
    } 
    else {
        if (i < f) {

        //Contagem crescente

            for (var x = i; x <= f; x += p) {
                res.innerHTML += `${x} \u{1F449}` 
        }
    }
    else {

        //Contagem decrescente

            for (var x = i; x >= f; x -= p) {
                res.innerHTML += `${x} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}    


 


