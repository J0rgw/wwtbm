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
    results: []
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
function createGame() {
    const username = document.getElementById('host-username').value.trim();
    const gameName = document.getElementById('game-name').value.trim();
    const maxPlayers = parseInt(document.getElementById('max-players').value);

    if (username.length < 2 || gameName.length < 3) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

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

    // Actualizar UI del lobby
    updateHostLobby();
    showScreen('hostLobby');

    // Simular almacenamiento local para demo
    localStorage.setItem('gameSession', JSON.stringify({
        code: gameState.gameCode,
        name: gameState.gameName,
        host: username,
        players: gameState.players
    }));
}

// Unirse a partida existente
function joinGame() {
    const username = document.getElementById('player-username').value.trim();
    const gameCode = document.getElementById('game-code').value.trim();

    if (username.length < 2 || gameCode.length !== 6) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Simular busqueda de partida
    const savedGame = localStorage.getItem('gameSession');
    if (!savedGame) {
        alert('No se encontro una partida con ese codigo.');
        return;
    }

    const gameData = JSON.parse(savedGame);
    if (gameData.code !== gameCode) {
        alert('Codigo de partida incorrecto.');
        return;
    }

    // Verificar si el nombre ya esta en uso
    if (gameData.players.some(player => player.name === username)) {
        alert('Ya hay un jugador con ese nombre en la partida.');
        return;
    }

    // Configurar estado del juego
    gameState.isHost = false;
    gameState.gameCode = gameCode;
    gameState.gameName = gameData.name;
    gameState.username = username;
    gameState.players = gameData.players;

    // Agregar jugador a la lista
    const newPlayer = {
        id: 'player_' + Date.now(),
        name: username,
        isHost: false,
        score: 0,
        ready: true
    };
    gameState.players.push(newPlayer);

    // Actualizar almacenamiento
    gameData.players = gameState.players;
    localStorage.setItem('gameSession', JSON.stringify(gameData));

    // Actualizar UI del lobby
    updatePlayerLobby();
    showScreen('playerLobby');
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
function startGame() {
    if (gameState.players.length < 2) {
        alert('Se necesitan al menos 2 jugadores para iniciar.');
        return;
    }

    // Obtener preguntas aleatorias
    gameState.currentQuestions = getRandomQuestions(20);
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.gameInProgress = true;

    // Mostrar primera pregunta
    showScreen('game');
    displayQuestion();
    startTimer();
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
function cancelGame() {
    if (confirm('¿Estas seguro de que quieres cancelar la partida?')) {
        localStorage.removeItem('gameSession');
        resetGameState();
        showScreen('home');
    }
}

// Salir de partida
function leaveGame() {
    if (confirm('¿Estas seguro de que quieres salir de la partida?')) {
        resetGameState();
        showScreen('home');
    }
}

// Reiniciar estado del juego
function resetGameState() {
    stopTimer();
    
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
        results: []
    };
}

// Funciones de utilidad para debugging
window.gameState = gameState;
window.debugFunctions = {
    showScreen,
    createDemoGame: () => {
        gameState.isHost = true;
        gameState.gameCode = 'DEMO01';
        gameState.gameName = 'Partida de Prueba';
        gameState.username = 'Jugador1';
        gameState.players = [
            { id: 'host', name: 'Jugador1', isHost: true, score: 0 },
            { id: 'p2', name: 'Jugador2', isHost: false, score: 0 },
            { id: 'p3', name: 'Jugador3', isHost: false, score: 0 }
        ];
        updateHostLobby();
        showScreen('hostLobby');
    },
    startDemoGame: () => {
        startGame();
    }
};