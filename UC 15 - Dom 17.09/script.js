function mudartexto() {
    document.getElementById
    ("titulo").textContent = "Você clicou no botão!";
}

function mudarcor() {
    document.getElementById("mensagem").style.color =
    "blue";
}  

function mostrarNome(){
let nome = document.getElementById("nome").value;
nome = document.getElementById("resultado").textContent = "Olá, " + nome + "!";

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

