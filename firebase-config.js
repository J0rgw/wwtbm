// Importar Firebase desde CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, onValue, push, remove, off } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDRqhoejBBl1tdinweT56GP2Y3bc67uq2Q",
    authDomain: "wwtbm-f8f64.firebaseapp.com",
    databaseURL: "https://wwtbm-f8f64-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "wwtbm-f8f64",
    storageBucket: "wwtbm-f8f64.firebasestorage.app",
    messagingSenderId: "217823605706",
    appId: "1:217823605706:web:ed904c36455e7d56d45533"
};

// Inicializar Firebase
console.log('Inicializando Firebase...');
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log('Firebase inicializado correctamente');

// Clase para manejar Firebase
class FirebaseGameManager {
    constructor() {
        this.database = database;
        this.currentGameRef = null;
        this.listeners = new Map();
    }

    // Crear nueva partida
    async createGame(gameData) {
        try {
            console.log(`Creando partida: ${gameData.code}`);
            const gameRef = ref(this.database, `games/${gameData.code}`);
            await set(gameRef, {
                ...gameData,
                createdAt: Date.now(),
                status: 'waiting'
            });
            console.log(`Partida creada exitosamente: ${gameData.code}`);
            this.currentGameRef = gameRef;
            return true;
        } catch (error) {
            console.error('Error al crear partida:', error);
            return false;
        }
    }

    // Verificar si la partida existe
    async joinGame(gameCode) {
        try {
            console.log(`Buscando partida: ${gameCode}`);
            const gameRef = ref(this.database, `games/${gameCode}`);
            this.currentGameRef = gameRef;
            
            // Verificar si la partida existe
            return new Promise((resolve, reject) => {
                onValue(gameRef, (snapshot) => {
                    const gameData = snapshot.val();
                    console.log(`Datos de partida encontrados:`, gameData);
                    resolve(gameData !== null);
                }, { onlyOnce: true }, (error) => {
                    console.error('Error al buscar partida:', error);
                    reject(error);
                });
            });
        } catch (error) {
            console.error('Error en joinGame:', error);
            return false;
        }
    }

    // Agregar jugador a la partida
    async addPlayer(gameCode, playerData) {
        try {
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            // Obtener datos actuales
            return new Promise((resolve) => {
                onValue(gameRef, async (snapshot) => {
                    const gameData = snapshot.val();
                    if (gameData) {
                        // Verificar si el jugador ya existe
                        const existingPlayer = gameData.players?.find(p => p.name === playerData.name);
                        if (existingPlayer) {
                            resolve(false);
                            return;
                        }

                        // Agregar nuevo jugador
                        const updatedPlayers = gameData.players ? [...gameData.players, playerData] : [playerData];
                        await set(gameRef, {
                            ...gameData,
                            players: updatedPlayers
                        });
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al agregar jugador:', error);
            return false;
        }
    }

    // Escuchar cambios en la partida
    listenToGame(gameCode, callback) {
        const gameRef = ref(this.database, `games/${gameCode}`);
        
        // Remover listener anterior si existe
        this.removeListener(gameCode);
        
        // Agregar nuevo listener
        const unsubscribe = onValue(gameRef, (snapshot) => {
            const gameData = snapshot.val();
            callback(gameData);
        });
        
        // Guardar referencia del listener
        this.listeners.set(gameCode, unsubscribe);
        
        return unsubscribe;
    }

    // Actualizar estado de la partida
    async updateGame(gameCode, updates) {
        try {
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            return new Promise((resolve) => {
                onValue(gameRef, async (snapshot) => {
                    const currentData = snapshot.val();
                    if (currentData) {
                        await set(gameRef, {
                            ...currentData,
                            ...updates,
                            updatedAt: Date.now()
                        });
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al actualizar partida:', error);
            return false;
        }
    }

    // Iniciar partida
    async startGame(gameCode, questions) {
        return this.updateGame(gameCode, {
            status: 'playing',
            questions: questions,
            currentQuestion: 0,
            startedAt: Date.now()
        });
    }

    // Remover jugador de la partida
    async removePlayer(gameCode, playerName) {
        try {
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            return new Promise((resolve) => {
                onValue(gameRef, async (snapshot) => {
                    const gameData = snapshot.val();
                    if (gameData && gameData.players) {
                        const updatedPlayers = gameData.players.filter(p => p.name !== playerName);
                        await set(gameRef, {
                            ...gameData,
                            players: updatedPlayers
                        });
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al remover jugador:', error);
            return false;
        }
    }

    // Actualizar puntuación de un jugador
    async updatePlayerScore(gameCode, playerName, score) {
        try {
            console.log(`Actualizando puntuación de ${playerName}: ${score} puntos`);
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            return new Promise((resolve) => {
                onValue(gameRef, async (snapshot) => {
                    const gameData = snapshot.val();
                    if (gameData && gameData.players) {
                        console.log('Jugadores antes de actualizar:', gameData.players.map(p => ({
                            name: p.name,
                            finished: p.finished,
                            score: p.score
                        })));
                        
                        const updatedPlayers = gameData.players.map(player => {
                            if (player.name === playerName) {
                                return { 
                                    ...player, 
                                    score: score, 
                                    finished: true,
                                    finishedAt: Date.now()
                                };
                            }
                            return player;
                        });
                        
                        console.log('Jugadores después de actualizar:', updatedPlayers.map(p => ({
                            name: p.name,
                            finished: p.finished,
                            score: p.score
                        })));
                        
                        await set(gameRef, {
                            ...gameData,
                            players: updatedPlayers,
                            lastUpdate: Date.now()
                        });
                        
                        console.log(`Puntuación actualizada exitosamente para ${playerName}`);
                        resolve(true);
                    } else {
                        console.error('No se encontraron datos de juego o jugadores');
                        resolve(false);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al actualizar puntuación:', error);
            return false;
        }
    }

    // Verificar si todos los jugadores han terminado
    async checkAllPlayersFinished(gameCode) {
        try {
            console.log(`Verificando si todos terminaron en: ${gameCode}`);
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            return new Promise((resolve) => {
                onValue(gameRef, (snapshot) => {
                    const gameData = snapshot.val();
                    if (gameData && gameData.players) {
                        console.log('Jugadores actuales:', gameData.players.map(p => ({
                            name: p.name,
                            finished: p.finished,
                            score: p.score
                        })));
                        
                        const playersWithFinishedStatus = gameData.players.filter(p => p.finished !== undefined);
                        const finishedPlayers = gameData.players.filter(p => p.finished === true);
                        
                        console.log(`Jugadores con estado: ${playersWithFinishedStatus.length}`);
                        console.log(`Jugadores terminados: ${finishedPlayers.length}`);
                        console.log(`Total jugadores: ${gameData.players.length}`);
                        
                        // Todos han terminado si el número de jugadores terminados es igual al total
                        const allFinished = finishedPlayers.length === gameData.players.length && finishedPlayers.length > 0;
                        console.log(`Resultado: todos terminaron = ${allFinished}`);
                        
                        resolve(allFinished);
                    } else {
                        console.log('No se encontraron datos de juego o jugadores');
                        resolve(false);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al verificar jugadores terminados:', error);
            return false;
        }
    }

    // Finalizar partida y marcar como completada
    async finishGame(gameCode) {
        try {
            console.log(`Finalizando partida: ${gameCode}`);
            const gameRef = ref(this.database, `games/${gameCode}`);
            
            return new Promise((resolve) => {
                onValue(gameRef, async (snapshot) => {
                    const gameData = snapshot.val();
                    if (gameData) {
                        // Ordenar jugadores por puntuación
                        const sortedPlayers = [...gameData.players].sort((a, b) => (b.score || 0) - (a.score || 0));
                        
                        console.log('Resultados finales ordenados:', sortedPlayers.map(p => ({
                            name: p.name,
                            score: p.score || 0
                        })));
                        
                        await set(gameRef, {
                            ...gameData,
                            status: 'finished',
                            finalResults: sortedPlayers,
                            finishedAt: Date.now()
                        });
                        
                        console.log('Partida finalizada exitosamente');
                        resolve(sortedPlayers);
                    } else {
                        console.error('No se encontraron datos de partida para finalizar');
                        resolve([]);
                    }
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al finalizar partida:', error);
            return [];
        }
    }

    // Eliminar partida completa
    async deleteGame(gameCode) {
        try {
            console.log(`Eliminando partida: ${gameCode}`);
            const gameRef = ref(this.database, `games/${gameCode}`);
            await remove(gameRef);
            this.removeListener(gameCode);
            console.log('Partida eliminada exitosamente');
            return true;
        } catch (error) {
            console.error('Error al eliminar partida:', error);
            return false;
        }
    }

    // Remover listener específico
    removeListener(gameCode) {
        const listener = this.listeners.get(gameCode);
        if (listener) {
            off(this.currentGameRef);
            this.listeners.delete(gameCode);
        }
    }

    // Limpiar todos los listeners
    cleanup() {
        this.listeners.forEach((listener, gameCode) => {
            this.removeListener(gameCode);
        });
        this.listeners.clear();
    }
}

// Exportar instancia global
window.firebaseManager = new FirebaseGameManager();

// También exportar para uso con módulos
export { FirebaseGameManager, database };