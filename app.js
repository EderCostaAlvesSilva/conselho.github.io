//elementos
let msm = document.querySelector('.msg');
let body = document.querySelector('body');

url = `https://api.adviceslip.com/advice`
function pegarDados(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        insirirMensagem(data)
    })
}

pegarDados()

function insirirMensagem(data) {
    msm.innerHTML = `${data.slip.advice}`
}

body.addEventListener('load', insirirMensagem())
