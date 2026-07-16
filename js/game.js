/* GAME.JS - FYS BAKERY CONQUEST */
/* Controla a base de dados de objeções, lógica de diálogos, fluxo de jogo e estatísticas */

// 1. BANCO DE DADOS DE OBJEÇÕES E CLIENTES (Baseado na Live FYS)
// Cada opção possui agora um "type" ('strong', 'average', 'weak') para gerar relatórios de desempenho
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
                        type: 'average',
                        feedback: "Seu Manoel não gosta de promessas vazias. Dizer que 'é melhor' sem explicar o porquê não convence."
                    },
                    {
                        text: "Entendo perfeitamente, Seu Manoel. O espaço na geladeira é valioso. Mas e se eu te disser que FYS é do Grupo Heineken, tem o mesmo padrão de qualidade e entrega, e te dá 40% mais margem de lucro que os líderes?",
                        moodChange: 15,
                        closingChange: 45,
                        type: 'strong',
                        feedback: "Excelente! Você usou a credibilidade do Grupo Heineken e o argumento financeiro da margem de lucro, que todo comerciante adora."
                    },
                    {
                        text: "Tudo bem então. Se o senhor não quer ganhar dinheiro e prefere ficar preso ao mesmo de sempre, eu vou embora.",
                        moodChange: -40,
                        closingChange: 0,
                        type: 'weak',
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
                        type: 'strong',
                        feedback: "Sensacional! Citar a vitória no teste cego quebra o preconceito do sabor, e falar sobre os 30% menos açúcar atrai o consumidor moderno."
                    },
                    {
                        text: "FYS é bem docinho e gostoso, garanto que as crianças da escola aqui do lado vão amar e encher sua padaria.",
                        moodChange: -10,
                        closingChange: 10,
                        type: 'weak',
                        feedback: "Cuidado! FYS tem 30% MENOS açúcar. Vendê-lo como 'bem docinho' contradiz a principal qualidade do produto."
                    },
                    {
                        text: "Ah, o sabor é ótimo porque usamos ingredientes importados. O senhor tem que experimentar.",
                        moodChange: 5,
                        closingChange: 15,
                        type: 'average',
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
                        type: 'weak',
                        feedback: "Brindes simples não resolvem a dor do giro do produto na geladeira."
                    },
                    {
                        text: "Vamos fazer um teste sem risco: me dá um espaço na prateleira de baixo. Eu monto um cartaz bem-humorado de combo 'Pão na Chapa + FYS' na entrada. Se não vender nada em 2 semanas, eu mesmo troco o estoque encalhado por cerveja Heineken.",
                        moodChange: 25,
                        closingChange: 40,
                        type: 'strong',
                        feedback: "Perfeito! Você eliminou o risco do comerciante, sugeriu um combo de alta saída (pão na chapa) e garantiu visibilidade com o tom leve da FYS."
                    },
                    {
                        text: "Se o produto encalhar a culpa é da sua exposição, porque o refrigerante se vende sozinho.",
                        moodChange: -30,
                        closingChange: -10,
                        type: 'weak',
                        feedback: "Péssima postura. Culpar o cliente garante que a venda seja perdida."
                    }
                ]
            }
        ],
        successBadge: {
            key: "dono_da_geladeira",
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
                        type: 'strong',
                        feedback: "Excelente! Dona Neuza se importa com saúde, e você atacou exatamente essa dor mostrando que FYS é mais equilibrado que os refrigerantes comuns."
                    },
                    {
                        text: "Mas o povo que come doce gourmet adora açúcar, Dona Neuza! Eles vão querer tomar uma Coca bem gelada de qualquer jeito.",
                        moodChange: -20,
                        closingChange: 5,
                        type: 'weak',
                        feedback: "Errou feio. Você desvalorizou o posicionamento saudável que ela tenta trazer para a panificadora dela."
                    },
                    {
                        text: "Nossa linha de Água Tônica e Citrus combina perfeitamente com sobremesas finas e lanches artesanais, servindo como uma opção sofisticada de bebida.",
                        moodChange: 15,
                        closingChange: 30,
                        type: 'strong',
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
                        type: 'strong',
                        feedback: "Espetacular! A degustação faz as pessoas provarem o sabor do produto e a lata moderna combina com a estética premium do local."
                    },
                    {
                        text: "Se a senhora colocar atrás do balcão onde ninguém vê, não importa a embalagem. O preço baixo atrai.",
                        moodChange: -15,
                        closingChange: 10,
                        type: 'weak',
                        feedback: "Esconder o produto é o oposto de visibilidade. A FYS precisa ser vista para ser lembrada."
                    },
                    {
                        text: "Nossas embalagens são bem normais, mas se a senhora quiser podemos colar uns adesivos da FYS na parede.",
                        moodChange: 0,
                        closingChange: 15,
                        type: 'average',
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
                        type: 'strong',
                        feedback: "Brilhante! Uniu alta margem financeira com a segurança de entrega e giro rápido de um produto Heineken. A Dona Neuza está convencida!"
                    },
                    {
                        text: "Porque a FYS é brasileira e a senhora deveria apoiar o mercado nacional.",
                        moodChange: -5,
                        closingChange: 10,
                        type: 'weak',
                        feedback: "Argumento fraco para um negócio que precisa pagar as contas no fim do mês."
                    },
                    {
                        text: "Se a senhora comprar hoje, eu consigo te dar 5% de desconto no fardo de lata.",
                        moodChange: 10,
                        closingChange: 20,
                        type: 'average',
                        feedback: "Descontos são legais, mas provar o valor de margem de longo prazo é muito mais forte para o comprador."
                    }
                ]
            }
        ],
        successBadge: {
            key: "conquistador_gourmet",
            name: "Conquistador Gourmet",
            desc: "Quebrou a barreira do público saudável e introduziu FYS em uma panificadora gourmet de alta classe.",
            icon: "🍰"
        },
        xpReward: 200
    },
    3: {
        id: 3,
        clientName: "Carlos (Pão de Ouro)",
        clientType: "Grandes Contas (Key Accounts)",
        avatar: "🏢",
        objections: [
            {
                stage: 0,
                clientText: "Olá, sou o Carlos, gerente de compras da rede Pão de Ouro. Nós temos 5 lojas de alto volume e o nosso espaço em gôndola é disputadíssimo. Para colocarmos uma marca desafiante como FYS em todas as lojas, precisamos ver um plano de Trade Marketing sólido. O que propõem?",
                copilotTip: "Dica: Carlos quer ações de visibilidade e parcerias estruturadas no PDV. Proponha pontas de gôndola e degustações aliadas a anúncios locais.",
                options: [
                    {
                        text: "FYS se vende sozinho por causa do preço competitivo, Carlos! Não precisamos gastar com planos complicados de marketing.",
                        moodChange: -20,
                        closingChange: 0,
                        type: 'weak',
                        feedback: "Muito desleixado. O comprador corporativo exige profissionalismo e ações de marketing estruturadas para justificar o espaço."
                    },
                    {
                        text: "Nós vamos disponibilizar displays de ponta de gôndola exclusivos e realizar ações de degustação aos sábados nas 5 lojas, integrando com anúncios geolocalizados nas redes sociais para atrair o público local.",
                        moodChange: 15,
                        closingChange: 35,
                        type: 'strong',
                        feedback: "Excelente! Demonstra maturidade de Trade: combina visibilidade física (pontas de gôndola e degustação) com atração digital no bairro."
                    },
                    {
                        text: "Nós podemos colar alguns cartazes da FYS nas portas de entrada e dar camisetas para os seus repositores de estoque.",
                        moodChange: 5,
                        closingChange: 15,
                        type: 'average',
                        feedback: "Fraco. Cartazes simples e camisetas não geram a experiência de experimentação que um produto inovador necessita."
                    }
                ]
            },
            {
                stage: 1,
                clientText: "Gostei da proposta de ponta de gôndola. Mas e os dados logísticos? Não posso arriscar ruptura de estoque nas lojas ou ter fardos vencendo em gôndolas de baixo giro. Como garantem o reabastecimento?",
                copilotTip: "Dica: Ele precisa de segurança de cadeia de suprimentos. Destaque o poder e a automação do sistema logístico do Grupo Heineken.",
                options: [
                    {
                        text: "A nossa distribuição é integrada 100% à malha logística do Grupo Heineken, com entregas programadas semanais e reposição automática baseada no histórico de vendas, eliminando o risco de ruptura.",
                        moodChange: 20,
                        closingChange: 35,
                        type: 'strong',
                        feedback: "Perfeito! A estrutura logística da Heineken traz total credibilidade e estabilidade, tranquilizando o comprador de grandes contas."
                    },
                    {
                        text: "Se faltar refrigerante nas lojas, eu garanto que trago fardos extras no porta-malas do meu próprio carro no mesmo dia.",
                        moodChange: -15,
                        closingChange: 5,
                        type: 'weak',
                        feedback: "Inadequado. Soluções informais e improvisadas assustam compradores corporativos que exigem processos estruturados."
                    },
                    {
                        text: "Temos uma equipe de promotores que vai visitar as lojas duas vezes por semana para contar as gôndolas e nos enviar os pedidos de reposição.",
                        moodChange: 10,
                        closingChange: 20,
                        type: 'average',
                        feedback: "Mediano. Embora os promotores ajudem na auditoria de loja, o processo automatizado da Heineken é muito mais atraente."
                    }
                ]
            },
            {
                stage: 2,
                clientText: "A logística da Heineken nos dá bastante segurança. Mas para assinar a exclusividade de refrigerantes premium desafiantes nas 5 lojas, eu preciso de um apelo promocional forte. Qual a oferta final para fechar o contrato?",
                copilotTip: "Dica: Proponha uma parceria estratégica inovadora de combo alimentício e destaque nos caixas (checkout) das lojas.",
                options: [
                    {
                        text: "Propomos o combo exclusivo 'Lanche Pão de Ouro + FYS' com desconto de introdução subsidiado no primeiro mês, além de destacar latas FYS nas geladeiras de checkout (bocas de caixa) para compra por impulso.",
                        moodChange: 15,
                        closingChange: 40,
                        type: 'strong',
                        feedback: "Brilhante! O combo cruzado (lanche + refri) impulsiona o ticket médio das lojas, e a exposição nos checkouts captura a compra por impulso. Negócio fechado!"
                    },
                    {
                        text: "Eu posso te dar 10% de desconto na primeira compra de fardos e depois voltamos a negociar o preço de tabela.",
                        moodChange: 5,
                        closingChange: 15,
                        type: 'average',
                        feedback: "Razoável. O desconto ajuda no início, mas não propõe uma mecânica duradoura de venda casada para as lojas."
                    },
                    {
                        text: "Infelizmente nossa margem com FYS já está no limite. Não temos como fazer nenhuma promoção extra, o senhor deveria aceitar o preço padrão.",
                        moodChange: -20,
                        closingChange: -10,
                        type: 'weak',
                        feedback: "Ruim. Numa negociação de rede (Key Account), a falta de flexibilidade e a recusa em criar campanhas promocionais cancelam a parceria."
                    }
                ]
            }
        ],
        successBadge: {
            key: "mestre_vendas",
            name: "Mestre Supremo de Vendas FYS",
            desc: "Alcançou o nível corporativo e fechou distribuição de FYS com a Rede Pão de Ouro.",
            icon: "👑"
        },
        xpReward: 300
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
    levelsCompleted: [],
    
    // Rastreamento das estatísticas da partida atual
    currentMatchStats: {
        totalTurns: 0,
        strongTurns: 0
    }
};

// Inicializa a rota selecionada
function startLevel(levelId) {
    // Tenta inicializar o som se houver interação humana
    initFysAudio();

    const level = gameLevels[levelId];
    gameState.currentLevel = levelId;
    gameState.currentStage = 0;
    gameState.mood = 80;
    gameState.closing = 0;

    // Reseta as estatísticas da partida
    gameState.currentMatchStats = {
        totalTurns: 0,
        strongTurns: 0
    };

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
    
    // Incrementa as estatísticas de argumentos
    gameState.currentMatchStats.totalTurns++;
    if (option.type === 'strong') {
        gameState.currentMatchStats.strongTurns++;
        // Toca FX de sucesso para argumentos fortes
        playAudioSuccess();
    } else if (option.type === 'weak') {
        // Toca FX de erro para argumentos fracos/agressivos
        playAudioFailure();
    } else {
        // Toca FX suave para argumentos medianos
        playAudioSuccess();
    }

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
        const badgeKey = level.successBadge.key || level.successBadge.name.toLowerCase().replace(/ /g, '_');
        let newBadgeUnlocked = false;
        if (!gameState.unlockedBadges.includes(badgeKey)) {
            gameState.unlockedBadges.push(badgeKey);
            newBadgeUnlocked = true;
        }

        // Salva os dados localmente
        saveGameState(gameState);
        updateHeaderStats();
        updateLevelGrid();

        // Toca som de vitória
        playAudioVictory();

        // Abre tela de vitória
        showResultScreen(true, level, `Parabéns! Você fechou a venda com o ${level.clientName}! Com base nos diferenciais de saudabilidade, sabor e lucro de FYS, a padaria agora tem refrigerantes Heineken na rota principal.`, newBadgeUnlocked);
    } else {
        // Toca som de derrota
        playAudioDefeat();

        // Abre tela de derrota
        showResultScreen(false, level, `Infelizmente a negociação falhou. O cliente perdeu a paciência ou não sentiu confiança nos argumentos sobre FYS. Que tal tentar novamente com outra estratégia?`);
    }
}
