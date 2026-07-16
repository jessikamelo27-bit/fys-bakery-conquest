/* GAME.JS - FYS BAKERY CONQUEST */
/* Controla a base de dados de objeções, lógica de diálogos e fluxo de jogo */

// 1. BANCO DE DADOS DE OBJEÇÕES E CLIENTES (Baseado na Live FYS)
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

// Varável global de controle de estado
let gameState = {
    xp: 0,
    unlockedBadges: [],
    currentLevel: null,
    currentStage: 0,
    mood: 80,
    closing: 0,
    levelsCompleted: []
};

// Inicializa a rota selecionada
function startLevel(levelId) {
    // Caso especial para Nível 3 (Simulado)
    if (levelId === 3) {
        alert("Parabéns! Você alcançou o nível corporativo. Seu desafio final é fechar o contrato nacional com a Rede Pão de Ouro.");
        gameState.xp += 300;
        if (!gameState.unlockedBadges.includes('mestre_vendas')) {
            gameState.unlockedBadges.push('mestre_vendas');
        }
        gameState.levelsCompleted.push(3);
        saveGameState(gameState);
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

    // Atualiza a interface gráfica do cliente selecionado
    setupClientGameplayUI(level);

    // Renderiza a primeira objeção
    showGameplayStage();
    showScreen('gameplay');
}

// Controla o fluxo de diálogo de cada objeção
function showGameplayStage() {
    const level = gameLevels[gameState.currentLevel];
    const stageData = level.objections[gameState.currentStage];

    // Atualiza as barras de progresso (humor e fechamento)
    updateGameplayBars();

    // Renderiza a nova objeção do cliente e opções de resposta
    renderStageUI(level.clientName, stageData);
}

// Analisa a resposta escolhida pelo vendedor
function handleChoice(option) {
    const level = gameLevels[gameState.currentLevel];
    
    // Oculta as escolhas para evitar duplo clique durante a animação
    clearChoicesUI();

    // Adiciona o balão de resposta do jogador
    addChatMessage('Você (Vendedor FYS)', option.text, 'vendor');

    // Atualiza os valores baseado no impacto da resposta
    gameState.mood = Math.max(0, Math.min(100, gameState.mood + option.moodChange));
    gameState.closing = Math.max(0, Math.min(100, gameState.closing + option.closingChange));

    // Mostra o feedback do copiloto após um pequeno delay
    setTimeout(() => {
        addChatMessage('Copiloto FYS', option.feedback, 'system');
        updateGameplayBars();

        // Verifica condição de derrota imediata (humor chegou a zero)
        if (gameState.mood <= 0) {
            setTimeout(() => finishLevel(false), 1500);
            return;
        }

        // Segue para a próxima objeção ou avalia encerramento do nível
        gameState.currentStage++;
        if (gameState.currentStage < level.objections.length) {
            setTimeout(() => {
                showGameplayStage();
            }, 2000);
        } else {
            // Verifica condição de vitória final
            setTimeout(() => {
                const won = gameState.closing >= 70;
                finishLevel(won);
            }, 2000);
        }
    }, 1000);
}

// Finaliza a rota (Vitória ou Derrota)
function finishLevel(isVictory) {
    const level = gameLevels[gameState.currentLevel];
    
    if (isVictory) {
        // Atribui recompensas de XP
        gameState.xp += level.xpReward;
        
        // Registra conclusão
        if (!gameState.levelsCompleted.includes(level.id)) {
            gameState.levelsCompleted.push(level.id);
        }

        // Registra novas conquistas
        const badgeKey = level.successBadge.name.toLowerCase().replace(/ /g, '_');
        let newBadgeUnlocked = false;
        if (!gameState.unlockedBadges.includes(badgeKey)) {
            gameState.unlockedBadges.push(badgeKey);
            newBadgeUnlocked = true;
        }

        // Salva os dados localmente
        saveGameState(gameState);
        updateHeaderStats();
        updateLevelGrid();

        // Abre tela de vitória
        showResultScreen(true, level, `Parabéns! Você fechou a venda com o ${level.clientName}! Com base nos diferenciais de saudabilidade, sabor e lucro de FYS, a padaria agora tem refrigerantes Heineken na rota principal.`, newBadgeUnlocked);
    } else {
        // Abre tela de derrota
        showResultScreen(false, level, `Infelizmente a negociação falhou. O cliente perdeu a paciência ou não sentiu confiança nos argumentos sobre FYS. Que tal tentar novamente com outra estratégia?`);
    }
}
