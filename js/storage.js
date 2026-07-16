/* STORAGE.JS - FYS BAKERY CONQUEST */
/* Gerencia a persistência de dados do jogador localmente (localStorage) */

const STORAGE_KEY = 'fys_bakery_conquest_state';

// Salva o estado atual do jogo no localStorage
function saveGameState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Carrega o progresso do jogador ou retorna o estado inicial padrão
function loadGameState() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            return JSON.parse(savedData);
        } catch (error) {
            console.error("Erro ao analisar dados salvos no localStorage:", error);
        }
    }
    // Estado inicial padrão do jogador
    return {
        xp: 0,
        unlockedBadges: [],
        currentLevel: null,
        currentStage: 0,
        mood: 80,
        closing: 0,
        levelsCompleted: []
    };
}
