document.getElementById('button').addEventListener("click", iniciarContagem);

function iniciarContagem() {
    let ini = document.getElementById('numInicial')
    let fim = document.getElementById('numFinal')
    let pulo = document.getElementById('numPulo')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        alert("[ERRO] Dados em falta!");
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
        if(p <= 0) {
            alert("[ERRO] Pulo inválido! Considerando o pulo como 1.");
            p = 1;
        }
        if(i < f) {
            // Realização da contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            // Realização da contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
};