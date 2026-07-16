/* APP.JS - FYS BAKERY CONQUEST */
/* Inicialização global e gerenciamento de escuta de eventos do simulador */

document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGAR E ATUALIZAR STATUS DE HISTÓRICO
    const savedState = loadGameState();
    if (savedState) {
        gameState = savedState;
    }
    
    // Atualiza estatísticas do cabeçalho
    updateHeaderStats();
    
    // Atualiza o painel com as conquistas e rotas concluídas
    updateLevelGrid();

    // 2. CONFIGURAR ESCUTA DE EVENTOS DE CLIQUE
    
    // Iniciar jogo -> Vai para seleção de rota
    document.getElementById('btn-start-game').addEventListener('click', () => {
        showScreen('levels');
    });

    // Voltar para a tela inicial
    document.getElementById('btn-back-welcome').addEventListener('click', () => {
        showScreen('welcome');
    });

    // Vincula a ação de visitar padaria para os botões do grid
    document.querySelectorAll('.btn-play-level').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const levelId = parseInt(event.target.getAttribute('data-level'));
            startLevel(levelId);
        });
    });

    // Navega de volta para a seleção de rotas pós-resultado
    document.getElementById('btn-next-step').addEventListener('click', () => {
        showScreen('levels');
    });

    // Reseta completamente as conquistas e XP salvos
    document.getElementById('btn-restart').addEventListener('click', () => {
        if (confirm("Deseja resetar todo o seu progresso no simulador? Isso apagará suas medalhas e XP.")) {
            gameState = {
                xp: 0,
                unlockedBadges: [],
                currentLevel: null,
                currentStage: 0,
                mood: 80,
                closing: 0,
                levelsCompleted: []
            };
            // Limpa o localStorage
            saveGameState(gameState);
            
            // Re-renderiza o cabeçalho e as rotas
            updateHeaderStats();
            updateLevelGrid();
            
            // Direciona para o início
            showScreen('welcome');
        }
    });
});
