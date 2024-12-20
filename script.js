// Definindo os símbolos da roleta
const symbols = ["🍊", "🔔", "🍎", "💰", "🍒", "🍇"];
// Definindo os multiplicadores para cada símbolo
const multipliers = {
    "💰": 10, // Multiplicador para "dinheiro"
    "🍎": 5,  // Multiplicador para "maçã"
    "🍒": 3,  // Multiplicador para "cereja"
    "default": 2 // Multiplicador padrão para outras combinações
};

let winModeActive = false; // Variável para controlar o modo "ganhar sempre"

// Função para alternar o estado do "Modo Ganhar Sempre"
function toggleWinMode() {
    winModeActive = !winModeActive;
    const winModeButton = document.getElementById("winModeButton");
    winModeButton.textContent = winModeActive ? "💲 ON" : "💲 OFF";
    winModeButton.classList.toggle("active", winModeActive);
}

// Função para limpar a animação e efeitos de combinações vencedoras anteriores
function clearWinningEffects() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.classList.remove('blink-animation');
        reel.classList.remove('correct'); // Remove a classe 'correct' para reverter a cor
    });
}

// Função principal do jogo
function spin() {
    clearWinningEffects(); // Limpa qualquer efeito de vitória anterior
    const result = document.getElementById("result");
    const betAmount = 10; // Valor de aposta fixo
    let multiplier = 1; // Multiplicador inicial (sem ganho)
    let winningCombination = []; // Para armazenar a posição das frutas vencedoras

    // Armazena todos os elementos de roleta em uma matriz 3x3
    const reels = [
        [document.getElementById("reel1-1"), document.getElementById("reel1-2"), document.getElementById("reel1-3")],
        [document.getElementById("reel2-1"), document.getElementById("reel2-2"), document.getElementById("reel2-3")],
        [document.getElementById("reel3-1"), document.getElementById("reel3-2"), document.getElementById("reel3-3")]
    ];

    // Gera símbolos aleatórios para cada roleta na matriz
    let selectedSymbols = []; // Armazena os símbolos selecionados para cada posição
    for (let i = 0; i < 3; i++) {
        selectedSymbols[i] = []; // Inicia a linha
        for (let j = 0; j < 3; j++) {
            // Pega o elemento do símbolo dentro de cada roleta
            const symbolElement = reels[i][j].querySelector('.symbol');
            symbolElement.classList.add("spin-animation");

            // Gera um novo símbolo aleatório e o aplica após a animação
            setTimeout(() => {
                symbolElement.classList.remove("spin-animation");
                const randIndex = Math.floor(Math.random() * symbols.length);
                const symbol = symbols[randIndex];
                symbolElement.textContent = symbol;
                selectedSymbols[i].push(symbol); // Salva o símbolo para verificação posterior
            }, 500);
        }
    }

    setTimeout(() => {
        // Verifica combinações possíveis na matriz 3x3 (linhas, colunas e diagonais)
        // Verifica linhas
        for (let i = 0; i < 3; i++) {
            if (selectedSymbols[i][0] === selectedSymbols[i][1] && selectedSymbols[i][1] === selectedSymbols[i][2]) {
                multiplier = Math.max(multiplier, multipliers[selectedSymbols[i][0]] || multipliers["default"]);
                winningCombination.push([i, 0], [i, 1], [i, 2]);
                winningCombination.forEach(([x, y]) => {
                    const symbolElement = reels[x][y].querySelector('.symbol');
                    reels[x][y].classList.add('correct'); // Adiciona a classe 'correct' para mudar a cor
                });
            }
        }

        // Verifica colunas
        for (let i = 0; i < 3; i++) {
            if (selectedSymbols[0][i] === selectedSymbols[1][i] && selectedSymbols[1][i] === selectedSymbols[2][i]) {
                multiplier = Math.max(multiplier, multipliers[selectedSymbols[0][i]] || multipliers["default"]);
                winningCombination.push([0, i], [1, i], [2, i]);
                winningCombination.forEach(([x, y]) => {
                    const symbolElement = reels[x][y].querySelector('.symbol');
                    reels[x][y].classList.add('correct'); // Adiciona a classe 'correct' para mudar a cor
                });
            }
        }

        // Exibe o resultado
        if (winningCombination.length > 0) {
            result.textContent = `Você ganhou! Multiplicador: x${multiplier}`;
        } else {
            result.textContent = "Você perdeu! Tente novamente.";
        }
    }, 500);
}
