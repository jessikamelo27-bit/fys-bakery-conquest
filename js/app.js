/* APP.JS - FYS BAKERY CONQUEST */
/* Inicialização global e gerenciamento de escuta de eventos do simulador */

document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGAR PERFIS E ESTADO INICIAL
    
    // Carrega a lista completa de perfis (cria o padrão caso vazio)
    renderPlayerProfiles();
    
    // Carrega o estado de jogo do perfil ativo atual
    gameState = loadGameState();
    
    // Atualiza cabeçalho de status
    updateHeaderStats();
    
    // Atualiza a visualização das rotas e conquistas
    updateLevelGrid();

    // Restaura o estado salvo do Mute e atualiza botão
    const savedMute = localStorage.getItem('fys_audio_muted') === 'true';
    setMuteState(savedMute);
    updateAudioMuteButtonUI();

    // Restaura o tema salvo
    const savedTheme = localStorage.getItem('fys_light_theme') === 'true';
    if (savedTheme) {
        document.body.classList.add('light-theme');
    }
    updateThemeButtonUI();

    // 2. CONFIGURAR ESCUTAS DE EVENTOS DO CABEÇALHO

    // Botão de Mutar/Desmutar Som
    document.getElementById('btn-toggle-mute').addEventListener('click', () => {
        // Tenta inicializar o som caso seja a primeira interação
        initFysAudio();
        toggleFysAudioMute();
        updateAudioMuteButtonUI();
    });

    // Botão de Alternar Modo Claro/Escuro
    document.getElementById('btn-toggle-theme').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('fys_light_theme', isLight);
        updateThemeButtonUI();
        
        // Toca feedback de som
        playAudioSuccess();
    });

    // 3. CONFIGURAR GERENCIADOR DE PERFIS (TELA INICIAL)

    // Criar Perfil ao clicar no botão
    document.getElementById('btn-create-profile').addEventListener('click', () => {
        const input = document.getElementById('new-profile-name');
        const name = input.value;
        const profile = createPlayerProfile(name);
        
        if (profile) {
            input.value = "";
            // Carrega o estado do novo perfil recém criado (inicia zerado)
            gameState = loadGameState();
            updateHeaderStats();
            updateLevelGrid();
            renderPlayerProfiles();
            
            // FX de Sucesso
            playAudioSuccess();
        }
    });

    // Criar Perfil ao apertar Enter no input
    document.getElementById('new-profile-name').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            document.getElementById('btn-create-profile').click();
        }
    });

    // 4. CONFIGURAR EVENTOS DE NAVEGAÇÃO DE TELA
    
    // Iniciar jogo -> Vai para seleção de rota
    document.getElementById('btn-start-game').addEventListener('click', () => {
        initFysAudio(); // Garante ativação de som após interação
        showScreen('levels');
    });

    // Voltar para a tela inicial (menu de perfis)
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
});
