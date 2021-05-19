function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('nasc')
    var res = window.document.getElementById('res')
    var idade = ano - Number(nasc.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nasc.value > ano || nasc.value == 0 || nasc.value < 0 || idade > 130) {
        window.alert('Você digitou um ano de nascimento inválido')
    }
    else {
        var sex = window.document.getElementsByName('radsex')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'bebemenino.png')
            }
            else if (idade > 12 && idade <= 21) {
                    img.setAttribute('src', 'homemjovem.png')
            }
            else if (idade > 21 && idade <= 60) {
                    img.setAttribute('src', 'homemadulto.png')
            }
            else if (idade > 60) {
                img.setAttribute('src', 'homemidoso.png')
            }
        }   
        else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'bebemenina.png')
            }
            else if (idade > 12 && idade <= 21) {
                    img.setAttribute('src', 'mulherjovem.png')
            }
            else if (idade > 21 && idade <= 60) {
                    img.setAttribute('src', 'mulheradulta.png')
            }
            else if (idade > 60) {
                img.setAttribute('src', 'mulheridosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} de ${idade} anos`
        imgs.appendChild(img)
        res.style.margin('center')    
    }
}


