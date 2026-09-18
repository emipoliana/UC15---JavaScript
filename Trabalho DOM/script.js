function cidade(){
let cidade = document.getElementById("cidade").value;
document.getElementById("mensagem").textContent=
        "Você escolheu viajar para " + cidade + "!";
}

function qlCidade() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "25px";
}


} 

let contador = 0;

function aumentar() {
contador++;
documen.getElementById("numero").textContent = contador;
}

function diminuir() {
contador--;
documen.getElementById("numero").textContent = contador;
}
