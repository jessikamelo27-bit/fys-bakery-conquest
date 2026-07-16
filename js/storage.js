/* STORAGE.JS - FYS BAKERY CONQUEST */
/* Gerencia a persistência de dados de múltiplos perfis de jogadores no localStorage */

const STORAGE_PROFILES_KEY = 'fys_bakery_conquest_profiles';
const STORAGE_ACTIVE_KEY = 'fys_bakery_conquest_active_profile';

// Retorna uma lista com todos os perfis salvos ou cria o perfil padrão
function getAllProfiles() {
    const data = localStorage.getItem(STORAGE_PROFILES_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error("Erro ao analisar perfis salvos:", e);
        }
    }
    
    // Perfil inicial padrão para evitar que o jogo comece sem perfil
    const defaultProfile = {
        name: "Vendedor FYS",
        xp: 0,
        unlockedBadges: [],
        levelsCompleted: []
    };
    const initialList = [defaultProfile];
    localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(initialList));
    localStorage.setItem(STORAGE_ACTIVE_KEY, defaultProfile.name);
    return initialList;
}

// Retorna o nome do perfil ativo atualmente
function getActiveProfileName() {
    let name = localStorage.getItem(STORAGE_ACTIVE_KEY);
    if (!name) {
        // Se não houver perfil ativo, define o primeiro da lista
        const profiles = getAllProfiles();
        name = profiles[0].name;
        localStorage.setItem(STORAGE_ACTIVE_KEY, name);
    }
    return name;
}

// Define o perfil ativo pelo nome
function setActiveProfileName(name) {
    localStorage.setItem(STORAGE_ACTIVE_KEY, name);
}

// Cria um novo perfil de jogador se o nome for válido e único
function createPlayerProfile(name) {
    const cleanName = name.trim();
    if (!cleanName) return null;

    const profiles = getAllProfiles();
    
    // Verifica se já existe um perfil com esse nome
    const exists = profiles.some(p => p.name.toLowerCase() === cleanName.toLowerCase());
    if (exists) {
        alert("Já existe um jogador com este nome!");
        return null;
    }

    const newProfile = {
        name: cleanName,
        xp: 0,
        unlockedBadges: [],
        levelsCompleted: []
    };

    profiles.push(newProfile);
    localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(profiles));
    localStorage.setItem(STORAGE_ACTIVE_KEY, cleanName);
    return newProfile;
}

// Salva o estado atual do jogo no perfil que está ativo
function saveGameState(state) {
    const activeName = getActiveProfileName();
    const profiles = getAllProfiles();
    
    const index = profiles.findIndex(p => p.name === activeName);
    if (index !== -1) {
        profiles[index].xp = state.xp;
        profiles[index].unlockedBadges = state.unlockedBadges;
        profiles[index].levelsCompleted = state.levelsCompleted;
        localStorage.setItem(STORAGE_PROFILES_KEY, JSON.stringify(profiles));
    }
}

// Carrega o progresso do perfil que está ativo atualmente
function loadGameState() {
    const activeName = getActiveProfileName();
    const profiles = getAllProfiles();
    
    const profile = profiles.find(p => p.name === activeName);
    
    if (profile) {
        return {
            xp: profile.xp,
            unlockedBadges: profile.unlockedBadges,
            currentLevel: null,
            currentStage: 0,
            mood: 80,
            closing: 0,
            levelsCompleted: profile.levelsCompleted
        };
    }
    
    // Retorno de fallback
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
