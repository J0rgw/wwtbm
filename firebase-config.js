// Importar Firebase desde CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, onValue, push, remove, off } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDRqhoejBBl1tdinweT56GP2Y3bc67uq2Q",
    authDomain: "wwtbm-f8f64.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/0/project/wwtbm-f8f64/database/wwtbm-f8f64-default-rtdb/data/~2F?hl=es-419", // Esta URL la obtienes al crear Realtime Database
    projectId: "wwtbm-f8f64",
    storageBucket: "wwtbm-f8f64.firebasestorage.app",
    messagingSenderId: "217823605706",
    appId: "1:217823605706:web:ed904c36455e7d56d45533"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
            const gameRef = ref(this.database, `games/${gameData.code}`);
            await set(gameRef, {
                ...gameData,
                createdAt: Date.now(),
                status: 'waiting'
            });
            this.currentGameRef = gameRef;
            return true;
        } catch (error) {
            console.error('Error al crear partida:', error);
            return false;
        }
    }

    // Unirse a partida existente
    async joinGame(gameCode) {
        try {
            const gameRef = ref(this.database, `games/${gameCode}`);
            this.currentGameRef = gameRef;
            
            // Verificar si la partida existe
            return new Promise((resolve) => {
                onValue(gameRef, (snapshot) => {
                    const gameData = snapshot.val();
                    resolve(gameData !== null);
                }, { onlyOnce: true });
            });
        } catch (error) {
            console.error('Error al unirse a partida:', error);
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

    // Eliminar partida completa
    async deleteGame(gameCode) {
        try {
            const gameRef = ref(this.database, `games/${gameCode}`);
            await remove(gameRef);
            this.removeListener(gameCode);
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