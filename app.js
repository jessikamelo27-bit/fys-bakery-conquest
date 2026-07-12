// JAVASCRIPT PRINCIPAL - FYS BAKERY CONQUEST

// 1. BANCO DE DADOS DE DIÁLOGOS E OBJEÇÕES (Baseado na Live FYS)
const gameLevels = {
    1: {
        id: 1,
        clientName: "Seu Manoel",
        clientType: "Padaria de Bairro Tradicional",
        avatar: "👴",
        objections: [
            {
                stage: 0,
                clientText: "Opa, boa tarde. Se for para me empurrar refrigerante novo, já vou avisando que não tenho interesse. Minhas geladeiras já estão lotadas e aqui só gira Coca e Guaraná.",
                copilotTip: "Dica: Seu Manoel é conservador. Não ataque a concorrência diretamente, fale sobre a segurança do grupo Heineken e a lucratividade maior.",
                options: [
                    {
                        text: "Mas Seu Manoel, FYS é muito melhor que esses outros aí! Deixa eu colocar umas garrafas para o senhor ver, vai vender tudo rápido.",
                        moodChange: -15,
                        closingChange: 15,
                        feedback: "Seu Manoel não gosta de promessas vazias. Dizer que 'é melhor' sem explicar o porquê não convence."
                    },
                    {
                        text: "Entendo perfeitamente, Seu Manoel. O espaço na geladeira é valioso. Mas e se eu te disser que FYS é do Grupo Heineken, tem o mesmo padrão de qualidade e entrega, e te dá 40% mais margem de lucro que os líderes?",
                        moodChange: 15,
                        closingChange: 45,
                        feedback: "Excelente! Você usou a credibilidade do Grupo Heineken e o argumento financeiro da margem de lucro, que todo comerciante adora."
                    },
                    {
                        text: "Tudo bem então. Se o senhor não quer ganhar dinheiro e prefere ficar preso ao mesmo de sempre, eu vou embora.",
                        moodChange: -40,
                        closingChange: 0,
                        feedback: "Muito agressivo! O vendedor FYS deve ser bem-humorado e inteligente, não mal-educado."
                    }
                ]
            },
            {
                stage: 1,
                clientText: "Hum, Heineken? Eu conheço a cerveja, mas refrigerante? O povo aqui é muito chato com sabor. Se o refrigerante for ruim, eles não compram uma segunda vez de jeito nenhum.",
                copilotTip: "Dica: Destaque as qualidades de FYS que venceram o teste cego de sabor e a fórmula mais equilibrada (menos açúcar).",
                options: [
                    {
                        text: "Seu Manoel, FYS ganhou em testes cegos de sabor contra os líderes do mercado! Além disso, ele tem 30% menos açúcar e zero corantes artificiais. É o sabor que o cliente gosta, mas com menos culpa.",
                        moodChange: 20,
                        closingChange: 35,
                        feedback: "Sensacional! Citar a vitória no teste cego quebra o preconceito do sabor, e falar sobre os 30% menos açúcar atrai o consumidor moderno."
                    },
                    {
                        text: "FYS é bem docinho e gostoso, garanto que as crianças da escola aqui do lado vão amar e encher sua padaria.",
                        moodChange: -10,
                        closingChange: 10,
                        feedback: "Cuidado! FYS tem 30% MENOS açúcar. Vendê-lo como 'bem docinho' contradiz a principal qualidade do produto."
                    },
                    {
                        text: "Ah, o sabor é ótimo porque usamos ingredientes importados. O senhor tem que experimentar.",
                        moodChange: 5,
                        closingChange: 15,
                        feedback: "Mediano. Foi um argumento genérico que não foca nas qualidades reais do refrigerante."
                    }
                ]
            },
            {
                stage: 2,
                clientText: "Entendi... mas ainda estou com medo de ficar com produto encalhado ocupando espaço. Minha geladeira é sagrada.",
                copilotTip: "Dica: Proponha uma ação prática de ativação e visibilidade local para garantir que o produto rode sem risco para ele.",
                options: [
                    {
                        text: "Compre apenas 10 caixas e eu te dou um abridor de garrafas de brinde para o balcão.",
                        moodChange: -5,
                        closingChange: 10,
                        feedback: "Brindes simples não resolvem a dor do giro do produto na geladeira."
                    },
                    {
                        text: "Vamos fazer um teste sem risco: me dá um espaço na prateleira de baixo. Eu monto um cartaz bem-humorado de combo 'Pão na Chapa + FYS' na entrada. Se não vender nada em 2 semanas, eu mesmo troco o estoque encalhado por cerveja Heineken.",
                        moodChange: 25,
                        closingChange: 40,
                        feedback: "Perfeito! Você eliminou o risco do comerciante, sugeriu um combo de alta saída (pão na chapa) e garantiu visibilidade com o tom leve da FYS."
                    },
                    {
                        text: "Se o produto encalhar a culpa é da sua exposição, porque o refrigerante se vende sozinho.",
                        moodChange: -30,
                        closingChange: -10,
                        feedback: "Péssima postura. Culpar o cliente garante que a venda seja perdida."
                    }
                ]
            }
        ],
        successBadge: {
            name: "Dono da Geladeira",
            desc: "Convenceu o Seu Manoel a abrir espaço para FYS em sua padaria tradicional usando a força da Heineken.",
            icon: "🧊"
        },
        xpReward: 150
    },
    2: {
        id: 2,
        clientName: "Dona Neuza",
        clientType: "Panificadora Gourmet & Confeitaria",
        avatar: "👩‍💼",
        objections: [
            {
                stage: 0,
                clientText: "Olá. Olha, minha panificadora atende um público mais gourmet e preocupado com saúde. Refrigerante convencional cheio de corante artificial e açúcar não vende muito por aqui. Meus clientes preferem água com gás ou sucos naturais.",
                copilotTip: "Dica: Foque no argumento da saudabilidade de FYS (30% menos açúcar e zero corantes artificiais) e parcerias premium.",
                options: [
                    {
                        text: "Eu entendo, Dona Neuza. Mas a FYS tem justamente 30% menos açúcar e ZERO corantes artificiais na fórmula. Ele é perfeito para quem quer se permitir um refrigerante no almoço de forma mais leve e sem os aditivos pesados das outras marcas.",
                        moodChange: 20,
                        closingChange: 40,
                        feedback: "Excelente! Dona Neuza se importa com saúde, e você atacou exatamente essa dor mostrando que FYS é mais equilibrado que os refrigerantes comuns."
                    },
                    {
                        text: "Mas o povo que come doce gourmet adora açúcar, Dona Neuza! Eles vão querer tomar uma Coca bem gelada de qualquer jeito.",
                        moodChange: -20,
                        closingChange: 5,
                        feedback: "Errou feio. Você desvalorizou o posicionamento saudável que ela tenta trazer para a panificadora dela."
                    },
                    {
                        text: "Nossa linha de Água Tônica e Citrus combina perfeitamente com sobremesas finas e lanches artesanais, servindo como uma opção sofisticada de bebida.",
                        moodChange: 15,
                        closingChange: 30,
                        feedback: "Muito bom! Focar nas tônicas e no Citrus apela para o lado gourmet e de harmonização da padaria dela."
                    }
                ]
            },
            {
                stage: 1,
                clientText: "Gostei da composição do produto. Mas meu público é muito visual. FYS tem embalagens atraentes? Como isso vai destacar no meu balcão de vidro para não parecer que estou vendendo refresco barato?",
                copilotTip: "Dica: Fale da identidade moderna de FYS e sugira uma ação de experimentação (degustação) no ponto de venda.",
                options: [
                    {
                        text: "Nossas latas têm um design clean e moderno, ideal para expor no balcão gourmet. Além disso, podemos fazer uma ação de degustação rápida com mini copos no sábado para os clientes provarem com os salgados.",
                        moodChange: 25,
                        closingChange: 35,
                        feedback: "Espetacular! A degustação faz as pessoas provarem o sabor do produto e a lata moderna combina com a estética premium do local."
                    },
                    {
                        text: "Se a senhora colocar atrás do balcão onde ninguém vê, não importa a embalagem. O preço baixo atrai.",
                        moodChange: -15,
                        closingChange: 10,
                        feedback: "Esconder o produto é o oposto de visibilidade. A FYS precisa ser vista para ser lembrada."
                    },
                    {
                        text: "Nossas embalagens são bem normais, mas se a senhora quiser podemos colar uns adesivos da FYS na parede.",
                        moodChange: 0,
                        closingChange: 15,
                        feedback: "Mediano. Adesivos na parede não condizem com um ambiente gourmet elegante."
                    }
                ]
            },
            {
                stage: 2,
                clientText: "A ideia da degustação é interessante. Mas o meu metro quadrado é caro. Eu preciso de rentabilidade real. Por que eu escolheria a FYS em vez de uma marca importada de nicho?",
                copilotTip: "Dica: Mostre o balanço perfeito entre a alta margem financeira de FYS e o giro garantido pela distribuição da Heineken.",
                options: [
                    {
                        text: "As importadas custam caro para o consumidor e giram devagar. Com FYS, o custo para a senhora é menor, permitindo uma margem de até 35% de lucro limpo, e a entrega é feita semanalmente pela Heineken. É giro rápido e dinheiro no caixa.",
                        moodChange: 20,
                        closingChange: 45,
                        feedback: "Brilhante! Uniu alta margem financeira com a segurança de entrega e giro rápido de um produto Heineken. A Dona Neuza está convencida!"
                    },
                    {
                        text: "Porque a FYS é brasileira e a senhora deveria apoiar o mercado nacional.",
                        moodChange: -5,
                        closingChange: 10,
                        feedback: "Argumento fraco para um negócio que precisa pagar as contas no fim do mês."
                    },
                    {
                        text: "Se a senhora comprar hoje, eu consigo te dar 5% de desconto no fardo de lata.",
                        moodChange: 10,
                        closingChange: 20,
                        feedback: "Descontos são legais, mas provar o valor de margem de longo prazo é muito mais forte para o comprador."
                    }
                ]
            }
        ],
        successBadge: {
            name: "Conquistador Gourmet",
            desc: "Quebrou a barreira do público saudável e introduziu FYS em uma panificadora gourmet de alta classe.",
            icon: "🍰"
        },
        xpReward: 200
    }
};

// 2. ESTADO DO JOGO
let gameState = {
    xp: 0,
    unlockedBadges: [],
    currentLevel: null,
    currentStage: 0,
    mood: 80,
    closing: 0,
    levelsCompleted: []
};

// Carregar progresso do localStorage
function loadProgress() {
    const savedState = localStorage.getItem('fys_bakery_conquest_state');
    if (savedState) {
        try {
            gameState = JSON.parse(savedState);
            updateHeaderStats();
            updateLevelGrid();
        } catch (e) {
            console.error("Erro ao carregar progresso salvo", e);
        }
    }
}

// Salvar progresso no localStorage
function saveProgress() {
    localStorage.setItem('fys_bakery_conquest_state', JSON.stringify(gameState));
}

// 3. SELETORES E ELEMENTOS DA DOM
const screens = {
    welcome: document.getElementById('screen-welcome'),
    levels: document.getElementById('screen-levels'),
    gameplay: document.getElementById('screen-gameplay'),
    result: document.getElementById('screen-result')
};

// Botões de navegação
const btnStartGame = document.getElementById('btn-start-game');
const btnBackWelcome = document.getElementById('btn-back-welcome');
const btnNextStep = document.getElementById('btn-next-step');
const btnRestart = document.getElementById('btn-restart');

// 4. INICIALIZAÇÃO E EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    // Iniciar jogo -> Ir para seleção de rotas
    btnStartGame.addEventListener('click', () => {
        showScreen('levels');
    });

    // Voltar para tela inicial
    btnBackWelcome.addEventListener('click', () => {
        showScreen('welcome');
    });

    // Botões de jogar nível (rotas)
    document.querySelectorAll('.btn-play-level').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const levelId = parseInt(e.target.getAttribute('data-level'));
            startLevel(levelId);
        });
    });

    // Próximo passo após resultado
    btnNextStep.addEventListener('click', () => {
        showScreen('levels');
    });

    // Resetar tudo
    btnRestart.addEventListener('click', () => {
        if(confirm("Deseja resetar todo o seu progresso no simulador?")) {
            gameState = {
                xp: 0,
                unlockedBadges: [],
                currentLevel: null,
                currentStage: 0,
                mood: 80,
                closing: 0,
                levelsCompleted: []
            };
            saveProgress();
            updateHeaderStats();
            updateLevelGrid();
            showScreen('welcome');
        }
    });
});

// Alternar entre telas
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenId].classList.add('active');
}

// Atualizar informações da barra do cabeçalho
function updateHeaderStats() {
    document.getElementById('xp-display').querySelector('.value').innerText = `${gameState.xp} XP`;
    document.getElementById('badges-count').querySelector('.value').innerText = `${gameState.unlockedBadges.length} Conquistas`;
}

// Atualizar o grid de seleção de níveis
function updateLevelGrid() {
    document.querySelectorAll('.level-card').forEach(card => {
        const levelId = parseInt(card.getAttribute('data-level'));
        if (!levelId) return; // Nível 3 que está bloqueado e não tem levelId de dados

        const playBtn = card.querySelector('.btn-play-level');

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

    // Desbloquear Nível 3 se Nível 1 & 2 estiverem completos
    const level3Card = document.querySelector('.level-card.locked');
    if (level3Card && gameState.levelsCompleted.includes(1) && gameState.levelsCompleted.includes(2)) {
        level3Card.classList.remove('locked');
        level3Card.querySelector('.lock-indicator').innerHTML = "<span style='color:var(--heineken-neon)'>🎉 Desbloqueado!</span>";
        // Criar botão de jogar para o nível 3
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

// 5. LÓGICA DO GAMEPLAY (DUELO DE VENDAS)
function startLevel(levelId) {
    // Caso especial para Nível 3 (Bônus corporativo simulado)
    if (levelId === 3) {
        alert("Parabéns! Você alcançou o nível corporativo. Seu desafio final é fechar o contrato nacional. Esta etapa final valida o aprendizado das outras duas padarias!");
        gameState.xp += 300;
        if (!gameState.unlockedBadges.includes('mestre_vendas')) {
            gameState.unlockedBadges.push('mestre_vendas');
        }
        gameState.levelsCompleted.push(3);
        saveProgress();
        updateHeaderStats();
        updateLevelGrid();
        showResultScreen(true, {
            clientName: "Rede Pão de Ouro",
            xpReward: 300,
            successBadge: {
                name: "Mestre Supremo de Vendas FYS",
                desc: "Parcerias de nível corporativo e distribuição nacional fechadas com sucesso!",
                icon: "👑"
            }
        }, "Você fechou um contrato de exclusividade de refrigerantes para todas as 5 lojas da Rede Pão de Ouro! O diretor de compras adorou o projeto de combos locais e a margem de FYS.");
        return;
    }

    const level = gameLevels[levelId];
    gameState.currentLevel = levelId;
    gameState.currentStage = 0;
    gameState.mood = 80;
    gameState.closing = 0;

    // Configurar HUD do Cliente
    document.getElementById('game-client-name').innerText = level.clientName;
    document.getElementById('game-client-type').innerText = level.clientType;
    document.getElementById('game-client-avatar').innerText = level.avatar;
    
    // Limpar Chat
    const chatHistory = document.getElementById('chat-history');
    chatHistory.innerHTML = "";

    // Iniciar primeira fala do cliente
    showGameplayStage();
    showScreen('gameplay');
}

// Renderiza o estágio atual do diálogo do cliente e as escolhas do jogador
function showGameplayStage() {
    const level = gameLevels[gameState.currentLevel];
    const stageData = level.objections[gameState.currentStage];

    // Atualizar Barras de Progresso
    updateGameplayBars();

    // Atualizar dica do Copiloto de IA no painel lateral
    document.getElementById('copilot-tip').innerText = stageData.copilotTip;

    // Adicionar fala do cliente ao Chat
    addChatMessage(level.clientName, stageData.clientText, 'client');

    // Renderizar Botões de Escolha de Argumentos
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = "";

    stageData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "choice-btn";
        btn.innerText = opt.text;
        btn.addEventListener('click', () => handleChoice(opt));
        choicesContainer.appendChild(btn);
    });
}

// Lida com a escolha do argumento pelo jogador
function handleChoice(option) {
    const level = gameLevels[gameState.currentLevel];
    
    // Desabilitar botões durante animações
    document.getElementById('choices-container').innerHTML = "";

    // Adicionar resposta do vendedor no chat
    addChatMessage('Você (Vendedor FYS)', option.text, 'vendor');

    // Aplicar consequências
    gameState.mood = Math.max(0, Math.min(100, gameState.mood + option.moodChange));
    gameState.closing = Math.max(0, Math.min(100, gameState.closing + option.closingChange));

    // Mostrar feedback do sistema após pequeno delay
    setTimeout(() => {
        addChatMessage('Copiloto FYS', option.feedback, 'system');
        updateGameplayBars();

        // Verificar fim de jogo (derrota por falta de humor)
        if (gameState.mood <= 0) {
            setTimeout(() => finishLevel(false), 1500);
            return;
        }

        // Ir para próximo estágio ou fechar venda
        gameState.currentStage++;
        if (gameState.currentStage < level.objections.length) {
            setTimeout(() => {
                showGameplayStage();
            }, 2000);
        } else {
            // Fim dos estágios: avaliar se fechou a venda
            setTimeout(() => {
                const won = gameState.closing >= 70;
                finishLevel(won);
            }, 2000);
        }
    }, 1000);
}

// Auxiliar para injetar balões de chat
function addChatMessage(sender, text, type) {
    const chatHistory = document.getElementById('chat-history');
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg msg-${type}`;
    
    if (type !== 'system') {
        msgDiv.innerHTML = `<strong>${sender}:</strong> <br>${text}`;
    } else {
        msgDiv.innerHTML = `💡 <strong>${sender}:</strong> ${text}`;
    }

    chatHistory.appendChild(msgDiv);
    
    // Auto scroll para o final do chat
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Atualizar visualmente as barras de Humor e Fechamento
function updateGameplayBars() {
    document.getElementById('mood-val').innerText = `${gameState.mood}%`;
    document.getElementById('mood-bar').style.width = `${gameState.mood}%`;

    document.getElementById('closing-val').innerText = `${gameState.closing}%`;
    document.getElementById('closing-bar').style.width = `${gameState.closing}%`;

    // Alterar cores baseadas no nível crítico do humor
    const moodBar = document.getElementById('mood-bar');
    if (gameState.mood < 30) {
        moodBar.style.background = '#ef4444'; // Vermelho crítico
    } else if (gameState.mood < 60) {
        moodBar.style.background = '#f59e0b'; // Laranja alerta
    } else {
        moodBar.style.background = 'linear-gradient(to right, #f59e0b, #10b981)';
    }
}

// Finaliza o nível (Vitória ou Derrota)
function finishLevel(isVictory) {
    const level = gameLevels[gameState.currentLevel];
    
    if (isVictory) {
        // Vitória
        gameState.xp += level.xpReward;
        
        // Registrar conclusão
        if (!gameState.levelsCompleted.includes(level.id)) {
            gameState.levelsCompleted.push(level.id);
        }

        // Desbloquear medalha correspondente
        const badgeKey = level.successBadge.name.toLowerCase().replace(/ /g, '_');
        let newBadgeUnlocked = false;
        if (!gameState.unlockedBadges.includes(badgeKey)) {
            gameState.unlockedBadges.push(badgeKey);
            newBadgeUnlocked = true;
        }

        saveProgress();
        updateHeaderStats();
        updateLevelGrid();

        // Mostrar tela de resultados de vitória
        showResultScreen(true, level, `Parabéns! Você fechou a venda com o ${level.clientName}! Com base nos diferenciais de saudabilidade, sabor e lucro de FYS, a padaria agora tem refrigerantes Heineken na rota principal.`, newBadgeUnlocked);
    } else {
        // Derrota
        showResultScreen(false, level, `Infelizmente a negociação falhou. O cliente perdeu a paciência ou não sentiu confiança nos argumentos sobre FYS. Que tal tentar novamente com outra estratégia?`);
    }
}

// Configura e mostra a tela final de resultados
function showResultScreen(isVictory, level, message, newBadgeUnlocked = false) {
    const iconEl = document.getElementById('result-icon');
    const titleEl = document.getElementById('result-title');
    const messageEl = document.getElementById('result-message');
    const xpEl = document.getElementById('result-xp');
    const performanceEl = document.getElementById('result-performance');
    const badgeSection = document.getElementById('badge-unlocked-section');

    if (isVictory) {
        iconEl.innerText = "🎉";
        titleEl.innerText = "Venda Concluída!";
        titleEl.style.color = "var(--heineken-neon)";
        messageEl.innerText = message;
        xpEl.innerText = `+${level.xpReward} XP`;
        
        // Avaliação de performance baseada no fechamento final
        if (gameState.closing >= 90) {
            performanceEl.innerText = "Performance Imbatível! 🌟";
            performanceEl.style.color = "var(--fys-acid)";
        } else {
            performanceEl.innerText = "Bom Trabalho! 👍";
            performanceEl.style.color = "var(--fys-orange)";
        }

        // Mostrar distintivo desbloqueado
        if (newBadgeUnlocked && level.successBadge) {
            badgeSection.style.display = 'flex';
            document.getElementById('unlocked-badge-name').innerText = level.successBadge.name;
            document.getElementById('unlocked-badge-desc').innerText = level.successBadge.desc;
            badgeSection.querySelector('.badge-icon').innerText = level.successBadge.icon;
        } else {
            badgeSection.style.display = 'none';
        }
        
        btnNextStep.innerText = "Ver Outras Rotas";
    } else {
        iconEl.innerText = "😢";
        titleEl.innerText = "Negociação Mal Sucedida";
        titleEl.style.color = "#ef4444";
        messageEl.innerText = message;
        xpEl.innerText = "+0 XP";
        performanceEl.innerText = "Tente Novamente!";
        performanceEl.style.color = "#9ca3af";
        badgeSection.style.display = 'none';
        btnNextStep.innerText = "Refazer Nível";
    }

    showScreen('result');
}
