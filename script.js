let segundos = 0
let timer
let relogio = document.getElementById('relogio')
let btn_inicio = document.getElementById('iniciar-btn')

function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}


function inicio() {
    relogio.style.color = 'black'
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHoraSegundos(segundos)
    }, 1000);
    btn_inicio.setAttribute('disabled', 'true')
}

function pausar() {
    clearInterval(timer)
    relogio.style.color = 'red'
    btn_inicio.removeAttribute('disabled')
}

function zerar() {
    segundos = 0
    relogio.innerHTML = criaHoraSegundos(0)
}