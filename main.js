// const dataDeVolta = new Date("May 01 2024 00:00:00")
const dataDeVolta = new Date("April 02 2024 00:00:00")
const timeStampDaVolta = dataDeVolta.getTime()
const audio = document.getElementById("myAudio")
audio.pause()

const contaAsHoras = setInterval(function()
{
    const agora = new Date()
    const timeStampAgora = agora.getTime()
    const tempoQueFalta = timeStampDaVolta - timeStampAgora

    const diasAteAVolta = Math.floor(tempoQueFalta / (1000 * 60 * 60 * 24))
    const horasAteAVolta = Math.floor(tempoQueFalta % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutosAteAVolta = Math.floor(tempoQueFalta % (1000 * 60 * 60) / (1000 * 60))
    const segundosAteAVolta = Math.floor(tempoQueFalta % (1000 * 60) / 1000)

    document.getElementById('time').innerHTML = `${diasAteAVolta}<span class="white-color">d</span> ${horasAteAVolta}<span class="white-color">h</span> ${minutosAteAVolta}<span class="white-color">m</span> ${segundosAteAVolta}<span class="white-color">s</span>`

    if(tempoQueFalta <= 0)
    {
        audio.play()
        document.getElementById('time').innerHTML =""
        document.getElementById('title').innerHTML = "A Hérica retornou ao Brasil!"
        document.getElementById("eua").style.display = "none"
        document.getElementById("brazil").style.display = "block"
        confetti.start()
    setTimeout(function(){confetti.stop();},20000)
    }
}, 1000)