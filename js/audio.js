/* AUDIO.JS - FYS BAKERY CONQUEST */
/* Sintetizador de áudio autônomo via Web Audio API do navegador. */

// Estado global de áudio
let audioCtx = null;
let masterGain = null;
let bgmInterval = null;
let isAudioMuted = false;

// Notas de baixo em loop sutil para música de fundo (MIDI)
const BGM_BASSLINE = [48, 52, 55, 52, 50, 53, 57, 53]; 
let bgmIndex = 0;

// Inicializa o contexto de áudio após interação do usuário
function initFysAudio() {
    if (audioCtx) return;
    
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(isAudioMuted ? 0 : 0.6, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
        
        // Carrega estado de mute salvo
        const savedMute = localStorage.getItem('fys_audio_muted');
        if (savedMute === 'true') {
            setMuteState(true);
        }
        
        // Inicia BGM
        startBackgroundMusic();
    } catch (e) {
        console.error("Web Audio API não é suportada neste navegador.", e);
    }
}

// Inicia o loop de notas da música de fundo
function startBackgroundMusic() {
    if (bgmInterval) clearInterval(bgmInterval);
    
    bgmIndex = 0;
    bgmInterval = setInterval(() => {
        if (isAudioMuted || !audioCtx || audioCtx.state === 'suspended') return;
        
        // Executa uma nota com tom suave de triângulo e volume bem baixo
        const note = BGM_BASSLINE[bgmIndex];
        bgmIndex = (bgmIndex + 1) % BGM_BASSLINE.length;
        
        playSynthNote(note, 0.8, 'triangle', 0.015);
    }, 800);
}

// Para a música de fundo
function stopBackgroundMusic() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

// Sintetiza uma nota musical simples
function playSynthNote(midiNote, duration, type = 'sine', volume = 0.1, delay = 0) {
    if (!audioCtx || isAudioMuted || audioCtx.state === 'suspended') return;
    
    const time = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Converte nota MIDI para frequência em Hz
    const frequency = 440 * Math.pow(2, (midiNote - 69) / 12);
    
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, time);
    
    gainNode.gain.setValueAtTime(volume, time);
    // Cria um envelope com decaimento exponencial suave
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    
    osc.connect(gainNode);
    gainNode.connect(masterGain);
    
    osc.start(time);
    osc.stop(time + duration);
}

// FX 1: Som de acerto (Arpejo ascendente feliz)
function playAudioSuccess() {
    if (!audioCtx) initFysAudio();
    const notes = [60, 64, 67, 72]; // Acorde Maior de Dó (C)
    notes.forEach((note, idx) => {
        playSynthNote(note, 0.3, 'sine', 0.08, idx * 0.08);
    });
}

// FX 2: Som de erro (Tom duplo descendente tenso)
function playAudioFailure() {
    if (!audioCtx) initFysAudio();
    // Toca um tom dissonante que desce rapidamente
    playSynthNote(50, 0.4, 'sawtooth', 0.04);
    playSynthNote(49, 0.4, 'sawtooth', 0.04, 0.05);
}

// FX 3: Som de vitória (Fanfarra alegre)
function playAudioVictory() {
    if (!audioCtx) initFysAudio();
    const sequence = [
        { note: 60, dur: 0.15, time: 0 },
        { note: 64, dur: 0.15, time: 0.15 },
        { note: 67, dur: 0.15, time: 0.30 },
        { note: 72, dur: 0.5, time: 0.45 }
    ];
    sequence.forEach(step => {
        playSynthNote(step.note, step.dur, 'triangle', 0.08, step.time);
    });
}

// FX 4: Som de derrota (Arpejo menor descendente melancólico)
function playAudioDefeat() {
    if (!audioCtx) initFysAudio();
    const notes = [69, 65, 62, 57]; // Acorde Menor (Am) descendente
    notes.forEach((note, idx) => {
        playSynthNote(note, 0.4, 'sine', 0.08, idx * 0.12);
    });
}

// Liga/Desliga o Mute
function toggleFysAudioMute() {
    setMuteState(!isAudioMuted);
}

function setMuteState(mute) {
    isAudioMuted = mute;
    localStorage.setItem('fys_audio_muted', isAudioMuted);
    
    if (masterGain) {
        masterGain.gain.setValueAtTime(isAudioMuted ? 0 : 0.6, audioCtx.currentTime);
    }
}
