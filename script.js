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
    gameListener: null // Para Firebase listener
};

// Referencias a elementos del DOM
const screens = {
    home: document.getElementById('home-screen'),
    createGame: document.getElementById('create-game-screen'),
    joinGame: document.getElementById('join-game-screen'),
    hostLobby: document.getElementById('host-lobby-screen'),
    playerLobby: document.getElementById('player-lobby-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen')
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
    document.getElementById('start-game-btn').addEventListener('click', startGame);
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
        console.log(`Usuario: ${username}`);
        console.log(`Firebase Manager disponible:`, !!window.firebaseManager);

        // Verificar si Firebase está cargado
        if (!window.firebaseManager) {
            throw new Error('Firebase no está cargado. Recarga la página.');
        }

        // Verificar si la partida existe
        console.log(`Verificando existencia de partida...`);
        const gameExists = await window.firebaseManager.joinGame(gameCode);
        console.log(`Partida existe:`, gameExists);
        
        if (!gameExists) {
            alert(`No se encontró una partida con el código: ${gameCode}\n\nVerifica:\n- Que el código sea correcto\n- Que la partida esté activa\n- Tu conexión a internet`);
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

        console.log(`Agregando jugador:`, newPlayer);

        // Intentar agregar jugador a la partida
        const success = await window.firebaseManager.addPlayer(gameCode, newPlayer);
        console.log(`Jugador agregado:`, success);
        
        if (success) {
            // Configurar listener para cambios en la partida
            setupGameListener();
            showScreen('playerLobby');
        } else {
            alert('Ya hay un jugador con ese nombre en la partida o la partida está llena.');
        }
    } catch (error) {
        console.error('Error completo al unirse a partida:', error);
        console.error('Stack trace:', error.stack);
        alert(`Error al conectarse a la partida:\n${error.message}\n\nRevisa la consola para más detalles.`);
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
            alert('La partida ha sido cancelada por el host.');
            resetGameState();
            showScreen('home');
            return;
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

        // Verificar si el juego ha comenzado
        if (gameData.status === 'playing' && !gameState.gameInProgress) {
            gameState.currentQuestions = gameData.questions;
            gameState.gameInProgress = true;
            showScreen('game');
            displayQuestion();
            startTimer();
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

// Iniciar partida
async function startGame() {
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
            gameState.score = 0;
            gameState.gameInProgress = true;

            // Mostrar primera pregunta
            showScreen('game');
            displayQuestion();
            startTimer();
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

// Mostrar pregunta actual
function displayQuestion() {
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];
    
    document.getElementById('current-question').textContent = gameState.currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-score').textContent = gameState.score;

    // Actualizar respuestas
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        const answerKey = ['a', 'b', 'c', 'd'][index];
        const answerText = question.answers[answerKey];
        
        btn.querySelector('.answer-text').textContent = answerText;
        btn.disabled = false;
        btn.className = 'answer-btn'; // Reset clases
        btn.dataset.answer = answerKey;
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
function endGame() {
    gameState.gameInProgress = false;
    
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
            placeElement.querySelector('.player-score').textContent = `${player.score} puntos`;
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
            <span class="result-score">${player.score} puntos</span>
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
}

// Funciones de utilidad para debugging
window.gameState = gameState;
window.debugFunctions = {
    showScreen,
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
    
    // Nueva función de diagnóstico completo
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
    
    // Función para listar todas las partidas activas
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
    }
};

// Mensaje de ayuda en consola
console.log(`
FUNCIONES DE DEBUG DISPONIBLES:
==================================
debugFunctions.diagnosticTest()     - Diagnóstico completo del sistema
debugFunctions.listAllGames()       - Listar todas las partidas activas
debugFunctions.createDemoGame()     - Crear partida de prueba
debugFunctions.joinDemoGame(code)   - Unirse a partida con código
debugFunctions.getFirebaseManager() - Acceder al manager de Firebase
gameState                          - Ver estado actual del juego
`);