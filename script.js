let novaLindaDetabela = document.createElement("tr")
let trVolta = document.getElementsByClassName('trVolta')
let tabela = document.getElementsByClassName("tabela")[0]

let tdVolta = document.getElementsByClassName('tdVolta')[0]
let tdTempoVolta = document.getElementsByClassName('tdTempoVolta')[0]
let tdTempoGeral = document.getElementsByClassName('tdTempoGeral')[0]


let iniciar = document.getElementById("iniciar");
let voltar = document.getElementById("voltar");
let voltas = [];
let tempoVoltas = [];

let tempoReal = document.getElementById("tempoReal");
let tempoVolta = document.getElementById("tempoVolta");

let min = document.getElementById("min");
let seg = document.getElementById("seg");
let miliseg = document.getElementById("miliSeg");
let miliSegundo = 0;
let segundo = 0;
let minuto = 0;
let timer;

let timerVolta;
let miliSegVolta = 0;
let segundoVolta = 0;
let minutoVolta = 0;




iniciar.addEventListener("click", startCronometro);
voltar.addEventListener("click", startVolta);

function startCronometro() {
    if (iniciar.value == "Iniciar") {
        iniciar.style.backgroundColor = "#e6324b"
        voltar.style.opacity = "1"
        iniciar.value = "Parar"
        timer = setInterval(iniciarContagem, 10)
        timerVolta = setInterval(marcaVolta, 10)


    } else if (iniciar.value == "Retornar") {
        iniciar.style.backgroundColor = "#e6324b"
        iniciar.value = "Parar"
        voltar.value = "Volta"
        timer = setInterval(iniciarContagem, 10)
        timerVolta = setInterval(marcaVolta, 10)

    } else if (iniciar.value == "Parar") {
        iniciar.style.backgroundColor = "rgb(46, 38, 92, 0.7)"
        iniciar.value = "Retornar"
        voltar.value = "Restaurar"
        paraContagem()
        paraContagemVolta()
    }
}

function startVolta() {
    if (voltar.value == "Restaurar") {
        voltas = [];
        miliSegundo = 0;
        segundo = 0;
        minuto = 0;
        miliseg.innerText = `00`;
        seg.innerText = `00`;
        min.innerText = `00`;
        voltar.style.opacity = "0.2"
        iniciar.value = "Iniciar"
        voltar.value = "Volta"
        zeraVolta()
        tabela.style.visibility = "collapse"
        tempoVolta.style.display = "none"
        tdTempoGeral.innerText = ``
        tdTempoVolta.innerText = ``
        tdVolta.innerText = ``

    } else if (iniciar.value != "Iniciar") {
        voltas.push(tempoReal.innerText)
        tempoVoltas.push(tempoVolta.innerText)

        paraContagemVolta()
        zeraVolta()
        timerVolta = setInterval(marcaVolta, 10)
        tempoVolta.style.display = "flex"
        tabela.style.visibility = "visible"
        listaVolta()
    }
}

function iniciarContagem() {
    miliSegundo += 1
    if (miliSegundo == 100) {
        miliSegundo = 0
        segundo++
    }
    if (segundo == 60) {
        segundo = 0
        minuto++
    }
    miliseg.innerText = retornaZero(miliSegundo)
    seg.innerText = retornaZero(segundo)
    min.innerText = retornaZero(minuto)
}

function retornaZero(elemento) {
    return elemento >= 10 ? elemento : `0${elemento}`
}


function paraContagem() {
    clearInterval(timer)
}
function paraContagemVolta() {
    clearInterval(timerVolta)
}

function zeraVolta() {
    miliSegVolta = 0;
    segundoVolta = 0;
    minutoVolta = 0;
    tempoVolta.innerText = `${retornaZero(minutoVolta)}:${retornaZero(segundoVolta)}.${retornaZero(miliSegVolta)}`
}

function marcaVolta() {
    miliSegVolta += 1
    if (miliSegVolta == 100) {
        miliSegVolta = 0
        segundoVolta++
    }
    if (segundoVolta == 60) {
        segundoVolta = 0
        minutoVolta++
    }
    tempoVolta.innerText = `${retornaZero(minutoVolta)}:${retornaZero(segundoVolta)}.${retornaZero(miliSegVolta)}`
}

function listaVolta() {

    tdTempoGeral.innerText += `${voltas[voltas.length - 1]}\n`
    tdTempoVolta.innerText += `${tempoVoltas[tempoVoltas.length - 1]}\n`
    tdVolta.innerText += `${voltas.length}\n`
}