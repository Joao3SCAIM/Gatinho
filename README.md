Jogo do gatinho - Projeto de Slot Machine

Descrição do Projeto

O Jogo do Tigrinho é uma implementação simples de uma slot machine (máquina caça-níqueis) com elementos gráficos e interativos. O jogo apresenta uma roleta de 3x3 que contém frutas e símbolos variados. O jogador pode interagir com o jogo, clicando em um botão para girar a roleta. Existem multiplicadores para diferentes símbolos, e o jogo possui um modo adicional chamado "Sempre Ganhar", que garante uma combinação vencedora a cada rodada.

Funcionalidades do Jogo
Jogo básico de slot machine com roleta 3x3.
Animação de roleta que faz os símbolos se moverem de forma vertical durante o giro.
Detecção de combinações vencedoras em linhas, colunas e diagonais.
Modo "Sempre Ganhar", que força uma linha vencedora a cada giro.
Exibição do prêmio com base nos multiplicadores dos símbolos.
2. Tecnologias Utilizadas
O jogo foi desenvolvido utilizando as seguintes tecnologias:

HTML: Para a estrutura da página e definição da interface de usuário.
CSS: Para o design da página, animações e efeitos visuais (incluindo cores de destaque para a vitória).
JavaScript: Para a lógica de funcionamento da roleta, animações e manipulação da interação do usuário.

1. index.html
Contém a estrutura da página, incluindo os elementos visuais da roleta, o botão de giro e o botão de "Sempre Ganhar". Este arquivo também referencia os arquivos CSS e JavaScript.

2. style.css
Define os estilos visuais da página, como cores, tamanhos, bordas e animações. Inclui animações de transição para o movimento dos símbolos e para a mudança de cor dos quadrados vencedores.

3. script.js
Contém a lógica do jogo, incluindo a rotação dos símbolos, verificação de combinações vencedoras, cálculos de multiplicadores e a funcionalidade do "Modo Ganhar Sempre".

4. Funcionalidade do Jogo
4.1. Geração Aleatória de Símbolos
A roleta consiste em três colunas e três linhas, com cada célula da roleta exibindo um símbolo aleatório, que pode ser uma das seguintes opções:

🍊 (Laranja)
🔔 (Sino)
🍎 (Maçã)
💰 (Dinheiro)
🍒 (Cereja)
🍇 (Uva)
4.2. Combinações Vencedoras
A cada giro, o jogo verifica as combinações vencedoras nas seguintes direções:

Linhas: As frutas nas três colunas da mesma linha.
Colunas: As frutas nas três linhas da mesma coluna.
Diagonais: As frutas nas diagonais principais da roleta.
Se houver uma combinação vencedora, o prêmio é calculado com base no multiplicador associado ao símbolo que foi acertado.

4.3. Modo "Sempre Ganhar"
No modo "Sempre Ganhar", o botão "💲 ON" é ativado. Quando este modo está ativo, uma linha específica (exemplo, a linha do meio) sempre será forçada a ter frutas iguais, garantindo uma vitória. As frutas vencedoras dessa linha são coloridas com um fundo azul claro.

5. Funcionalidade dos Botões
5.1. Botão "Girar"
O botão "Girar" aciona a roleta, girando os símbolos aleatoriamente. Após a rotação, o sistema verifica as combinações vencedoras e exibe o prêmio.

5.2. Botão "Sempre Ganhar"
O botão "💲" alterna o modo "Sempre Ganhar". Quando ativado, ele força uma linha vencedora a cada giro. Caso desativado, o jogo funciona de forma tradicional, com símbolos aleatórios.

6. Animações
6.1. Animação de Giro
Quando o botão "Girar" é pressionado, os símbolos dentro dos quadrados da roleta são animados para simular o movimento para baixo (como se a roleta estivesse girando). A animação faz os símbolos deslizar para baixo e, ao final do movimento, eles são substituídos pelos novos símbolos.

6.2. Animação de Vitória
Quando uma combinação vencedora é detectada, os quadrados correspondentes às frutas vencedoras recebem uma animação de mudança de cor, passando para um fundo azul claro.

7. Como Usar
Passo 1: Acessar o Jogo
Abra o arquivo index.html em um navegador web de sua preferência para iniciar o jogo.

Passo 2: Girar a Roleta
Clique no botão "Girar" para acionar o jogo. Os símbolos começarão a se mover para baixo e, em seguida, serão substituídos por novos símbolos aleatórios.

Passo 3: Verificar as Combinações
Após o giro, o sistema verifica se há alguma combinação vencedora nas linhas, colunas ou diagonais. Caso haja, o prêmio é exibido na tela.

Passo 4: Ativar o "Modo Sempre Ganhar"
Clique no botão "💲" para ativar o Modo Ganhar Sempre. Quando esse modo estiver ativado, uma linha sempre será forçada a ter frutas iguais, garantindo uma vitória.

8. Possíveis Melhorias
Este projeto pode ser expandido com várias funcionalidades adicionais, como:

Mais Símbolos: Adicionar mais frutas ou outros símbolos especiais com diferentes multiplicadores.
Som: Incluir efeitos sonoros para o giro da roleta e para as vitórias.
Tela de Regras: Criar uma tela de regras e instruções para explicar como o jogo funciona.
Personalização de Apostas: Permitir que o jogador defina o valor da aposta.
9. Conclusão
O Jogo do Tigrinho é uma implementação divertida de uma máquina caça-níqueis com um toque de interatividade e animação. Ele proporciona uma experiência simples e agradável para quem deseja experimentar a emoção de um jogo de cassino com um estilo visual amigável e fácil de usar.
