// Variáveis do Estado do Jogo
let sustentabilidade = 50; // Começa com 50 de equilíbrio
let producao = 50;

// Função chamada quando o jogador toma uma decisão
function tomarDecisao(acao) {
    if (acao === 'aduboOrganico') {
        sustentabilidade += 10;
        producao += 5;
        console.log("Boa escolha! O solo agradece.");
    } else if (acao === 'agrotoxico') {
        sustentabilidade -= 15;
        producao += 10;
        console.log("Cuidado! A produção subiu, mas o meio ambiente sofreu.");
    }
    
    atualizarInterface();
    verificarFimDeJogo();
}

// Atualiza o HTML com os valores atuais
function atualizarInterface() {
    const status = document.getElementById('status-jogo');
    status.innerHTML = `Sustentabilidade: ${sustentabilidade} | Produção: ${producao}`;
}

// Verifica se o jogador venceu ou perdeu
function verificarFimDeJogo() {
    if (sustentabilidade <= 0) {
        alert("Game Over! Sua fazenda não é mais sustentável.");
    } else if (sustentabilidade >= 100) {
        alert("Parabéns! Você alcançou o equilíbrio perfeito!");
    }
}

// Inicialização
console.log("Jogo Iniciado: Gerencie sua fazenda com sabedoria!");