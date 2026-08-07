let nomeCliente = "Maria Clara Ramos do Nascimento";
let valorCompra = 67;
let clienteVip = false;

let percentualDesconto;
let valorDesconto;
let valorFinal;


if (clienteVip === true) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}


valorDesconto = valorCompra * (percentualDesconto / 100);

valorFinal = valorCompra - valorDesconto;

// Exibe os resultados
console.log("Nome: " + nomeCliente);
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));


if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}
