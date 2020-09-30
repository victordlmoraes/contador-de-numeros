document.getElementById('button').addEventListener("click", iniciarContagem);

function iniciarContagem() {
    let ini = document.getElementById('numInicial')
    let fim = document.getElementById('numFinal')
    let pulo = document.getElementById('numPulo')
    let res = document.getElementById('res')

    if(numInicial.length == 0 || numFinal.length == 0 || numPulo == 0) {
        alert("[ERRO] Dados em falta!")
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
        res.innerHTML = 'Contando... '
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
}