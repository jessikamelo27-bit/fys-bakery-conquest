/* UI.JS - FYS BAKERY CONQUEST */
/* Controla a renderização visual da interface, atualizações de DOM e animações */

// 1. MAPEAMENTO DE SELETORES DO DOM
const uiElements = {
    // Telas do App
    screens: {
        welcome: document.getElementById('screen-welcome'),
        levels: document.getElementById('screen-levels'),
        gameplay: document.getElementById('screen-gameplay'),
        result: document.getElementById('screen-result')
    },
    // Estatísticas Globais
    xpDisplay: document.getElementById('xp-display'),
    badgesCount: document.getElementById('badges-count'),
    
    // Níveis e Grid
    levelCards: document.querySelectorAll('.level-card'),
    
    // Gameplay (Cliente)
    gameClientAvatar: document.getElementById('game-client-avatar'),
    gameClientName: document.getElementById('game-client-name'),
    gameClientType: document.getElementById('game-client-type'),
    copilotTip: document.getElementById('copilot-tip'),
    
    // Gameplay (Métricas)
    moodVal: document.getElementById('mood-val'),
    moodBar: document.getElementById('mood-bar'),
    closingVal: document.getElementById('closing-val'),
    closingBar: document.getElementById('closing-bar'),
    
    // Gameplay (Diálogos e Escolhas)
    chatHistory: document.getElementById('chat-history'),
    choicesContainer: document.getElementById('choices-container'),
    
    // Resultados
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    resultXp: document.getElementById('result-xp'),
    resultPerformance: document.getElementById('result-performance'),
    badgeUnlockedSection: document.getElementById('badge-unlocked-section'),
    unlockedBadgeName: document.getElementById('unlocked-badge-name'),
    unlockedBadgeDesc: document.getElementById('unlocked-badge-desc'),
    btnNextStep: document.getElementById('btn-next-step')
};

// 2. FUNÇÕES DE NAVEGAÇÃO DE TELA
function showScreen(screenId) {
    Object.values(uiElements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    uiElements.screens[screenId].classList.add('active');
    
    // Adiciona animação de Fade In ao carregar a tela
    uiElements.screens[screenId].classList.add('anim-fade-in');
    setTimeout(() => {
        uiElements.screens[screenId].classList.remove('anim-fade-in');
    }, 450);
}

// 3. ATUALIZAÇÕES DOS STATUS E GRID
function updateHeaderStats() {
    uiElements.xpDisplay.querySelector('.value').innerText = `${gameState.xp} XP`;
    uiElements.badgesCount.querySelector('.value').innerText = `${gameState.unlockedBadges.length} Conquistas`;
}

function updateLevelGrid() {
    uiElements.levelCards.forEach(card => {
        const levelId = parseInt(card.getAttribute('data-level'));
        if (!levelId) return;

        const playBtn = card.querySelector('.btn-play-level');

        // Estiliza de acordo com o estado de conclusão
        if (gameState.levelsCompleted.includes(levelId)) {
            card.style.borderColor = 'var(--heineken-neon)';
            if(playBtn) {
                playBtn.innerText = "Refazer Rota 🔄";
                playBtn.classList.remove('btn-secondary');
                playBtn.classList.add('btn-outline');
            }
        } else {
            card.style.borderColor = 'var(--bg-card-border)';
            if(playBtn) {
                playBtn.innerText = "Visitar Padaria";
                playBtn.classList.remove('btn-outline');
                playBtn.classList.add('btn-secondary');
            }
        }
    });

    // Desbloqueia dinamicamente o Nível 3 caso 1 e 2 estejam completos
    const level3Card = document.querySelector('.level-card.locked');
    if (level3Card && gameState.levelsCompleted.includes(1) && gameState.levelsCompleted.includes(2)) {
        level3Card.classList.remove('locked');
        level3Card.querySelector('.lock-indicator').innerHTML = "<span style='color:var(--heineken-neon)'>🎉 Desbloqueado!</span>";
        
        if (!level3Card.querySelector('.btn-play-level')) {
            const btn = document.createElement('button');
            btn.className = "btn btn-secondary btn-play-level";
            btn.setAttribute('data-level', '3');
            btn.innerText = "Visitar Rede";
            btn.addEventListener('click', () => startLevel(3));
            level3Card.appendChild(btn);
        }
    }
}

// 4. ATUALIZAÇÕES DA ÁREA DE DIÁLOGO (GAMEPLAY)
function setupClientGameplayUI(level) {
    uiElements.gameClientName.innerText = level.clientName;
    uiElements.gameClientType.innerText = level.clientType;
    uiElements.gameClientAvatar.innerText = level.avatar;
    uiElements.chatHistory.innerHTML = "";
}

function updateGameplayBars() {
    uiElements.moodVal.innerText = `${gameState.mood}%`;
    uiElements.moodBar.style.width = `${gameState.mood}%`;

    uiElements.closingVal.innerText = `${gameState.closing}%`;
    uiElements.closingBar.style.width = `${gameState.closing}%`;

    // Altera cor da barra de humor dependendo do nível crítico
    if (gameState.mood < 30) {
        uiElements.moodBar.style.background = '#ef4444';
    } else if (gameState.mood < 60) {
        uiElements.moodBar.style.background = '#f59e0b';
    } else {
        uiElements.moodBar.style.background = 'linear-gradient(to right, #f59e0b, #10b981)';
    }
}

function renderStageUI(clientName, stageData) {
    // Exibe a dica no copiloto lateral
    uiElements.copilotTip.innerText = stageData.copilotTip;

    // Renderiza balão do cliente
    addChatMessage(clientName, stageData.clientText, 'client');

    // Limpa e reconstrói as opções de resposta
    uiElements.choicesContainer.innerHTML = "";
    stageData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "choice-btn";
        btn.innerText = opt.text;
        btn.addEventListener('click', () => handleChoice(opt));
        uiElements.choicesContainer.appendChild(btn);
    });
}

function clearChoicesUI() {
    uiElements.choicesContainer.innerHTML = "";
}

// Injeta balões de chat no histórico
function addChatMessage(sender, text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg msg-${type} anim-pop-in`;
    
    if (type !== 'system') {
        msgDiv.innerHTML = `<strong>${sender}:</strong> <br>${text}`;
    } else {
        msgDiv.innerHTML = `💡 <strong>${sender}:</strong> ${text}`;
    }

    uiElements.chatHistory.appendChild(msgDiv);
    
    // Rola para a mensagem mais recente
    uiElements.chatHistory.scrollTop = uiElements.chatHistory.scrollHeight;
}

// 5. TELA DE RESULTADOS (SUCESSO / FALHA)
function showResultScreen(isVictory, level, message, newBadgeUnlocked = false) {
    if (isVictory) {
        uiElements.resultIcon.innerText = "🎉";
        uiElements.resultTitle.innerText = "Venda Concluída!";
        uiElements.resultTitle.style.color = "var(--heineken-neon)";
        uiElements.resultMessage.innerText = message;
        uiElements.resultXp.innerText = `+${level.xpReward} XP`;
        
        if (gameState.closing >= 90) {
            uiElements.resultPerformance.innerText = "Performance Imbatível! 🌟";
            uiElements.resultPerformance.style.color = "var(--fys-acid)";
        } else {
            uiElements.resultPerformance.innerText = "Bom Trabalho! 👍";
            uiElements.resultPerformance.style.color = "var(--fys-orange)";
        }

        // Mostra o distintivo desbloqueado se aplicável
        if (newBadgeUnlocked && level.successBadge) {
            uiElements.badgeUnlockedSection.style.display = 'flex';
            uiElements.unlockedBadgeName.innerText = level.successBadge.name;
            uiElements.unlockedBadgeDesc.innerText = level.successBadge.desc;
            uiElements.badgeUnlockedSection.querySelector('.badge-icon').innerText = level.successBadge.icon;
        } else {
            uiElements.badgeUnlockedSection.style.display = 'none';
        }
        
        uiElements.btnNextStep.innerText = "Ver Outras Rotas";
    } else {
        uiElements.resultIcon.innerText = "😢";
        uiElements.resultTitle.innerText = "Negociação Mal Sucedida";
        uiElements.resultTitle.style.color = "#ef4444";
        uiElements.resultMessage.innerText = message;
        uiElements.resultXp.innerText = "+0 XP";
        uiElements.resultPerformance.innerText = "Tente Novamente!";
        uiElements.resultPerformance.style.color = "#9ca3af";
        uiElements.badgeUnlockedSection.style.display = 'none';
        
        uiElements.btnNextStep.innerText = "Refazer Nível";
    }

    showScreen('result');
}
