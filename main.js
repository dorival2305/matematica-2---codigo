const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Lógica de alternância das abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Lógica do contador
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-12-31T00:00:00"); // Ajustado para uma data futura
let tempoAtual = new Date();

// Corrigido: tempoObjetivo1 (com a letra O maiúscula)
contadores[0].textContent = tempoObjetivo1 - tempoAtual;