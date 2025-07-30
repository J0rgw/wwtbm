// Estado global del juego
let gameState = {
    isHost: false,
    gameCode: '',
    gameName: '',
    username: '',
    players: [],
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: null,
    timeRemaining: 30,
    gameInProgress: false,
    selectedAnswer: null,
    results: [],
    gameListener: null
};

// Estado del monitoreo del host
let hostMonitoringState = {
    gameStartTime: null,
    currentQuestionStartTime: null,
    gameEvents: [],
    updateInterval: null
};

// Referencias a elementos del DOM
const screens = {
    home: document.getElementById('home-screen'),
    createGame: document.getElementById('create-game-screen'),
    joinGame: document.getElementById('join-game-screen'),
    hostLobby: document.getElementById('host-lobby-screen'),
    playerLobby: document.getElementById('player-lobby-screen'),
    game: document.getElementById('game-screen'),
    waiting: document.getElementById('waiting-screen'),
    results: document.getElementById('results-screen'),
    hostMonitoring: document.getElementById('host-monitoring-screen')
};

// Inicializar la aplicacion
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showScreen('home');
    
    // Verificar si Firebase está disponible
    if (typeof window.firebaseManager === 'undefined') {
        console.error('Firebase no está cargado correctamente');
    }
});

// Configurar event listeners
function initializeEventListeners() {
    // Pantalla principal
    document.getElementById('create-game-btn').addEventListener('click', () => showScreen('createGame'));
    document.getElementById('join-game-btn').addEventListener('click', () => showScreen('joinGame'));

    // Crear partida
    document.getElementById('create-confirm-btn').addEventListener('click', createGame);
    document.getElementById('back-from-create-btn').addEventListener('click', () => showScreen('home'));

    // Unirse a partida
    document.getElementById('join-confirm-btn').addEventListener('click', joinGame);
    document.getElementById('back-from-join-btn').addEventListener('click', () => showScreen('home'));

    // Lobby del host
    document.getElementById('start-game-btn').addEventListener('click', startGameAsHost);
    document.getElementById('cancel-game-btn').addEventListener('click', cancelGame);

    // Lobby del jugador
    document.getElementById('leave-game-btn').addEventListener('click', leaveGame);

    // Botones de respuesta
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', selectAnswer);
    });

    // Nueva partida
    document.getElementById('new-game-btn').addEventListener('click', () => showScreen('home'));

    // Validacion en tiempo real
    setupInputValidation();
}

// Configurar validacion de inputs
function setupInputValidation() {
    // Validar nombre de usuario
    const usernameInputs = ['host-username', 'player-username'];
    usernameInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z0-9_-]/g, '');
        });
    });

    // Validar codigo de partida
    const gameCodeInput = document.getElementById('game-code');
    gameCodeInput.addEventListener('input', function() {
        this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    });

    // Activar/desactivar botones segun validacion
    document.getElementById('host-username').addEventListener('input', validateCreateForm);
    document.getElementById('game-name').addEventListener('input', validateCreateForm);
    document.getElementById('player-username').addEventListener('input', validateJoinForm);
    document.getElementById('game-code').addEventListener('input', validateJoinForm);
}

// Validar formulario de crear partida
function validateCreateForm() {
    const username = document.getElementById('host-username').value.trim();
    const gameName = document.getElementById('game-name').value.trim();
    const button = document.getElementById('create-confirm-btn');
    
    button.disabled = username.length < 2 || gameName.length < 3;
}

// Validar formulario de unirse a partida
function validateJoinForm() {
    const username = document.getElementById('player-username').value.trim();
    const gameCode = document.getElementById('game-code').value.trim();
    const button = document.getElementById('join-confirm-btn');
    
    button.disabled = username.length < 2 || gameCode.length !== 6;
}

// Mostrar pantalla especifica
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Generar codigo de partida aleatorio
function generateGameCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Crear nueva partida
async function createGame() {
    const username = document.getElementById('host-username').value.trim();
    const gameName = document.getElementById('game-name').value.trim();
    const maxPlayers = parseInt(document.getElementById('max-players').value);

    if (username.length < 2 || gameName.length < 3) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Mostrar loading
    const button = document.getElementById('create-confirm-btn');
    const originalText = button.textContent;
    button.textContent = 'Creando...';
    button.disabled = true;

    try {
        // Configurar estado del juego
        gameState.isHost = true;
        gameState.gameCode = generateGameCode();
        gameState.gameName = gameName;
        gameState.username = username;
        gameState.maxPlayers = maxPlayers;
        gameState.players = [{
            id: 'host',
            name: username,
            isHost: true,
            score: 0,
            ready: true
        }];

        // Crear partida en Firebase
        const gameData = {
            code: gameState.gameCode,
            name: gameState.gameName,
            host: username,
            players: gameState.players,
            maxPlayers: maxPlayers,
            status: 'waiting'
        };

        const success = await window.firebaseManager.createGame(gameData);
        
        if (success) {
            // Configurar listener para cambios en la partida
            setupGameListener();
            
            // Actualizar UI del lobby
            updateHostLobby();
            showScreen('hostLobby');
        } else {
            throw new Error('No se pudo crear la partida');
        }
    } catch (error) {
        console.error('Error al crear partida:', error);
        alert('Error al crear la partida. Inténtalo de nuevo.');
    } finally {
        button.textContent = originalText;
        button.disabled = false;
    }
}

// Unirse a partida existente
async function joinGame() {
    const username = document.getElementById('player-username').value.trim();
    const gameCode = document.getElementById('game-code').value.trim();

    if (username.length < 2 || gameCode.length !== 6) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Mostrar loading
    const button = document.getElementById('join-confirm-btn');
    const originalText = button.textContent;
    button.textContent = 'Conectando...';
    button.disabled = true;

    try {
        console.log(`Intentando unirse a partida: ${gameCode}`);

        // Verificar si Firebase está cargado
        if (!window.firebaseManager) {
            throw new Error('Firebase no está cargado. Recarga la página.');
        }

        // Verificar si la partida existe
        const gameExists = await window.firebaseManager.joinGame(gameCode);
        
        if (!gameExists) {
            alert(`No se encontró una partida con el código: ${gameCode}`);
            return;
        }

        // Configurar estado del jugador
        gameState.isHost = false;
        gameState.gameCode = gameCode;
        gameState.username = username;

        // Crear datos del nuevo jugador
        const newPlayer = {
            id: 'player_' + Date.now(),
            name: username,
            isHost: false,
            score: 0,
            ready: true
        };

        // Intentar agregar jugador a la partida
        const success = await window.firebaseManager.addPlayer(gameCode, newPlayer);
        
        if (success) {
            // Configurar listener para cambios en la partida
            setupGameListener();
            showScreen('playerLobby');
        } else {
            alert('Ya hay un jugador con ese nombre en la partida o la partida está llena.');
        }
    } catch (error) {
        console.error('Error al unirse a partida:', error);
        alert(`Error al conectarse a la partida: ${error.message}`);
    } finally {
        button.textContent = originalText;
        button.disabled = false;
    }
}

// Configurar listener de Firebase para cambios en tiempo real
function setupGameListener() {
    // Remover listener anterior si existe
    if (gameState.gameListener) {
        window.firebaseManager.removeListener(gameState.gameCode);
    }

    // Configurar nuevo listener
    gameState.gameListener = window.firebaseManager.listenToGame(gameState.gameCode, (gameData) => {
        if (!gameData) {
            // La partida fue eliminada
            if (gameState.isHost) {
                addGameEvent('error', 'La partida fue eliminada');
                stopMonitoringUpdates();
            }
            alert('La partida ha sido cancelada por el host.');
            resetGameState();
            showScreen('home');
            return;
        }

        // Detectar cambios en los jugadores para logging (solo para host)
        if (gameState.isHost && gameState.players) {
            const oldPlayers = gameState.players.filter(p => !p.isHost);
            const newPlayers = (gameData.players || []).filter(p => !p.isHost);
            
            // Detectar jugadores que terminaron
            newPlayers.forEach(newPlayer => {
                const oldPlayer = oldPlayers.find(p => p.name === newPlayer.name);
                if (oldPlayer && !oldPlayer.finished && newPlayer.finished) {
                    addGameEvent('success', `${newPlayer.name} terminó la partida con ${newPlayer.score || 0} puntos`);
                }
            });
            
            // Detectar nuevos jugadores
            newPlayers.forEach(newPlayer => {
                const existed = oldPlayers.find(p => p.name === newPlayer.name);
                if (!existed) {
                    addGameEvent('info', `${newPlayer.name} se unió a la partida`);
                }
            });
            
            // Detectar jugadores que se fueron
            oldPlayers.forEach(oldPlayer => {
                const stillExists = newPlayers.find(p => p.name === oldPlayer.name);
                if (!stillExists) {
                    addGameEvent('warning', `${oldPlayer.name} abandonó la partida`);
                }
            });
        }

        // Actualizar estado local
        gameState.gameName = gameData.name;
        gameState.players = gameData.players || [];

        // Actualizar UI según el estado actual
        if (screens.hostLobby.classList.contains('active')) {
            updateHostLobby();
        } else if (screens.playerLobby.classList.contains('active')) {
            updatePlayerLobby();
        }

        // Verificar si el juego ha comenzado (solo para jugadores, no hosts)
        if (gameData.status === 'playing' && !gameState.gameInProgress && !gameState.isHost) {
            gameState.currentQuestions = gameData.questions;
            gameState.gameInProgress = true;
            showScreen('game');
            displayQuestion();
            startTimer();
        }

        // Verificar si el juego ha terminado
        if (gameData.status === 'finished') {
            if (gameState.isHost) {
                addGameEvent('success', 'Partida terminada - Todos los jugadores completaron el juego');
                stopMonitoringUpdates();
            } else {
                // Detener cualquier timer activo
                stopTimer();
                gameState.gameInProgress = false;
            }
            
            gameState.results = gameData.finalResults || [];
            displayResults();
            showScreen('results');
            return;
        }

        // Actualizar pantalla de espera si está activa
        if (screens.waiting.classList.contains('active') && gameData.status !== 'finished') {
            updateWaitingScreen(gameData);
        }
    });
}

// Actualizar lobby del host
function updateHostLobby() {
    document.getElementById('display-game-code').textContent = gameState.gameCode;
    document.getElementById('display-game-name').textContent = gameState.gameName;
    document.getElementById('player-count').textContent = `${gameState.players.length}/${gameState.maxPlayers}`;

    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';

    gameState.players.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.className = 'player-item';
        playerElement.innerHTML = `
            <div class="player-info">
                <span class="player-name">${player.name}</span>
                ${player.isHost ? '<span class="host-badge">HOST</span>' : ''}
            </div>
            <span class="player-status">Listo</span>
        `;
        playersList.appendChild(playerElement);
    });

    // Habilitar boton de inicio si hay al menos 2 jugadores
    const startButton = document.getElementById('start-game-btn');
    startButton.disabled = gameState.players.length < 2;
}

// Actualizar lobby del jugador
function updatePlayerLobby() {
    document.getElementById('joined-game-name').textContent = gameState.gameName;
    document.getElementById('joined-player-count').textContent = `${gameState.players.length}/${gameState.maxPlayers || 8}`;

    const playersList = document.getElementById('joined-players-list');
    playersList.innerHTML = '';

    gameState.players.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.className = 'player-item';
        playerElement.innerHTML = `
            <div class="player-info">
                <span class="player-name">${player.name}</span>
                ${player.isHost ? '<span class="host-badge">HOST</span>' : ''}
            </div>
            <span class="player-status">Listo</span>
        `;
        playersList.appendChild(playerElement);
    });
}

// Iniciar partida (NUEVA FUNCIÓN - Reemplaza startGame)
async function startGameAsHost() {
    if (gameState.players.length < 2) {
        alert('Se necesitan al menos 2 jugadores para iniciar.');
        return;
    }

    // Mostrar loading
    const button = document.getElementById('start-game-btn');
    const originalText = button.textContent;
    button.textContent = 'Iniciando...';
    button.disabled = true;

    try {
        // Obtener preguntas aleatorias
        const questions = getRandomQuestions(20);
        
        // Iniciar partida en Firebase
        const success = await window.firebaseManager.startGame(gameState.gameCode, questions);
        
        if (success) {
            gameState.currentQuestions = questions;
            gameState.currentQuestionIndex = 0;
            gameState.gameInProgress = true;

            // Si es host, ir a pantalla de monitoreo
            if (gameState.isHost) {
                hostMonitoringState.gameStartTime = Date.now();
                addGameEvent('success', 'Partida iniciada por el host');
                addGameEvent('info', `${gameState.players.length - 1} jugadores comenzaron la partida`);
                
                // Inicializar monitoreo
                initializeHostMonitoring();
                showScreen('hostMonitoring');
                startMonitoringUpdates();
            } else {
                // Los jugadores van a la pantalla de juego normal
                showScreen('game');
                displayQuestion();
                startTimer();
            }
        } else {
            throw new Error('No se pudo iniciar la partida');
        }
    } catch (error) {
        console.error('Error al iniciar partida:', error);
        alert('Error al iniciar la partida. Inténtalo de nuevo.');
        button.textContent = originalText;
        button.disabled = false;
    }
}

// ==================== FUNCIONES DE MONITOREO DEL HOST ====================

// Inicializar la pantalla de monitoreo del host
function initializeHostMonitoring() {
    // Actualizar información básica
    document.getElementById('monitoring-game-code').textContent = gameState.gameCode;
    document.getElementById('monitoring-game-name').textContent = gameState.gameName;
    document.getElementById('monitoring-game-status').textContent = 'En progreso';
    
    // Configurar event listeners para controles del host
    document.getElementById('force-finish-game-btn').addEventListener('click', forceFinishGame);
    document.getElementById('cancel-monitoring-btn').addEventListener('click', cancelGameFromMonitoring);
    
    // Limpiar log de eventos
    const logContainer = document.getElementById('game-events-log');
    logContainer.innerHTML = '';
    
    // Mostrar eventos iniciales
    hostMonitoringState.gameEvents.forEach(event => {
        addLogEntry(event);
    });
}

// Actualizar la pantalla de monitoreo
function updateHostMonitoring() {
    if (!screens.hostMonitoring || !screens.hostMonitoring.classList.contains('active')) {
        return;
    }

    // Actualizar pregunta actual
    updateCurrentQuestionDisplay();
    
    // Actualizar estado de jugadores
    updatePlayersMonitoring();
    
    // Actualizar estadísticas
    updateGameStatistics();
    
    // Actualizar tiempo transcurrido
    updateElapsedTime();
}

// Actualizar la visualización de la pregunta actual
function updateCurrentQuestionDisplay() {
    if (!gameState.currentQuestions || gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
        document.getElementById('monitoring-question-text').textContent = 'Partida finalizada';
        document.getElementById('monitoring-current-question').textContent = '20';
        return;
    }

    const currentQuestion = gameState.currentQuestions[gameState.currentQuestionIndex];
    
    document.getElementById('monitoring-current-question').textContent = gameState.currentQuestionIndex + 1;
    document.getElementById('monitoring-question-text').textContent = currentQuestion.question;
    
    // Mostrar respuestas con indicador de correcta
    const answersContainer = document.getElementById('monitoring-question-answers');
    answersContainer.innerHTML = '';
    
    ['a', 'b', 'c', 'd'].forEach(key => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-preview';
        if (key === currentQuestion.correct) {
            answerDiv.classList.add('correct');
        }
        answerDiv.innerHTML = `<strong>${key.toUpperCase()}:</strong> ${currentQuestion.answers[key]}`;
        answersContainer.appendChild(answerDiv);
    });
}

// Actualizar el estado de los jugadores
function updatePlayersMonitoring() {
    const playersGrid = document.getElementById('monitoring-players-grid');
    playersGrid.innerHTML = '';
    
    // Filtrar solo jugadores (no el host)
    const players = gameState.players.filter(player => !player.isHost);
    
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-monitoring-item';
        
        // Determinar estado del jugador
        let playerStatus = 'Conectado';
        let statusClass = 'playing';
        
        if (player.finished) {
            playerStatus = 'Terminado';
            statusClass = 'finished';
        } else if (player.disconnected) {
            playerStatus = 'Desconectado';
            statusClass = 'disconnected';
        }
        
        playerDiv.classList.add(statusClass);
        
        const progressText = player.finished 
            ? '20/20 preguntas' 
            : `${Math.min(gameState.currentQuestionIndex + 1, 20)}/20 preguntas`;
        
        playerDiv.innerHTML = `
            <div class="player-info-monitoring">
                <div class="player-name-monitoring">${player.name}</div>
                <div class="player-status-monitoring">${playerStatus}</div>
            </div>
            <div class="player-stats-monitoring">
                <div class="player-score-monitoring">${player.score || 0} pts</div>
                <div class="player-progress-monitoring">${progressText}</div>
            </div>
        `;
        
        playersGrid.appendChild(playerDiv);
    });
}

// Actualizar estadísticas del juego
function updateGameStatistics() {
    const players = gameState.players.filter(player => !player.isHost);
    const activePlayers = players.filter(player => !player.finished && !player.disconnected);
    const finishedPlayers = players.filter(player => player.finished);
    
    document.getElementById('active-players-count').textContent = activePlayers.length;
    document.getElementById('finished-players-count').textContent = finishedPlayers.length;
    
    // Calcular puntuación promedio
    const totalScore = players.reduce((sum, player) => sum + (player.score || 0), 0);
    const averageScore = players.length > 0 ? Math.round(totalScore / players.length) : 0;
    document.getElementById('average-score').textContent = averageScore;
}

// Actualizar tiempo transcurrido
function updateElapsedTime() {
    if (!hostMonitoringState.gameStartTime) return;
    
    const elapsed = Date.now() - hostMonitoringState.gameStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    document.getElementById('game-elapsed-time').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Iniciar actualizaciones periódicas del monitoreo
function startMonitoringUpdates() {
    // Actualizar cada 2 segundos
    hostMonitoringState.updateInterval = setInterval(updateHostMonitoring, 2000);
}

// Detener actualizaciones del monitoreo
function stopMonitoringUpdates() {
    if (hostMonitoringState.updateInterval) {
        clearInterval(hostMonitoringState.updateInterval);
        hostMonitoringState.updateInterval = null;
    }
}

// Agregar evento al log
function addGameEvent(type, message) {
    const event = {
        type: type, // 'info', 'success', 'warning', 'error'
        message: message,
        timestamp: Date.now()
    };
    
    hostMonitoringState.gameEvents.push(event);
    
    // Mantener solo los últimos 50 eventos
    if (hostMonitoringState.gameEvents.length > 50) {
        hostMonitoringState.gameEvents.shift();
    }
    
    // Si estamos en la pantalla de monitoreo, agregar al DOM
    if (screens.hostMonitoring && screens.hostMonitoring.classList.contains('active')) {
        addLogEntry(event);
    }
}

// Agregar entrada al log visual
function addLogEntry(event) {
    const logContainer = document.getElementById('game-events-log');
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${event.type}`;
    
    const time = new Date(event.timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    logEntry.innerHTML = `
        <span class="log-time">${time}</span>
        <span class="log-message">${event.message}</span>
    `;
    
    logContainer.appendChild(logEntry);
    
    // Scroll automático al final
    logContainer.scrollTop = logContainer.scrollHeight;
    
    // Mantener solo las últimas 20 entradas visibles
    while (logContainer.children.length > 20) {
        logContainer.removeChild(logContainer.firstChild);
    }
}

// Forzar finalización de la partida (botón de emergencia)
async function forceFinishGame() {
    const confirmation = confirm(
        '¿Estás seguro de que quieres terminar la partida forzosamente?\n\n' +
        'Esto finalizará inmediatamente la partida para todos los jugadores.'
    );
    
    if (!confirmation) return;
    
    try {
        addGameEvent('warning', 'Host forzó la finalización de la partida');
        
        // Actualizar puntajes de todos los jugadores como terminados
        const players = gameState.players.filter(player => !player.isHost);
        
        for (const player of players) {
            if (!player.finished) {
                await window.firebaseManager.updatePlayerScore(
                    gameState.gameCode, 
                    player.name, 
                    player.score || 0
                );
            }
        }
        
        // Finalizar partida
        await window.firebaseManager.finishGame(gameState.gameCode);
        addGameEvent('success', 'Partida finalizada forzosamente');
        
    } catch (error) {
        console.error('Error al forzar finalización:', error);
        addGameEvent('error', 'Error al forzar finalización de partida');
        alert('Error al terminar la partida. Inténtalo de nuevo.');
    }
}

// Cancelar partida desde monitoreo
async function cancelGameFromMonitoring() {
    const confirmation = confirm(
        '¿Estás seguro de que quieres cancelar la partida?\n\n' +
        'Esto eliminará completamente la partida y desconectará a todos los jugadores.'
    );
    
    if (!confirmation) return;
    
    try {
        addGameEvent('warning', 'Host canceló la partida');
        await window.firebaseManager.deleteGame(gameState.gameCode);
        
        stopMonitoringUpdates();
        resetGameState();
        showScreen('home');
    } catch (error) {
        console.error('Error al cancelar partida:', error);
        addGameEvent('error', 'Error al cancelar partida');
        alert('Error al cancelar la partida.');
    }
}

// ==================== FUNCIONES DE JUEGO PARA JUGADORES ====================

// Mostrar pregunta actual
function displayQuestion() {
    // Verificar que tengamos preguntas y una pregunta válida
    if (!gameState.currentQuestions || 
        gameState.currentQuestionIndex >= gameState.currentQuestions.length ||
        !gameState.currentQuestions[gameState.currentQuestionIndex]) {
        console.error('Error: No hay pregunta válida para mostrar');
        return;
    }

    const question = gameState.currentQuestions[gameState.currentQuestionIndex];
    
    // Verificar que la pregunta tenga la estructura correcta
    if (!question.question || !question.answers) {
        console.error('Error: Estructura de pregunta inválida', question);
        return;
    }
    
    document.getElementById('current-question').textContent = gameState.currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-score').textContent = gameState.score;

    // Actualizar respuestas
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        const answerKey = ['a', 'b', 'c', 'd'][index];
        const answerText = question.answers[answerKey];
        
        if (answerText) {
            btn.querySelector('.answer-text').textContent = answerText;
            btn.disabled = false;
            btn.className = 'answer-btn'; // Reset clases
            btn.dataset.answer = answerKey;
        }
    });

    gameState.selectedAnswer = null;
    gameState.timeRemaining = 30;
    updateTimer();
}

// Iniciar temporizador
function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeRemaining--;
        updateTimer();

        if (gameState.timeRemaining <= 0) {
            timeUp();
        }
    }, 1000);
}

// Actualizar temporizador en UI
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = gameState.timeRemaining;
    
    if (gameState.timeRemaining <= 10) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

// Detener temporizador
function stopTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

// Seleccionar respuesta
function selectAnswer(event) {
    if (gameState.selectedAnswer) return;

    const selectedBtn = event.currentTarget;
    const selectedAnswerKey = selectedBtn.dataset.answer;
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];

    gameState.selectedAnswer = selectedAnswerKey;
    stopTimer();

    // Marcar respuesta seleccionada
    selectedBtn.classList.add('selected');

    // Deshabilitar todos los botones
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Mostrar respuesta correcta despues de un breve delay
    setTimeout(() => {
        showCorrectAnswer();
    }, 1000);
}

// Mostrar respuesta correcta
function showCorrectAnswer() {
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];
    const correctAnswerKey = question.correct;

    document.querySelectorAll('.answer-btn').forEach(btn => {
        const answerKey = btn.dataset.answer;
        
        if (answerKey === correctAnswerKey) {
            btn.classList.add('correct');
        } else if (answerKey === gameState.selectedAnswer && answerKey !== correctAnswerKey) {
            btn.classList.add('incorrect');
        }
    });

    // Calcular puntuacion si la respuesta es correcta
    if (gameState.selectedAnswer === correctAnswerKey) {
        const points = calculateScore(gameState.currentQuestionIndex + 1, gameState.timeRemaining);
        gameState.score += points;
        document.getElementById('current-score').textContent = gameState.score;
    }

    // Continuar a la siguiente pregunta
    setTimeout(() => {
        nextQuestion();
    }, 3000);
}

// Tiempo agotado
function timeUp() {
    if (gameState.selectedAnswer) return;

    stopTimer();
    
    // Deshabilitar todos los botones
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Mostrar respuesta correcta
    setTimeout(() => {
        showCorrectAnswer();
    }, 500);
}

// Siguiente pregunta
function nextQuestion() {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
        // Fin del juego
        endGame();
    } else {
        // Mostrar siguiente pregunta
        displayQuestion();
        startTimer();
    }
}

// Finalizar juego
async function endGame() {
    console.log('Finalizando juego para:', gameState.username);
    
    // Detener timer y marcar como no en progreso
    stopTimer();
    gameState.gameInProgress = false;
    
    try {
        // Guardar puntuación del jugador en Firebase
        console.log('Guardando puntuación:', gameState.score);
        await window.firebaseManager.updatePlayerScore(
            gameState.gameCode, 
            gameState.username, 
            gameState.score
        );

        // Mostrar pantalla de espera
        showWaitingScreen();

        // Solo el host verifica si todos terminaron
        if (gameState.isHost) {
            console.log('Soy el host, verificando si todos terminaron...');
            
            // Esperar un poco para asegurar que la actualización se propagó
            setTimeout(async () => {
                const allFinished = await window.firebaseManager.checkAllPlayersFinished(gameState.gameCode);
                console.log('Todos los jugadores terminaron:', allFinished);
                
                if (allFinished) {
                    console.log('Finalizando partida como host...');
                    const finalResults = await window.firebaseManager.finishGame(gameState.gameCode);
                    console.log('Resultados finales:', finalResults);
                }
            }, 3000); // 3 segundos de delay
        }
    } catch (error) {
        console.error('Error al finalizar juego:', error);
        // Fallback a resultados locales
        showLocalResults();
    }
}

// Mostrar pantalla de espera
function showWaitingScreen() {
    document.getElementById('player-final-score').textContent = `${gameState.score} puntos`;
    updateWaitingScreen();
    showScreen('waiting');
}

// Actualizar pantalla de espera
function updateWaitingScreen(gameData = null) {
    const statusContainer = document.getElementById('players-waiting-status');
    if (!statusContainer) return;
    
    statusContainer.innerHTML = '';

    const players = gameData ? gameData.players : gameState.players;
    
    if (!players || players.length === 0) return;
    
    players.forEach(player => {
        const statusElement = document.createElement('div');
        statusElement.className = 'player-status-item';
        
        const isFinished = player.finished === true;
        const statusClass = isFinished ? 'status-finished' : 'status-playing';
        const statusText = isFinished ? 'Terminado' : 'Jugando...';
        
        statusElement.innerHTML = `
            <span class="player-status-name">${player.name}</span>
            <span class="${statusClass}">${statusText}</span>
        `;
        statusContainer.appendChild(statusElement);
    });
}

// Mostrar resultados locales (fallback)
function showLocalResults() {
    // Simular resultados de otros jugadores para demo
    const finalResults = [
        { name: gameState.username, score: gameState.score, position: 1 }
    ];

    // Agregar jugadores ficticios si es necesario para demo
    gameState.players.forEach((player, index) => {
        if (player.name !== gameState.username) {
            finalResults.push({
                name: player.name,
                score: Math.floor(Math.random() * gameState.score * 1.2),
                position: index + 1
            });
        }
    });

    // Ordenar por puntuacion
    finalResults.sort((a, b) => b.score - a.score);
    finalResults.forEach((result, index) => {
        result.position = index + 1;
    });

    gameState.results = finalResults;

    // Mostrar resultados
    displayResults();
    showScreen('results');
}

// Mostrar resultados finales
function displayResults() {
    const results = gameState.results;
    
    // Actualizar podio (top 3)
    const podiumPlaces = ['first-place', 'second-place', 'third-place'];
    
    podiumPlaces.forEach((placeId, index) => {
        const placeElement = document.getElementById(placeId);
        
        if (results[index]) {
            const player = results[index];
            placeElement.querySelector('.player-name').textContent = player.name;
            placeElement.querySelector('.player-score').textContent = `${player.score || 0} puntos`;
            placeElement.style.display = 'block';
        } else {
            placeElement.style.display = 'none';
        }
    });

    // Actualizar lista completa de resultados
    const resultsList = document.getElementById('final-results-list');
    resultsList.innerHTML = '';

    results.forEach((player, index) => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        resultElement.innerHTML = `
            <span class="result-position">${index + 1}°</span>
            <span class="result-name">${player.name}</span>
            <span class="result-score">${player.score || 0} puntos</span>
        `;
        resultsList.appendChild(resultElement);
    });
}

// Cancelar partida
async function cancelGame() {
    if (confirm('¿Estas seguro de que quieres cancelar la partida?')) {
        try {
            // Eliminar partida de Firebase
            await window.firebaseManager.deleteGame(gameState.gameCode);
            resetGameState();
            showScreen('home');
        } catch (error) {
            console.error('Error al cancelar partida:', error);
            // Aunque haya error, resetear el estado local
            resetGameState();
            showScreen('home');
        }
    }
}

// Salir de partida
async function leaveGame() {
    if (confirm('¿Estas seguro de que quieres salir de la partida?')) {
        try {
            // Remover jugador de Firebase
            await window.firebaseManager.removePlayer(gameState.gameCode, gameState.username);
            resetGameState();
            showScreen('home');
        } catch (error) {
            console.error('Error al salir de partida:', error);
            // Aunque haya error, resetear el estado local
            resetGameState();
            showScreen('home');
        }
    }
}

// Reiniciar estado del juego
function resetGameState() {
    stopTimer();
    stopMonitoringUpdates();
    
    // Limpiar listener de Firebase
    if (gameState.gameListener && gameState.gameCode) {
        window.firebaseManager.removeListener(gameState.gameCode);
    }
    
    gameState = {
        isHost: false,
        gameCode: '',
        gameName: '',
        username: '',
        players: [],
        currentQuestions: [],
        currentQuestionIndex: 0,
        score: 0,
        timer: null,
        timeRemaining: 30,
        gameInProgress: false,
        selectedAnswer: null,
        results: [],
        gameListener: null
    };
    
    // Limpiar estado de monitoreo
    hostMonitoringState = {
        gameStartTime: null,
        currentQuestionStartTime: null,
        gameEvents: [],
        updateInterval: null
    };
}

// ==================== FUNCIONES DE DEBUG ====================

// Funciones de utilidad para debugging
window.gameState = gameState;
window.debugFunctions = {
    showScreen: showScreen,
    
    createDemoGame: async () => {
        // Simular creacion de partida demo
        document.getElementById('host-username').value = 'Jugador1';
        document.getElementById('game-name').value = 'Partida Demo';
        await createGame();
    },
    
    joinDemoGame: async (gameCode) => {
        // Simular union a partida demo
        document.getElementById('player-username').value = 'Jugador2';
        document.getElementById('game-code').value = gameCode || 'DEMO01';
        await joinGame();
    },
    
    getFirebaseManager: () => window.firebaseManager,
    
    diagnosticTest: async () => {
        console.log('DIAGNOSTICO COMPLETO DEL SISTEMA');
        console.log('=====================================');
        
        // 1. Verificar carga de Firebase
        console.log('1. Firebase Manager:', !!window.firebaseManager);
        
        if (!window.firebaseManager) {
            console.error('Firebase Manager no está cargado');
            return;
        }
        
        // 2. Test de conectividad
        console.log('2. Testeando conectividad...');
        try {
            const testCode = 'TEST' + Math.random().toString(36).substr(2, 2).toUpperCase();
            const testData = {
                code: testCode,
                name: 'Test Connection',
                host: 'TestUser',
                players: [{ name: 'TestUser', id: 'test', isHost: true }],
                maxPlayers: 2,
                status: 'waiting'
            };
            
            console.log(`Creando partida de test: ${testCode}`);
            const createResult = await window.firebaseManager.createGame(testData);
            console.log(`Creación exitosa:`, createResult);
            
            if (createResult) {
                console.log(`Buscando partida de test: ${testCode}`);
                const findResult = await window.firebaseManager.joinGame(testCode);
                console.log(`Búsqueda exitosa:`, findResult);
                
                // Limpiar partida de test
                await window.firebaseManager.deleteGame(testCode);
                console.log(`Partida de test eliminada`);
                
                if (findResult) {
                    console.log('DIAGNOSTICO: SISTEMA FUNCIONANDO CORRECTAMENTE');
                } else {
                    console.error('DIAGNOSTICO: ERROR EN BUSQUEDA DE PARTIDAS');
                }
            } else {
                console.error('DIAGNOSTICO: ERROR EN CREACION DE PARTIDAS');
            }
            
        } catch (error) {
            console.error('DIAGNOSTICO: ERROR DE CONECTIVIDAD', error);
        }
        
        console.log('=====================================');
        console.log('Diagnóstico completado');
    },
    
    listAllGames: async () => {
        console.log('LISTADO DE PARTIDAS ACTIVAS');
        console.log('==============================');
        
        // Esto requiere acceso directo a Firebase
        try {
            // Importar Firebase directamente para debug
            const { ref, get } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            const gamesRef = ref(window.firebaseManager.database, 'games');
            const snapshot = await get(gamesRef);
            
            if (snapshot.exists()) {
                const games = snapshot.val();
                console.log('Partidas encontradas:', Object.keys(games).length);
                
                Object.entries(games).forEach(([code, data]) => {
                    console.log(`${code}:`, {
                        nombre: data.name,
                        host: data.host,
                        jugadores: data.players?.length || 0,
                        estado: data.status,
                        creada: new Date(data.createdAt).toLocaleString()
                    });
                });
            } else {
                console.log('No hay partidas activas');
            }
        } catch (error) {
            console.error('Error al listar partidas:', error);
        }
        
        console.log('==============================');
    },
    
    checkPlayersStatus: async (gameCode) => {
        if (!gameCode) gameCode = gameState.gameCode;
        if (!gameCode) {
            console.log('No hay código de partida activo');
            return;
        }
        
        console.log('VERIFICANDO ESTADO DE JUGADORES');
        console.log('================================');
        
        try {
            const allFinished = await window.firebaseManager.checkAllPlayersFinished(gameCode);
            console.log(`Resultado final: Todos terminaron = ${allFinished}`);
            
            if (allFinished && gameState.isHost) {
                console.log('MANUALMENTE FINALIZANDO PARTIDA COMO HOST...');
                const finalResults = await window.firebaseManager.finishGame(gameCode);
                console.log('Resultados:', finalResults);
            }
        } catch (error) {
            console.error('Error al verificar estado:', error);
        }
        
        console.log('================================');
    },
    
    // Nueva función para testear monitoreo
    testHostMonitoring: () => {
        console.log('TESTEANDO MONITOREO DEL HOST');
        console.log('==============================');
        
        // Simular que somos host
        gameState.isHost = true;
        gameState.gameCode = 'TEST01';
        gameState.gameName = 'Partida de Prueba';
        gameState.players = [
            { name: 'Host', isHost: true, score: 0 },
            { name: 'Jugador1', isHost: false, score: 150, finished: false },
            { name: 'Jugador2', isHost: false, score: 200, finished: true },
            { name: 'Jugador3', isHost: false, score: 0, finished: false }
        ];
        
        // Simular preguntas
        gameState.currentQuestions = getRandomQuestions(5);
        gameState.currentQuestionIndex = 2;
        
        // Inicializar monitoreo
        hostMonitoringState.gameStartTime = Date.now() - 120000; // 2 minutos atrás
        
        // Agregar algunos eventos de prueba
        addGameEvent('success', 'Partida iniciada correctamente');
        addGameEvent('info', 'Jugador1 se unió a la partida');
        addGameEvent('info', 'Jugador2 se unió a la partida');
        addGameEvent('info', 'Jugador3 se unió a la partida');
        addGameEvent('success', 'Jugador2 terminó la partida con 200 puntos');
        addGameEvent('warning', 'Jugador3 está tardando mucho en responder');
        
        // Mostrar pantalla de monitoreo
        initializeHostMonitoring();
        showScreen('hostMonitoring');
        startMonitoringUpdates();
        
        console.log('Monitoreo del host activado');
        console.log('Estado del juego:', gameState);
        console.log('Estado de monitoreo:', hostMonitoringState);
    },
    
    // Función para simular finalización forzada
    simulateForceFinish: async () => {
        console.log('Simulando finalización forzada...');
        await forceFinishGame();
    },
    
    // Función para ver estado actual del monitoreo
    getMonitoringState: () => {
        console.log('ESTADO ACTUAL DEL MONITOREO');
        console.log('===========================');
        console.log('Game State:', gameState);
        console.log('Host Monitoring State:', hostMonitoringState);
        console.log('Pantalla activa:', Object.keys(screens).find(key => screens[key].classList.contains('active')));
        console.log('Es Host:', gameState.isHost);
        console.log('Juego en progreso:', gameState.gameInProgress);
    }
};

// Mensaje de ayuda en consola
console.log(`
FUNCIONES DE DEBUG DISPONIBLES:
==================================
debugFunctions.diagnosticTest()       - Diagnóstico completo del sistema
debugFunctions.listAllGames()         - Listar todas las partidas activas
debugFunctions.createDemoGame()       - Crear partida de prueba
debugFunctions.joinDemoGame(code)     - Unirse a partida con código
debugFunctions.getFirebaseManager()   - Acceder al manager de Firebase
debugFunctions.checkPlayersStatus()   - Verificar estado de jugadores
debugFunctions.testHostMonitoring()   - Probar pantalla de monitoreo del host
debugFunctions.simulateForceFinish()  - Simular finalización forzada
debugFunctions.getMonitoringState()   - Ver estado actual del monitoreo
gameState                            - Ver estado actual del juego

NUEVAS FUNCIONES PARA HOST:
debugFunctions.testHostMonitoring()   - Activa la pantalla de monitoreo de prueba
`);