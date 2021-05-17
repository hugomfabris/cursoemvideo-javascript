function carregar() { 
    var data = new Date()
    var hora = String(data.getHours())
    var min = String(data.getMinutes())
    if (min<10) {
        min = '0'+min
    }
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    msg.innerText= (`Agora são ${hora}:${min} horas`)
    if (hora < 12) {
      img.src = 'manha.png'
      document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background =  '#515154'
    }
}
