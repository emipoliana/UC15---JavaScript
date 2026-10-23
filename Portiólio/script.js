const botaoMenu = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

// Menu hambúrguer
botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
});

// Fecha o menu depois de clicar em um link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

// Saudação dinâmica
const hora = new Date().getHours();
const textoSaudacao = document.querySelector("#saudacao");

if (hora >= 5 && hora < 12) {
  textoSaudacao.textContent = "Bom dia!";
} else if (hora >= 12 && hora < 18) {
  textoSaudacao.textContent = "Boa tarde!";
} else {
  textoSaudacao.textContent = "Boa noite!";
}

// Modo claro e escuro
const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("escuro");

  botaoTema.textContent = escuro ? "☀" : "☾";
  botaoTema.setAttribute(
    "aria-label",
    escuro ? "Ativar modo claro" : "Ativar modo escuro"
  );
  botaoTema.setAttribute("aria-pressed", String(escuro));
});

// Ano automático
document.querySelector("#ano").textContent = new Date().getFullYear();

// Validação do formulário
const formulario = document.querySelector("#formulario");
const feedback = document.querySelector("#feedback");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formulario.checkValidity()) {
    formulario.reportValidity();
    feedback.textContent = "Confira os campos antes de continuar.";
    feedback.style.color = "#b21e36";
    return;
  }

  feedback.textContent =
    "Mensagem validada! Este formulário é demonstrativo e não envia dados.";
  feedback.style.color = "#267343";

  formulario.reset();
});
