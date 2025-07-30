// Base de datos de preguntas sobre videojuegos
const QUESTIONS_DATABASE = [
    // Preguntas existentes (1-100)
    {
        id: 1,
        question: "¿Cual es el nombre del fontanero protagonista de la saga Super Mario?",
        answers: {
            a: "Luigi",
            b: "Mario",
            c: "Wario",
            d: "Waluigi"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 2,
        question: "¿En que año se lanzo el primer videojuego de Pokemon?",
        answers: {
            a: "1994",
            b: "1995",
            c: "1996",
            d: "1997"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 3,
        question: "¿Como se llama el protagonista de la saga The Legend of Zelda?",
        answers: {
            a: "Zelda",
            b: "Link",
            c: "Ganondorf",
            d: "Epona"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 4,
        question: "¿Que empresa desarrollo el videojuego Minecraft?",
        answers: {
            a: "Microsoft",
            b: "Sony",
            c: "Mojang",
            d: "Nintendo"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 5,
        question: "¿En que consola se lanzo originalmente Grand Theft Auto: Vice City?",
        answers: {
            a: "PlayStation 1",
            b: "PlayStation 2",
            c: "Xbox",
            d: "GameCube"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 6,
        question: "¿Cual es el nombre del dragon principal en The Elder Scrolls V: Skyrim?",
        answers: {
            a: "Paarthurnax",
            b: "Alduin",
            c: "Odahviing",
            d: "Durnehviir"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 7,
        question: "¿En que año se fundo la empresa Nintendo?",
        answers: {
            a: "1889",
            b: "1910",
            c: "1925",
            d: "1945"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 8,
        question: "¿Como se llama la protagonista de la saga Tomb Raider?",
        answers: {
            a: "Ada Wong",
            b: "Jill Valentine",
            c: "Lara Croft",
            d: "Samus Aran"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 9,
        question: "¿Que videojuego popularizo el genero battle royale?",
        answers: {
            a: "PUBG",
            b: "Fortnite",
            c: "Apex Legends",
            d: "H1Z1"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 10,
        question: "¿En que saga aparece el personaje Master Chief?",
        answers: {
            a: "Call of Duty",
            b: "Battlefield",
            c: "Halo",
            d: "Gears of War"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 11,
        question: "¿Cual es el nombre del reino donde transcurre Super Mario Bros?",
        answers: {
            a: "Reino Seta",
            b: "Reino Champiñon",
            c: "Reino Hongo",
            d: "Reino Peach"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 12,
        question: "¿Que empresa desarrollo la consola PlayStation?",
        answers: {
            a: "Microsoft",
            b: "Nintendo",
            c: "Sony",
            d: "Sega"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 13,
        question: "¿En que videojuego aparece por primera vez Sonic the Hedgehog?",
        answers: {
            a: "Sonic the Hedgehog (1991)",
            b: "Sonic the Hedgehog 2",
            c: "Sonic CD",
            d: "Sonic Spinball"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 14,
        question: "¿Como se llama la ciudad principal en Grand Theft Auto: San Andreas?",
        answers: {
            a: "Vice City",
            b: "Liberty City",
            c: "Los Santos",
            d: "Las Venturas"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 15,
        question: "¿Que compañia desarrollo el videojuego Pac-Man?",
        answers: {
            a: "Atari",
            b: "Namco",
            c: "Capcom",
            d: "Konami"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 16,
        question: "¿En que año se lanzo el primer Call of Duty?",
        answers: {
            a: "2002",
            b: "2003",
            c: "2004",
            d: "2005"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 17,
        question: "¿Cual es el nombre del protagonista de Half-Life?",
        answers: {
            a: "Gordon Freeman",
            b: "Adrian Shephard",
            c: "Barney Calhoun",
            d: "Eli Vance"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 18,
        question: "¿En que videojuego aparece el personaje Kratos?",
        answers: {
            a: "Devil May Cry",
            b: "God of War",
            c: "Dante's Inferno",
            d: "Bayonetta"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 19,
        question: "¿Que tipo de Pokemon es Pikachu?",
        answers: {
            a: "Fuego",
            b: "Agua",
            c: "Electrico",
            d: "Planta"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 20,
        question: "¿Cual es el nombre de la espada maestra en The Legend of Zelda?",
        answers: {
            a: "Master Sword",
            b: "Excalibur",
            c: "Espada Kokiri",
            d: "Espada del Heroe"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 21,
        question: "¿En que videojuego aparece el personaje Ryu?",
        answers: {
            a: "Tekken",
            b: "Street Fighter",
            c: "Mortal Kombat",
            d: "King of Fighters"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 22,
        question: "¿Como se llama el antagonista principal de la saga Final Fantasy VII?",
        answers: {
            a: "Kefka",
            b: "Sephiroth",
            c: "Ultimecia",
            d: "Exdeath"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 23,
        question: "¿Que empresa desarrollo Counter-Strike?",
        answers: {
            a: "id Software",
            b: "Epic Games",
            c: "Valve Corporation",
            d: "Activision"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 24,
        question: "¿En que año se lanzo World of Warcraft?",
        answers: {
            a: "2003",
            b: "2004",
            c: "2005",
            d: "2006"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 25,
        question: "¿Como se llama la protagonista de Metroid?",
        answers: {
            a: "Samus Aran",
            b: "Zero Suit",
            c: "Dark Samus",
            d: "Ridley"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 26,
        question: "¿Que videojuego incluye el mapa de_dust2?",
        answers: {
            a: "Call of Duty",
            b: "Counter-Strike",
            c: "Rainbow Six",
            d: "Valorant"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 27,
        question: "¿En que consola se lanzo originalmente Super Metroid?",
        answers: {
            a: "NES",
            b: "SNES",
            c: "Nintendo 64",
            d: "Game Boy"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 28,
        question: "¿Cual es el nombre del protagonista de Assassin's Creed?",
        answers: {
            a: "Ezio Auditore",
            b: "Altair Ibn-La'Ahad",
            c: "Connor Kenway",
            d: "Varia segun el juego"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 29,
        question: "¿Que empresa desarrollo Overwatch?",
        answers: {
            a: "Riot Games",
            b: "Blizzard Entertainment",
            c: "Epic Games",
            d: "Valve Corporation"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 30,
        question: "¿Como se llama el villano principal de Donkey Kong?",
        answers: {
            a: "Bowser",
            b: "King K. Rool",
            c: "Ganondorf",
            d: "Dedede"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 31,
        question: "¿En que año se lanzo Tetris?",
        answers: {
            a: "1984",
            b: "1985",
            c: "1986",
            d: "1987"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 32,
        question: "¿Cual es el nombre del personaje principal de Doom?",
        answers: {
            a: "Doom Guy",
            b: "Doom Marine",
            c: "Doom Slayer",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 33,
        question: "¿Que videojuego popularizo el termino 'Battle Royale'?",
        answers: {
            a: "DayZ",
            b: "Arma 3",
            c: "H1Z1",
            d: "PlayerUnknown's Battlegrounds"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 34,
        question: "¿En que saga aparece el personaje Solid Snake?",
        answers: {
            a: "Splinter Cell",
            b: "Metal Gear",
            c: "Hitman",
            d: "Dishonored"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 35,
        question: "¿Como se llama la moneda principal en Super Mario Bros?",
        answers: {
            a: "Estrella",
            b: "Moneda",
            c: "Champiñon",
            d: "Flor de fuego"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 36,
        question: "¿Que empresa desarrollo League of Legends?",
        answers: {
            a: "Valve Corporation",
            b: "Blizzard Entertainment",
            c: "Riot Games",
            d: "Epic Games"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 37,
        question: "¿En que videojuego aparece el personaje Geralt de Rivia?",
        answers: {
            a: "Dragon Age",
            b: "The Witcher",
            c: "Elder Scrolls",
            d: "Mass Effect"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 38,
        question: "¿Cual fue la primera consola portatil de Nintendo?",
        answers: {
            a: "Game Boy",
            b: "Game Gear",
            c: "Game Boy Color",
            d: "Virtual Boy"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 39,
        question: "¿En que año se lanzo Grand Theft Auto: Vice City?",
        answers: {
            a: "2001",
            b: "2002",
            c: "2003",
            d: "2004"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 40,
        question: "¿Como se llama el protagonista de BioShock Infinite?",
        answers: {
            a: "Jack Ryan",
            b: "Booker DeWitt",
            c: "Subject Delta",
            d: "Andrew Ryan"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 41,
        question: "¿Que tipo de juego es Dark Souls?",
        answers: {
            a: "FPS",
            b: "RTS",
            c: "RPG de accion",
            d: "Plataformas"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 42,
        question: "¿En que videojuego aparece el arma BFG 9000?",
        answers: {
            a: "Quake",
            b: "Doom",
            c: "Wolfenstein",
            d: "Unreal Tournament"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 43,
        question: "¿Cual es el nombre del mundo principal en World of Warcraft?",
        answers: {
            a: "Azeroth",
            b: "Draenor",
            c: "Outland",
            d: "Northrend"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 44,
        question: "¿Que empresa desarrollo Starcraft?",
        answers: {
            a: "Westwood Studios",
            b: "Blizzard Entertainment",
            c: "id Software",
            d: "3D Realms"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 45,
        question: "¿Como se llama la princesa en Super Mario Bros?",
        answers: {
            a: "Princesa Peach",
            b: "Princesa Zelda",
            c: "Princesa Daisy",
            d: "Princesa Rosalina"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 46,
        question: "¿En que año se lanzo el primer Gran Turismo?",
        answers: {
            a: "1996",
            b: "1997",
            c: "1998",
            d: "1999"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 47,
        question: "¿Cual es el nombre del protagonista de Persona 5?",
        answers: {
            a: "Yu Narukami",
            b: "Makoto Yuki",
            c: "Futaba Sakura",
            d: "Ren Amamiya"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 48,
        question: "¿Que videojuego incluye el nivel Green Hill Zone?",
        answers: {
            a: "Sonic the Hedgehog",
            b: "Super Mario Bros",
            c: "Mega Man",
            d: "Castlevania"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 49,
        question: "¿Como se llama el hermano menor de Mario?",
        answers: {
            a: "Bowser",
            b: "Yoshi",
            c: "Luigi",
            d: "Toad"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 50,
        question: "¿Que empresa desarrollo Resident Evil?",
        answers: {
            a: "Konami",
            b: "Capcom",
            c: "Square Enix",
            d: "Bandai Namco"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 51,
        question: "¿En que videojuego aparece la ciudad de Rapture?",
        answers: {
            a: "BioShock",
            b: "System Shock",
            c: "Dishonored",
            d: "Deus Ex"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 52,
        question: "¿Cual es el nombre del dragon en Spyro?",
        answers: {
            a: "Crash",
            b: "Spyro",
            c: "Cynder",
            d: "Ripto"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 53,
        question: "¿En que año se fundo Valve Corporation?",
        answers: {
            a: "1995",
            b: "1996",
            c: "1997",
            d: "1998"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 54,
        question: "¿Como se llama el protagonista de Red Dead Redemption?",
        answers: {
            a: "Arthur Morgan",
            b: "John Marston",
            c: "Dutch van der Linde",
            d: "Micah Bell"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 55,
        question: "¿Que videojuego popularizo los mapas procedurales?",
        answers: {
            a: "Diablo",
            b: "Rogue",
            c: "NetHack",
            d: "Minecraft"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 56,
        question: "¿En que consola se lanzo originalmente Super Mario 64?",
        answers: {
            a: "SNES",
            b: "Nintendo 64",
            c: "GameCube",
            d: "Wii"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 57,
        question: "¿Como se llama el protagonista de Devil May Cry?",
        answers: {
            a: "Nero",
            b: "Vergil",
            c: "Dante",
            d: "Sparda"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 58,
        question: "¿Que empresa desarrollo Age of Empires?",
        answers: {
            a: "Blizzard Entertainment",
            b: "Ensemble Studios",
            c: "Westwood Studios",
            d: "Relic Entertainment"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 59,
        question: "¿En que videojuego aparece el personaje Gordon Freeman?",
        answers: {
            a: "Half-Life",
            b: "Portal",
            c: "Left 4 Dead",
            d: "Team Fortress"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 60,
        question: "¿Cual es el nombre del gato en Crash Bandicoot?",
        answers: {
            a: "Dr. Neo Cortex",
            b: "Aku Aku",
            c: "Ripper Roo",
            d: "No hay un gato principal"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 61,
        question: "¿En que año se lanzo Street Fighter II?",
        answers: {
            a: "1990",
            b: "1991",
            c: "1992",
            d: "1993"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 62,
        question: "¿Como se llama la nave espacial de Samus en Metroid?",
        answers: {
            a: "Gunship",
            b: "Starship",
            c: "Spaceship",
            d: "Hunter Ship"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 63,
        question: "¿Que videojuego incluye el personaje Chun-Li?",
        answers: {
            a: "Tekken",
            b: "Street Fighter",
            c: "Mortal Kombat",
            d: "Dead or Alive"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 64,
        question: "¿En que planeta transcurre la accion de Doom?",
        answers: {
            a: "Tierra",
            b: "Marte",
            c: "Venus",
            d: "Pluton"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 65,
        question: "¿Cual es el nombre del jefe final de Super Mario Bros?",
        answers: {
            a: "King Koopa",
            b: "Bowser",
            c: "King Bowser",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 66,
        question: "¿Que empresa desarrollo SimCity?",
        answers: {
            a: "Electronic Arts",
            b: "Maxis",
            c: "Activision",
            d: "2K Games"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 67,
        question: "¿En que videojuego aparece el arma Portal Gun?",
        answers: {
            a: "Half-Life",
            b: "Portal",
            c: "Team Fortress",
            d: "Left 4 Dead"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 68,
        question: "¿Como se llama el protagonista de Final Fantasy VII?",
        answers: {
            a: "Squall Leonhart",
            b: "Tidus",
            c: "Cloud Strife",
            d: "Lightning"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 69,
        question: "¿Que consola introdujo el concepto de rumble/vibracion?",
        answers: {
            a: "PlayStation",
            b: "Nintendo 64",
            c: "Sega Saturn",
            d: "Dreamcast"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 70,
        question: "¿En que videojuego aparece el personaje Sub-Zero?",
        answers: {
            a: "Street Fighter",
            b: "Tekken",
            c: "Mortal Kombat",
            d: "King of Fighters"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 71,
        question: "¿Cual es el nombre del mundo de Super Mario Bros 3?",
        answers: {
            a: "Reino Champiñon",
            b: "Reino Seta",
            c: "Mundo Mario",
            d: "Reino de los Reyes Koopa"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 72,
        question: "¿Que empresa desarrollo Diablo?",
        answers: {
            a: "Blizzard North",
            b: "Blizzard Entertainment",
            c: "Condor Inc",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 73,
        question: "¿En que año se lanzo el primer Warcraft?",
        answers: {
            a: "1993",
            b: "1994",
            c: "1995",
            d: "1996"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 74,
        question: "¿Como se llama el protagonista de Ico?",
        answers: {
            a: "Ico",
            b: "Yorda",
            c: "Wander",
            d: "Shadow"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 75,
        question: "¿Que videojuego incluye el nivel E1M1?",
        answers: {
            a: "Quake",
            b: "Doom",
            c: "Wolfenstein 3D",
            d: "Duke Nukem"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 76,
        question: "¿En que consola aparecio por primera vez Halo?",
        answers: {
            a: "PC",
            b: "Xbox",
            c: "Xbox 360",
            d: "PlayStation"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 77,
        question: "¿Como se llama la IA de Halo?",
        answers: {
            a: "Cortana",
            b: "JARVIS",
            c: "HAL 9000",
            d: "GLaDOS"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 78,
        question: "¿Que empresa desarrollo Goldeneye 007?",
        answers: {
            a: "Nintendo",
            b: "Rare",
            c: "Activision",
            d: "EA"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 79,
        question: "¿En que videojuego aparece el personaje Lara Croft por primera vez?",
        answers: {
            a: "Tomb Raider",
            b: "Tomb Raider II",
            c: "Tomb Raider: Anniversary",
            d: "Tomb Raider: Legend"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 80,
        question: "¿Cual es el nombre del cientifico loco en Crash Bandicoot?",
        answers: {
            a: "Dr. Neo Cortex",
            b: "Dr. N. Gin",
            c: "Dr. N. Tropy",
            d: "Dr. N. Brio"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 81,
        question: "¿En que año se lanzo el primer Pokemon para Game Boy?",
        answers: {
            a: "1995",
            b: "1996",
            c: "1997",
            d: "1998"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 82,
        question: "¿Como se llama el hermano malvado de Mario?",
        answers: {
            a: "Luigi",
            b: "Bowser",
            c: "Wario",
            d: "Waluigi"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 83,
        question: "¿Que videojuego popularizo el genero de los MOBA?",
        answers: {
            a: "Defense of the Ancients",
            b: "League of Legends",
            c: "Heroes of Newerth",
            d: "Dota 2"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 84,
        question: "¿En que videojuego aparece la frase 'A winner is you'?",
        answers: {
            a: "Street Fighter",
            b: "Big Rigs Racing",
            c: "Fighting Force",
            d: "Big Rigs: Over the Road Racing"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 85,
        question: "¿Como se llama el companero de Banjo en Banjo-Kazooie?",
        answers: {
            a: "Kazooie",
            b: "Bottles",
            c: "Mumbo Jumbo",
            d: "Tooty"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 86,
        question: "¿Que empresa desarrollo The Sims?",
        answers: {
            a: "Electronic Arts",
            b: "Maxis",
            c: "Will Wright",
            d: "SimCity Studios"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 87,
        question: "¿En que videojuego aparece el personaje Raiden?",
        answers: {
            a: "Street Fighter",
            b: "Tekken",
            c: "Mortal Kombat",
            d: "King of Fighters"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 88,
        question: "¿Cual es el nombre del primer nivel de Super Mario Bros?",
        answers: {
            a: "Mundo 1-1",
            b: "Nivel 1",
            c: "Stage 1",
            d: "Level 1"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 89,
        question: "¿Que empresa desarrollo Quake?",
        answers: {
            a: "3D Realms",
            b: "id Software",
            c: "Epic Games",
            d: "Ion Storm"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 90,
        question: "¿En que videojuego aparece el personaje Scorpion?",
        answers: {
            a: "Street Fighter",
            b: "Tekken",
            c: "Mortal Kombat",
            d: "Dead or Alive"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 91,
        question: "¿Como se llama la compañia de Gabe Newell?",
        answers: {
            a: "Blizzard Entertainment",
            b: "Valve Corporation",
            c: "Epic Games",
            d: "id Software"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 92,
        question: "¿Que videojuego incluye la frase 'The cake is a lie'?",
        answers: {
            a: "Half-Life",
            b: "Portal",
            c: "Team Fortress",
            d: "Left 4 Dead"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 93,
        question: "¿En que año se lanzo el primer Gran Theft Auto?",
        answers: {
            a: "1996",
            b: "1997",
            c: "1998",
            d: "1999"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 94,
        question: "¿Como se llama el protagonista de Assassin's Creed II?",
        answers: {
            a: "Altair Ibn-La'Ahad",
            b: "Ezio Auditore",
            c: "Connor Kenway",
            d: "Edward Kenway"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 95,
        question: "¿Que empresa desarrollo Starcraft II?",
        answers: {
            a: "Blizzard Entertainment",
            b: "Westwood Studios",
            c: "Electronic Arts",
            d: "Activision"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 96,
        question: "¿En que videojuego aparece el nivel Blood Gulch?",
        answers: {
            a: "Call of Duty",
            b: "Halo",
            c: "Gears of War",
            d: "Unreal Tournament"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 97,
        question: "¿Como se llama el villano principal de Mega Man?",
        answers: {
            a: "Dr. Wily",
            b: "Dr. Light",
            c: "Sigma",
            d: "Vile"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 98,
        question: "¿Que consola introdujo los discos compactos en los videojuegos?",
        answers: {
            a: "Sega CD",
            b: "PlayStation",
            c: "3DO",
            d: "PC Engine CD"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 99,
        question: "¿En que videojuego aparece la ciudad de City 17?",
        answers: {
            a: "Half-Life",
            b: "Half-Life 2",
            c: "Portal",
            d: "Counter-Strike"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 100,
        question: "¿Cual es el nombre del creador de Minecraft?",
        answers: {
            a: "Gabe Newell",
            b: "John Carmack",
            c: "Notch",
            d: "Shigeru Miyamoto"
        },
        correct: "c",
        difficulty: "medium"
    },
    // Preguntas adicionales (101-400)
    {
        id: 101,
        question: "¿En que videojuego aparece la ciudad de Raccoon City?",
        answers: {
            a: "Silent Hill",
            b: "Resident Evil",
            c: "Dead Space",
            d: "Left 4 Dead"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 102,
        question: "¿Como se llama el caballo de Link en The Legend of Zelda?",
        answers: {
            a: "Roach",
            b: "Agro",
            c: "Epona",
            d: "Shadowfax"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 103,
        question: "¿Que empresa desarrollo Dead Space?",
        answers: {
            a: "Visceral Games",
            b: "BioWare",
            c: "Bungie",
            d: "Irrational Games"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 104,
        question: "¿En que año se lanzo el primer Super Smash Bros?",
        answers: {
            a: "1998",
            b: "1999",
            c: "2000",
            d: "2001"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 105,
        question: "¿Como se llama el antagonista principal de Zelda: Ocarina of Time?",
        answers: {
            a: "Zant",
            b: "Ghirahim",
            c: "Ganondorf",
            d: "Skull Kid"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 106,
        question: "¿Que tipo de criatura es Yoshi?",
        answers: {
            a: "Tortuga",
            b: "Dinosaurio",
            c: "Dragon",
            d: "Lagarto"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 107,
        question: "¿En que videojuego aparece la frase 'Would you kindly'?",
        answers: {
            a: "BioShock",
            b: "System Shock",
            c: "Dead Space",
            d: "Half-Life"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 108,
        question: "¿Cual es el nombre del protagonista de Dishonored?",
        answers: {
            a: "Garrett",
            b: "Corvo Attano",
            c: "Sam Fisher",
            d: "Agent 47"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 109,
        question: "¿Que empresa desarrollo Gears of War?",
        answers: {
            a: "Epic Games",
            b: "Microsoft",
            c: "Coalition",
            d: "Bungie"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 110,
        question: "¿En que año se fundo Rockstar Games?",
        answers: {
            a: "1996",
            b: "1997",
            c: "1998",
            d: "1999"
        },
        correct: "c",
        difficulty: "hard"
    },
    {
        id: 111,
        question: "¿Como se llama el protagonista de Mass Effect?",
        answers: {
            a: "Commander Shepard",
            b: "John Shepard",
            c: "Captain Anderson",
            d: "Garrus Vakarian"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 112,
        question: "¿Que videojuego incluye el mapa Nuketown?",
        answers: {
            a: "Counter-Strike",
            b: "Call of Duty",
            c: "Battlefield",
            d: "Rainbow Six"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 113,
        question: "¿En que consola se lanzo originalmente Crash Bandicoot?",
        answers: {
            a: "SNES",
            b: "PlayStation",
            c: "Sega Saturn",
            d: "Nintendo 64"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 114,
        question: "¿Como se llama la nave de Master Chief en Halo?",
        answers: {
            a: "Infinity",
            b: "Forward Unto Dawn",
            c: "Pillar of Autumn",
            d: "Spirit of Fire"
        },
        correct: "c",
        difficulty: "hard"
    },
    {
        id: 115,
        question: "¿Que empresa desarrollo Fallout?",
        answers: {
            a: "Bethesda",
            b: "Interplay",
            c: "Obsidian",
            d: "Black Isle Studios"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 116,
        question: "¿En que videojuego aparece el personaje CJ?",
        answers: {
            a: "GTA Vice City",
            b: "GTA San Andreas",
            c: "GTA IV",
            d: "GTA V"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 117,
        question: "¿Como se llama el villano principal de Street Fighter?",
        answers: {
            a: "Akuma",
            b: "Sagat",
            c: "M. Bison",
            d: "Vega"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 118,
        question: "¿Que tipo de Pokemon es Charizard?",
        answers: {
            a: "Fuego/Dragon",
            b: "Fuego/Volador",
            c: "Fuego/Tierra",
            d: "Fuego puro"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 119,
        question: "¿En que año se lanzo el primer Far Cry?",
        answers: {
            a: "2003",
            b: "2004",
            c: "2005",
            d: "2006"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 120,
        question: "¿Como se llama la protagonista de Mirror's Edge?",
        answers: {
            a: "Faith",
            b: "Kate",
            c: "Celeste",
            d: "Runner"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 121,
        question: "¿Que videojuego incluye la ciudad de Night City?",
        answers: {
            a: "Deus Ex",
            b: "Cyberpunk 2077",
            c: "Shadowrun",
            d: "System Shock"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 122,
        question: "¿En que consola aparecio originalmente Metroid Prime?",
        answers: {
            a: "Nintendo 64",
            b: "GameCube",
            c: "Wii",
            d: "Game Boy Advance"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 123,
        question: "¿Como se llama el cazador de recompensas en Metroid?",
        answers: {
            a: "Samus Aran",
            b: "Bounty Hunter",
            c: "Galactic Hunter",
            d: "Space Pirate"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 124,
        question: "¿Que empresa desarrollo Apex Legends?",
        answers: {
            a: "Electronic Arts",
            b: "Respawn Entertainment",
            c: "DICE",
            d: "Titanfall Studios"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 125,
        question: "¿En que videojuego aparece el personaje Niko Bellic?",
        answers: {
            a: "GTA San Andreas",
            b: "GTA Vice City",
            c: "GTA IV",
            d: "GTA V"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 126,
        question: "¿Como se llama el mundo en Minecraft?",
        answers: {
            a: "Overworld",
            b: "Minecraft World",
            c: "Block World",
            d: "Craftworld"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 127,
        question: "¿Que juego popularizo el termino 'permadeath'?",
        answers: {
            a: "Rogue",
            b: "NetHack",
            c: "Diablo",
            d: "Dark Souls"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 128,
        question: "¿En que año se lanzo el primer Mortal Kombat?",
        answers: {
            a: "1991",
            b: "1992",
            c: "1993",
            d: "1994"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 129,
        question: "¿Como se llama el dinosaurio mascota de Mario?",
        answers: {
            a: "Yoshi",
            b: "Koopa",
            c: "Goomba",
            d: "Bowser Jr"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 130,
        question: "¿Que empresa desarrollo Anthem?",
        answers: {
            a: "Electronic Arts",
            b: "BioWare",
            c: "DICE",
            d: "Respawn"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 131,
        question: "¿En que videojuego aparece el personaje Solid Snake por primera vez?",
        answers: {
            a: "Metal Gear",
            b: "Metal Gear Solid",
            c: "Metal Gear 2",
            d: "Snake's Revenge"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 132,
        question: "¿Como se llama la espada de Cloud en Final Fantasy VII?",
        answers: {
            a: "Excalibur",
            b: "Buster Sword",
            c: "Masamune",
            d: "Ultima Weapon"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 133,
        question: "¿Que videojuego incluye el nivel The Library?",
        answers: {
            a: "Halo: Combat Evolved",
            b: "Dead Space",
            c: "BioShock",
            d: "System Shock"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 134,
        question: "¿En que año se fundo Epic Games?",
        answers: {
            a: "1990",
            b: "1991",
            c: "1992",
            d: "1993"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 135,
        question: "¿Como se llama el protagonista de Uncharted?",
        answers: {
            a: "Nathan Drake",
            b: "Victor Sullivan",
            c: "Samuel Drake",
            d: "Harry Flynn"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 136,
        question: "¿Que empresa desarrollo Rocket League?",
        answers: {
            a: "Epic Games",
            b: "Psyonix",
            c: "Ubisoft",
            d: "EA Sports"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 137,
        question: "¿En que videojuego aparece el personaje Ezio Auditore?",
        answers: {
            a: "Assassin's Creed",
            b: "Assassin's Creed II",
            c: "Assassin's Creed III",
            d: "Assassin's Creed IV"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 138,
        question: "¿Como se llama la organizacion terrorista en Counter-Strike?",
        answers: {
            a: "Phoenix Connexion",
            b: "Separatist",
            c: "Elite Crew",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 139,
        question: "¿Que tipo de juego es Among Us?",
        answers: {
            a: "Battle Royale",
            b: "Survival Horror",
            c: "Deduccion Social",
            d: "Puzzle"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 140,
        question: "¿En que año se lanzo el primer Civilization?",
        answers: {
            a: "1990",
            b: "1991",
            c: "1992",
            d: "1993"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 141,
        question: "¿Como se llama el protagonista de The Last of Us?",
        answers: {
            a: "Joel Miller",
            b: "Tommy Miller",
            c: "Bill",
            d: "David"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 142,
        question: "¿Que empresa desarrollo Ori and the Blind Forest?",
        answers: {
            a: "Microsoft",
            b: "Moon Studios",
            c: "Rare",
            d: "343 Industries"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 143,
        question: "¿En que videojuego aparece la ciudad de Columbia?",
        answers: {
            a: "BioShock",
            b: "BioShock 2",
            c: "BioShock Infinite",
            d: "System Shock"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 144,
        question: "¿Como se llama el hermano de Waluigi?",
        answers: {
            a: "Mario",
            b: "Luigi",
            c: "Wario",
            d: "No tiene hermano"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 145,
        question: "¿Que videojuego incluye el mapa Shipment?",
        answers: {
            a: "Call of Duty 4",
            b: "Counter-Strike",
            c: "Battlefield",
            d: "Rainbow Six"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 146,
        question: "¿En que consola se lanzo originalmente God of War?",
        answers: {
            a: "PlayStation",
            b: "PlayStation 2",
            c: "PlayStation 3",
            d: "PSP"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 147,
        question: "¿Como se llama el villano principal de Sonic?",
        answers: {
            a: "Dr. Robotnik",
            b: "Dr. Eggman",
            c: "Ambos nombres son correctos",
            d: "Metal Sonic"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 148,
        question: "¿Que empresa desarrollo Cuphead?",
        answers: {
            a: "Microsoft",
            b: "StudioMDHR",
            c: "Rare",
            d: "Playdead"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 149,
        question: "¿En que videojuego aparece el personaje Aloy?",
        answers: {
            a: "Horizon Zero Dawn",
            b: "The Last of Us",
            c: "Tomb Raider",
            d: "Mass Effect"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 150,
        question: "¿Como se llama la moneda de Fortnite?",
        answers: {
            a: "V-Bucks",
            b: "Fortnite Coins",
            c: "Battle Coins",
            d: "Epic Coins"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 151,
        question: "¿Que videojuego popularizo el battle pass?",
        answers: {
            a: "PUBG",
            b: "Fortnite",
            c: "Apex Legends",
            d: "Dota 2"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 152,
        question: "¿En que año se lanzo Half-Life?",
        answers: {
            a: "1997",
            b: "1998",
            c: "1999",
            d: "2000"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 153,
        question: "¿Como se llama el protagonista de Horizon Zero Dawn?",
        answers: {
            a: "Aloy",
            b: "Rost",
            c: "Erend",
            d: "Varl"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 154,
        question: "¿Que empresa desarrollo Titanfall?",
        answers: {
            a: "Electronic Arts",
            b: "Respawn Entertainment",
            c: "DICE",
            d: "Infinity Ward"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 155,
        question: "¿En que videojuego aparece el mapa Dust?",
        answers: {
            a: "Counter-Strike",
            b: "Call of Duty",
            c: "Battlefield",
            d: "Rainbow Six"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 156,
        question: "¿Como se llama la IA malvada en Portal?",
        answers: {
            a: "Cortana",
            b: "GLaDOS",
            c: "SHODAN",
            d: "HAL 9000"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 157,
        question: "¿Que videojuego incluye el nivel All Ghillied Up?",
        answers: {
            a: "Call of Duty 4",
            b: "Call of Duty 2",
            c: "Medal of Honor",
            d: "Battlefield"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 158,
        question: "¿En que año se fundo id Software?",
        answers: {
            a: "1989",
            b: "1990",
            c: "1991",
            d: "1992"
        },
        correct: "c",
        difficulty: "hard"
    },
    {
        id: 159,
        question: "¿Como se llama el protagonista de Prey (2017)?",
        answers: {
            a: "Morgan Yu",
            b: "Tommy",
            c: "Jack",
            d: "Alex Yu"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 160,
        question: "¿Que empresa desarrollo Inside?",
        answers: {
            a: "Limbo Studios",
            b: "Playdead",
            c: "Team Ico",
            d: "thatgamecompany"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 161,
        question: "¿En que videojuego aparece el personaje Big Daddy?",
        answers: {
            a: "BioShock",
            b: "Dead Space",
            c: "System Shock",
            d: "Prey"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 162,
        question: "¿Como se llama la nave de Star Fox?",
        answers: {
            a: "Arwing",
            b: "Blue Marine",
            c: "Landmaster",
            d: "Great Fox"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 163,
        question: "¿Que videojuego incluye la frase 'A man chooses, a slave obeys'?",
        answers: {
            a: "BioShock",
            b: "System Shock",
            c: "Dead Space",
            d: "Half-Life"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 164,
        question: "¿En que año se lanzo el primer Diablo?",
        answers: {
            a: "1995",
            b: "1996",
            c: "1997",
            d: "1998"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 165,
        question: "¿Como se llama el protagonista de Dishonored 2?",
        answers: {
            a: "Corvo Attano",
            b: "Emily Kaldwin",
            c: "Ambos pueden ser protagonistas",
            d: "Daud"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 166,
        question: "¿Que empresa desarrollo Celeste?",
        answers: {
            a: "Team Cherry",
            b: "Matt Makes Games",
            c: "Supergiant Games",
            d: "Thunder Lotus"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 167,
        question: "¿En que videojuego aparece el personaje Shovel Knight?",
        answers: {
            a: "Shovel Knight",
            b: "Hollow Knight",
            c: "Dark Souls",
            d: "Castlevania"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 168,
        question: "¿Como se llama el mundo subterraneo en Super Mario Bros?",
        answers: {
            a: "Underground",
            b: "Subworld",
            c: "Underworld",
            d: "No tiene nombre especifico"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 169,
        question: "¿Que videojuego incluye el Easter Egg de 'Konami Code'?",
        answers: {
            a: "Contra",
            b: "Gradius",
            c: "Ambos",
            d: "Castlevania"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 170,
        question: "¿En que consola aparecio originalmente Bayonetta?",
        answers: {
            a: "PlayStation 3",
            b: "Xbox 360",
            c: "Ambas",
            d: "PC"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 171,
        question: "¿Como se llama el gusano protagonista de Earthworm Jim?",
        answers: {
            a: "Jim",
            b: "Earthworm Jim",
            c: "Worm Jim",
            d: "Jimmy"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 172,
        question: "¿Que empresa desarrollo Hollow Knight?",
        answers: {
            a: "Team Cherry",
            b: "Matt Makes Games",
            c: "Supergiant Games",
            d: "Studio MDHR"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 173,
        question: "¿En que videojuego aparece el personaje Kirby por primera vez?",
        answers: {
            a: "Kirby's Dream Land",
            b: "Kirby's Adventure",
            c: "Kirby Super Star",
            d: "Kirby 64"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 174,
        question: "¿Como se llama la pistola iconica de Doom?",
        answers: {
            a: "Shotgun",
            b: "Super Shotgun",
            c: "Plasma Rifle",
            d: "BFG 9000"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 175,
        question: "¿Que videojuego incluye la ciudad de San Fierro?",
        answers: {
            a: "GTA Vice City",
            b: "GTA San Andreas",
            c: "GTA IV",
            d: "GTA V"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 176,
        question: "¿En que año se lanzo StarCraft: Brood War?",
        answers: {
            a: "1997",
            b: "1998",
            c: "1999",
            d: "2000"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 177,
        question: "¿Como se llama el protagonista de Psychonauts?",
        answers: {
            a: "Raz",
            b: "Razputin",
            c: "Razputin Aquato",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 178,
        question: "¿Que empresa desarrollo Journey?",
        answers: {
            a: "Team Ico",
            b: "thatgamecompany",
            c: "Playdead",
            d: "Media Molecule"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 179,
        question: "¿En que videojuego aparece el personaje Wrex?",
        answers: {
            a: "Mass Effect",
            b: "Dragon Age",
            c: "Knights of the Old Republic",
            d: "Jade Empire"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 180,
        question: "¿Como se llama la mascara en Crash Bandicoot?",
        answers: {
            a: "Aku Aku",
            b: "Uka Uka",
            c: "Tiki Mask",
            d: "Spirit Mask"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 181,
        question: "¿Que videojuego incluye el nivel The Water Temple?",
        answers: {
            a: "Zelda: A Link to the Past",
            b: "Zelda: Ocarina of Time",
            c: "Zelda: Twilight Princess",
            d: "Zelda: Majora's Mask"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 182,
        question: "¿En que año se fundo Bungie?",
        answers: {
            a: "1990",
            b: "1991",
            c: "1992",
            d: "1993"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 183,
        question: "¿Como se llama el protagonista de Spec Ops: The Line?",
        answers: {
            a: "Captain Walker",
            b: "Lieutenant Adams",
            c: "Sergeant Lugo",
            d: "Colonel Konrad"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 184,
        question: "¿Que empresa desarrollo Limbo?",
        answers: {
            a: "Team Ico",
            b: "Playdead",
            c: "thatgamecompany",
            d: "Media Molecule"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 185,
        question: "¿En que videojuego aparece el Gravity Gun?",
        answers: {
            a: "Half-Life",
            b: "Half-Life 2",
            c: "Portal",
            d: "Left 4 Dead"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 186,
        question: "¿Como se llama el cazador de vampiros en Castlevania?",
        answers: {
            a: "Simon Belmont",
            b: "Trevor Belmont",
            c: "Alucard",
            d: "Varia segun el juego"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 187,
        question: "¿Que videojuego incluye la frase 'Stay awhile and listen'?",
        answers: {
            a: "Diablo",
            b: "Diablo II",
            c: "Warcraft",
            d: "StarCraft"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 188,
        question: "¿En que consola se lanzo originalmente Fire Emblem?",
        answers: {
            a: "NES",
            b: "SNES",
            c: "Game Boy Advance",
            d: "Nintendo DS"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 189,
        question: "¿Como se llama la nave de Samus en Super Metroid?",
        answers: {
            a: "Gunship",
            b: "Hunter Ship",
            c: "Bounty Ship",
            d: "Star Ship"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 190,
        question: "¿Que empresa desarrollo Katamari Damacy?",
        answers: {
            a: "Namco",
            b: "Bandai",
            c: "Bandai Namco",
            d: "Now Production"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 191,
        question: "¿En que videojuego aparece el personaje Meat Boy?",
        answers: {
            a: "Super Meat Boy",
            b: "The Binding of Isaac",
            c: "Braid",
            d: "Fez"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 192,
        question: "¿Como se llama el mundo en Animal Crossing?",
        answers: {
            a: "Village",
            b: "Town",
            c: "Island",
            d: "Varia segun el juego"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 193,
        question: "¿Que videojuego incluye el mapa Inferno?",
        answers: {
            a: "Counter-Strike",
            b: "Call of Duty",
            c: "Battlefield",
            d: "Rainbow Six Siege"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 194,
        question: "¿En que año se lanzo el primer Tekken?",
        answers: {
            a: "1993",
            b: "1994",
            c: "1995",
            d: "1996"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 195,
        question: "¿Como se llama el jefe final de Mega Man X?",
        answers: {
            a: "Dr. Wily",
            b: "Sigma",
            c: "Vile",
            d: "Zero"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 196,
        question: "¿Que empresa desarrollo Amnesia: The Dark Descent?",
        answers: {
            a: "Frictional Games",
            b: "Red Barrels",
            c: "Supermassive Games",
            d: "Bloober Team"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 197,
        question: "¿En que videojuego aparece el personaje Pyramid Head?",
        answers: {
            a: "Resident Evil",
            b: "Silent Hill 2",
            c: "Dead Space",
            d: "Amnesia"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 198,
        question: "¿Como se llama la moneda en The Legend of Zelda?",
        answers: {
            a: "Rupee",
            b: "Rupiah",
            c: "Rupia",
            d: "Gold"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 199,
        question: "¿Que videojuego incluye la ciudad de Steelport?",
        answers: {
            a: "Saints Row 2",
            b: "Saints Row: The Third",
            c: "Saints Row IV",
            d: "Grand Theft Auto"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 200,
        question: "¿En que consola aparecio originalmente Okami?",
        answers: {
            a: "PlayStation 2",
            b: "Wii",
            c: "PlayStation 3",
            d: "Nintendo DS"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 201,
        question: "¿Como se llama el protagonista de Infamous?",
        answers: {
            a: "Cole MacGrath",
            b: "Delsin Rowe",
            c: "Zeke Dunbar",
            d: "Kessler"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 202,
        question: "¿Que empresa desarrollo Little Big Planet?",
        answers: {
            a: "Sony",
            b: "Media Molecule",
            c: "Sucker Punch",
            d: "Naughty Dog"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 203,
        question: "¿En que videojuego aparece el personaje Handsome Jack?",
        answers: {
            a: "Borderlands",
            b: "Borderlands 2",
            c: "Borderlands 3",
            d: "Borderlands: The Pre-Sequel"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 204,
        question: "¿Como se llama la espada de Link en Skyward Sword?",
        answers: {
            a: "Master Sword",
            b: "Goddess Sword",
            c: "Skyward Sword",
            d: "True Master Sword"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 205,
        question: "¿Que videojuego incluye la frase 'War never changes'?",
        answers: {
            a: "Call of Duty",
            b: "Fallout",
            c: "Medal of Honor",
            d: "Battlefield"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 206,
        question: "¿En que año se lanzo el primer Command & Conquer?",
        answers: {
            a: "1994",
            b: "1995",
            c: "1996",
            d: "1997"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 207,
        question: "¿Como se llama el protagonista de Bloodborne?",
        answers: {
            a: "Hunter",
            b: "Good Hunter",
            c: "The Hunter",
            d: "No tiene nombre especifico"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 208,
        question: "¿Que empresa desarrollo Ni No Kuni?",
        answers: {
            a: "Square Enix",
            b: "Level-5",
            c: "Studio Ghibli",
            d: "Bandai Namco"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 209,
        question: "¿En que videojuego aparece el personaje Big Boss?",
        answers: {
            a: "Metal Gear",
            b: "Metal Gear Solid 3",
            c: "Metal Gear Solid V",
            d: "Todos los anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 210,
        question: "¿Como se llama la isla en Far Cry 3?",
        answers: {
            a: "Rook Island",
            b: "Kyrat",
            c: "Hope County",
            d: "Yara"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 211,
        question: "¿Que videojuego incluye el nivel Casino Night Zone?",
        answers: {
            a: "Sonic the Hedgehog",
            b: "Sonic the Hedgehog 2",
            c: "Sonic 3",
            d: "Sonic CD"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 212,
        question: "¿En que consola se lanzo originalmente Xenoblade Chronicles?",
        answers: {
            a: "Nintendo DS",
            b: "Wii",
            c: "Wii U",
            d: "Nintendo Switch"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 213,
        question: "¿Como se llama el protagonista de Watch Dogs?",
        answers: {
            a: "Aiden Pearce",
            b: "Marcus Holloway",
            c: "Wrench",
            d: "DedSec"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 214,
        question: "¿Que empresa desarrollo Spore?",
        answers: {
            a: "Electronic Arts",
            b: "Maxis",
            c: "Will Wright",
            d: "SimCity Studios"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 215,
        question: "¿En que videojuego aparece el personaje Arthas?",
        answers: {
            a: "Warcraft III",
            b: "World of Warcraft",
            c: "Diablo",
            d: "StarCraft"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 216,
        question: "¿Como se llama la organizacion en Deus Ex?",
        answers: {
            a: "UNATCO",
            b: "Illuminati",
            c: "MJ12",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 217,
        question: "¿Que videojuego incluye el mapa Facing Worlds?",
        answers: {
            a: "Quake",
            b: "Unreal Tournament",
            c: "Doom",
            d: "Serious Sam"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 218,
        question: "¿En que año se lanzo el primer Age of Empires?",
        answers: {
            a: "1996",
            b: "1997",
            c: "1998",
            d: "1999"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 219,
        question: "¿Como se llama el protagonista de Dying Light?",
        answers: {
            a: "Kyle Crane",
            b: "Aiden Caldwell",
            c: "Jade Aldemir",
            d: "Brecken"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 220,
        question: "¿Que empresa desarrollo Terraria?",
        answers: {
            a: "Mojang",
            b: "Re-Logic",
            c: "Unknown Worlds",
            d: "Team17"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 221,
        question: "¿En que videojuego aparece el personaje Vaas?",
        answers: {
            a: "Far Cry 2",
            b: "Far Cry 3",
            c: "Far Cry 4",
            d: "Far Cry 5"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 222,
        question: "¿Como se llama la estacion espacial en System Shock?",
        answers: {
            a: "Citadel Station",
            b: "Von Braun",
            c: "Sevastopol",
            d: "ISS"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 223,
        question: "¿Que videojuego incluye el nivel The Cradle?",
        answers: {
            a: "Thief",
            b: "Thief: Deadly Shadows",
            c: "Dishonored",
            d: "BioShock"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 224,
        question: "¿En que consola aparecio originalmente Persona 3?",
        answers: {
            a: "PlayStation",
            b: "PlayStation 2",
            c: "PlayStation 3",
            d: "PSP"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 225,
        question: "¿Como se llama el villano de Spyro?",
        answers: {
            a: "Gnasty Gnorc",
            b: "Ripto",
            c: "The Sorceress",
            d: "Varia segun el juego"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 226,
        question: "¿Que empresa desarrollo Dead Cells?",
        answers: {
            a: "Motion Twin",
            b: "Team Cherry",
            c: "Thunder Lotus",
            d: "Supergiant Games"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 227,
        question: "¿En que videojuego aparece el personaje Raziel?",
        answers: {
            a: "Legacy of Kain",
            b: "Soul Reaver",
            c: "Blood Omen",
            d: "Todos los anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 228,
        question: "¿Como se llama la academia en Bully?",
        answers: {
            a: "Bullworth Academy",
            b: "Rockstar Academy",
            c: "New England Academy",
            d: "Prep School"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 229,
        question: "¿Que videojuego incluye la frase 'A hero need not speak'?",
        answers: {
            a: "Half-Life",
            b: "Gordon Freeman",
            c: "Half-Life 2",
            d: "No es de ningun juego especifico"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 230,
        question: "¿En que año se fundo Obsidian Entertainment?",
        answers: {
            a: "2002",
            b: "2003",
            c: "2004",
            d: "2005"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 231,
        question: "¿Como se llama el protagonista de Bastion?",
        answers: {
            a: "The Kid",
            b: "Bastion",
            c: "Rucks",
            d: "Caelondia"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 232,
        question: "¿Que empresa desarrollo Hades?",
        answers: {
            a: "Supergiant Games",
            b: "Team Cherry",
            c: "Motion Twin",
            d: "Thunder Lotus"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 233,
        question: "¿En que videojuego aparece el personaje Zagreus?",
        answers: {
            a: "God of War",
            b: "Hades",
            c: "Assassin's Creed Odyssey",
            d: "Immortals Fenyx Rising"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 234,
        question: "¿Como se llama la ciudad en Bioshock Infinite?",
        answers: {
            a: "Rapture",
            b: "Columbia",
            c: "New York",
            d: "Atlantis"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 235,
        question: "¿Que videojuego incluye el nivel Upward?",
        answers: {
            a: "Team Fortress 2",
            b: "Counter-Strike",
            c: "Overwatch",
            d: "Left 4 Dead"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 236,
        question: "¿En que consola se lanzo originalmente The Last Guardian?",
        answers: {
            a: "PlayStation 3",
            b: "PlayStation 4",
            c: "PlayStation 5",
            d: "PlayStation Vita"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 237,
        question: "¿Como se llama el companero en The Last Guardian?",
        answers: {
            a: "Trico",
            b: "Agro",
            c: "Dormin",
            d: "Colossus"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 238,
        question: "¿Que empresa desarrollo Subnautica?",
        answers: {
            a: "Unknown Worlds Entertainment",
            b: "Re-Logic",
            c: "Team17",
            d: "Mojang"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 239,
        question: "¿En que videojuego aparece el Leviathan?",
        answers: {
            a: "Subnautica",
            b: "Depth",
            c: "ABZU",
            d: "Endless Ocean"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 240,
        question: "¿Como se llama la nave en No Man's Sky?",
        answers: {
            a: "Starship",
            b: "Explorer",
            c: "No tiene nombre fijo",
            d: "Atlas"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 241,
        question: "¿Que videojuego incluye la dimension del Nether?",
        answers: {
            a: "Terraria",
            b: "Minecraft",
            c: "Starbound",
            d: "Don't Starve"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 242,
        question: "¿En que año se lanzo el primer Plants vs Zombies?",
        answers: {
            a: "2008",
            b: "2009",
            c: "2010",
            d: "2011"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 243,
        question: "¿Como se llama el protagonista de A Hat in Time?",
        answers: {
            a: "Hat Kid",
            b: "Time Girl",
            c: "Mustache Girl",
            d: "Bow Kid"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 244,
        question: "¿Que empresa desarrollo Outer Wilds?",
        answers: {
            a: "Mobius Digital",
            b: "Annapurna Interactive",
            c: "Team Cherry",
            d: "Thunder Lotus"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 245,
        question: "¿En que videojuego aparece el bucle temporal de 22 minutos?",
        answers: {
            a: "Majora's Mask",
            b: "Outer Wilds",
            c: "Deathloop",
            d: "Groundhog Day"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 246,
        question: "¿Como se llama el protagonista de Celeste?",
        answers: {
            a: "Madeline",
            b: "Celeste",
            c: "Badeline",
            d: "Theo"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 247,
        question: "¿Que videojuego incluye el Doomslayer?",
        answers: {
            a: "Doom (1993)",
            b: "Doom 3",
            c: "Doom (2016)",
            d: "Doom Eternal"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 248,
        question: "¿En que consola aparecio originalmente The Binding of Isaac?",
        answers: {
            a: "PC",
            b: "PlayStation 3",
            c: "Xbox 360",
            d: "Nintendo 3DS"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 249,
        question: "¿Como se llama el creador de The Binding of Isaac?",
        answers: {
            a: "Edmund McMillen",
            b: "Tommy Refenes",
            c: "Florian Himsl",
            d: "Team Meat"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 250,
        question: "¿Que empresa desarrollo Risk of Rain?",
        answers: {
            a: "Hopoo Games",
            b: "Motion Twin",
            c: "Team Cherry",
            d: "Supergiant Games"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 251,
        question: "¿En que videojuego aparece el personaje Sans?",
        answers: {
            a: "Deltarune",
            b: "Undertale",
            c: "Cave Story",
            d: "OneShot"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 252,
        question: "¿Como se llama el protagonista de Shovel Knight?",
        answers: {
            a: "Shovel Knight",
            b: "Sir Shovel",
            c: "Blue Knight",
            d: "Dig Knight"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 253,
        question: "¿Que videojuego incluye la Order of No Quarter?",
        answers: {
            a: "Dark Souls",
            b: "Shovel Knight",
            c: "Hollow Knight",
            d: "Bloodborne"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 254,
        question: "¿En que año se lanzo Undertale?",
        answers: {
            a: "2014",
            b: "2015",
            c: "2016",
            d: "2017"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 255,
        question: "¿Como se llama el creador de Undertale?",
        answers: {
            a: "Toby Fox",
            b: "Scott Cawthon",
            c: "Edmund McMillen",
            d: "Daisuke Amaya"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 256,
        question: "¿Que empresa desarrollo Stardew Valley?",
        answers: {
            a: "ConcernedApe",
            b: "Team17",
            c: "Chucklefish",
            d: "Eric Barone"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 257,
        question: "¿En que videojuego aparece el Valley?",
        answers: {
            a: "Harvest Moon",
            b: "Stardew Valley",
            c: "Animal Crossing",
            d: "Story of Seasons"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 258,
        question: "¿Como se llama el protagonista de Cuphead?",
        answers: {
            a: "Cuphead",
            b: "Mugman",
            c: "Elder Kettle",
            d: "King Dice"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 259,
        question: "¿Que videojuego incluye el Devil's Casino?",
        answers: {
            a: "Cuphead",
            b: "Binding of Isaac",
            c: "Enter the Gungeon",
            d: "Dead Cells"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 260,
        question: "¿En que consola aparecio originalmente Breath of the Wild?",
        answers: {
            a: "Wii U",
            b: "Nintendo Switch",
            c: "Ambas",
            d: "Nintendo 3DS"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 261,
        question: "¿Como se llama la region en Breath of the Wild?",
        answers: {
            a: "Hyrule",
            b: "Hylian Kingdom",
            c: "Wild Kingdom",
            d: "Breath Kingdom"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 262,
        question: "¿Que empresa desarrollo Super Mario Odyssey?",
        answers: {
            a: "Nintendo",
            b: "Nintendo EPD",
            c: "HAL Laboratory",
            d: "Retro Studios"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 263,
        question: "¿En que videojuego aparece Cappy?",
        answers: {
            a: "Super Mario Galaxy",
            b: "Super Mario 3D World",
            c: "Super Mario Odyssey",
            d: "Mario Kart"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 264,
        question: "¿Como se llama el reino principal en Mario Odyssey?",
        answers: {
            a: "Cap Kingdom",
            b: "Mushroom Kingdom",
            c: "New Donk City",
            d: "Metro Kingdom"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 265,
        question: "¿Que videojuego incluye las Power Moons?",
        answers: {
            a: "Super Mario Galaxy",
            b: "Super Mario 64",
            c: "Super Mario Odyssey",
            d: "Super Mario Sunshine"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 266,
        question: "¿En que año se lanzo Super Mario Odyssey?",
        answers: {
            a: "2016",
            b: "2017",
            c: "2018",
            d: "2019"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 267,
        question: "¿Como se llama el protagonista de Ghostrunner?",
        answers: {
            a: "Jack",
            b: "Runner",
            c: "Ghost",
            d: "Cyber Ninja"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 268,
        question: "¿Que empresa desarrollo It Takes Two?",
        answers: {
            a: "Hazelight Studios",
            b: "EA",
            c: "Josef Fares",
            d: "A Way Out Studios"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 269,
        question: "¿En que videojuego aparecen Cody y May?",
        answers: {
            a: "A Way Out",
            b: "It Takes Two",
            c: "Unravel Two",
            d: "Portal 2"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 270,
        question: "¿Como se llama el libro en It Takes Two?",
        answers: {
            a: "Dr. Hakim",
            b: "Love Doctor",
            c: "Marriage Manual",
            d: "Relationship Guide"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 271,
        question: "¿Que videojuego incluye la Torre Dharma?",
        answers: {
            a: "Sifu",
            b: "Absolver",
            c: "Sekiro",
            d: "Nioh"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 272,
        question: "¿En que consola aparecio originalmente Ghost of Tsushima?",
        answers: {
            a: "PlayStation 4",
            b: "PlayStation 5",
            c: "Ambas",
            d: "PC"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 273,
        question: "¿Como se llama el protagonista de Ghost of Tsushima?",
        answers: {
            a: "Jin Sakai",
            b: "Shimura",
            c: "Yuna",
            d: "Kenji"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 274,
        question: "¿Que empresa desarrollo Sekiro?",
        answers: {
            a: "FromSoftware",
            b: "Activision",
            c: "Bandai Namco",
            d: "Team Ninja"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 275,
        question: "¿En que videojuego aparece el Lobo?",
        answers: {
            a: "Dark Souls",
            b: "Bloodborne",
            c: "Sekiro",
            d: "Nioh"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 276,
        question: "¿Como se llama la tecnica de resurreccion en Sekiro?",
        answers: {
            a: "Resurrection",
            b: "Revival",
            c: "Second Life",
            d: "Dragon's Blood"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 277,
        question: "¿Que videojuego incluye el Dragonrot?",
        answers: {
            a: "Dark Souls",
            b: "Sekiro",
            c: "Bloodborne",
            d: "Elden Ring"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 278,
        question: "¿En que año se lanzo Elden Ring?",
        answers: {
            a: "2021",
            b: "2022",
            c: "2023",
            d: "2020"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 279,
        question: "¿Como se llama el mundo en Elden Ring?",
        answers: {
            a: "The Lands Between",
            b: "Lordran",
            c: "Yharnam",
            d: "Boletaria"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 280,
        question: "¿Que escritor colaboro en Elden Ring?",
        answers: {
            a: "Stephen King",
            b: "George R.R. Martin",
            c: "J.R.R. Tolkien",
            d: "Brandon Sanderson"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 281,
        question: "¿En que videojuego aparece Malenia?",
        answers: {
            a: "Dark Souls III",
            b: "Bloodborne",
            c: "Sekiro",
            d: "Elden Ring"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 282,
        question: "¿Como se llama el anillo en Elden Ring?",
        answers: {
            a: "The Elden Ring",
            b: "Ring of Power",
            c: "Golden Ring",
            d: "Ring of Elden"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 283,
        question: "¿Que videojuego incluye Torrent como montura?",
        answers: {
            a: "Dark Souls",
            b: "Bloodborne",
            c: "Elden Ring",
            d: "Sekiro"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 284,
        question: "¿En que consola aparecio originalmente Demon's Souls?",
        answers: {
            a: "PlayStation 2",
            b: "PlayStation 3",
            c: "PlayStation 4",
            d: "PlayStation 5"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 285,
        question: "¿Como se llama el reino en Demon's Souls?",
        answers: {
            a: "Lordran",
            b: "Boletaria",
            c: "Drangleic",
            d: "Lothric"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 286,
        question: "¿Que empresa desarrollo Nioh?",
        answers: {
            a: "FromSoftware",
            b: "Team Ninja",
            c: "Capcom",
            d: "Bandai Namco"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 287,
        question: "¿En que videojuego aparece William Adams?",
        answers: {
            a: "Sekiro",
            b: "Ghost of Tsushima",
            c: "Nioh",
            d: "Way of the Samurai"
        },
        correct: "c",
        difficulty: "hard"
    },
    {
        id: 288,
        question: "¿Como se llama el protagonista de The Witcher 3?",
        answers: {
            a: "Geralt de Rivia",
            b: "Vesemir",
            c: "Lambert",
            d: "Eskel"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 289,
        question: "¿Que videojuego incluye Novigrad?",
        answers: {
            a: "The Witcher",
            b: "The Witcher 2",
            c: "The Witcher 3",
            d: "Cyberpunk 2077"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 290,
        question: "¿En que año se lanzo The Witcher 3?",
        answers: {
            a: "2014",
            b: "2015",
            c: "2016",
            d: "2017"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 291,
        question: "¿Como se llama el caballo de Geralt?",
        answers: {
            a: "Roach",
            b: "Epona",
            c: "Agro",
            d: "Shadowfax"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 292,
        question: "¿Que empresa desarrollo Cyberpunk 2077?",
        answers: {
            a: "CD Projekt",
            b: "CD Projekt RED",
            c: "GOG",
            d: "Poland Games"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 293,
        question: "¿En que videojuego aparece V?",
        answers: {
            a: "Cyberpunk 2020",
            b: "Cyberpunk 2077",
            c: "Deus Ex",
            d: "Shadowrun"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 294,
        question: "¿Como se llama la ciudad en Cyberpunk 2077?",
        answers: {
            a: "Neo Tokyo",
            b: "Night City",
            c: "Cyber City",
            d: "Future City"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 295,
        question: "¿Que actor aparece en Cyberpunk 2077?",
        answers: {
            a: "Keanu Reeves",
            b: "Leonardo DiCaprio",
            c: "Brad Pitt",
            d: "Tom Cruise"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 296,
        question: "¿En que videojuego aparece Johnny Silverhand?",
        answers: {
            a: "The Witcher 3",
            b: "Cyberpunk 2077",
            c: "Deus Ex",
            d: "System Shock"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 297,
        question: "¿Como se llama la moneda en The Witcher?",
        answers: {
            a: "Crowns",
            b: "Orens",
            c: "Coins",
            d: "Varia segun el juego"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 298,
        question: "¿Que videojuego incluye Gwent?",
        answers: {
            a: "The Witcher 2",
            b: "The Witcher 3",
            c: "Cyberpunk 2077",
            d: "Thronebreaker"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 299,
        question: "¿En que consola aparecio originalmente Red Dead Redemption 2?",
        answers: {
            a: "PlayStation 4",
            b: "Xbox One",
            c: "Ambas",
            d: "PC"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 300,
        question: "¿Como se llama el protagonista de Red Dead Redemption 2?",
        answers: {
            a: "John Marston",
            b: "Arthur Morgan",
            c: "Dutch van der Linde",
            d: "Micah Bell"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 301,
        question: "¿Que videojuego incluye la banda Van der Linde?",
        answers: {
            a: "Red Dead Redemption",
            b: "Red Dead Redemption 2",
            c: "Red Dead Revolver",
            d: "Gun"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 302,
        question: "¿En que año transcurre Red Dead Redemption 2?",
        answers: {
            a: "1899",
            b: "1911",
            c: "1898",
            d: "1901"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 303,
        question: "¿Como se llama el caballo default de Arthur?",
        answers: {
            a: "Boadicea",
            b: "Old Boy",
            c: "Tennessee Walker",
            d: "No tiene nombre fijo"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 304,
        question: "¿Que empresa desarrollo Spider-Man (2018)?",
        answers: {
            a: "Sony",
            b: "Insomniac Games",
            c: "Marvel",
            d: "Activision"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 305,
        question: "¿En que videojuego aparece Miles Morales como protagonista?",
        answers: {
            a: "Spider-Man (2018)",
            b: "Spider-Man: Miles Morales",
            c: "Spider-Man 2",
            d: "Spider-Verse"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 306,
        question: "¿Como se llama la ciudad en Spider-Man?",
        answers: {
            a: "New York",
            b: "Manhattan",
            c: "NYC",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "easy"
    },
    {
        id: 307,
        question: "¿Que videojuego incluye el traje Anti-Ock?",
        answers: {
            a: "Spider-Man (2018)",
            b: "Spider-Man 2",
            c: "Spider-Man 3",
            d: "Web of Shadows"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 308,
        question: "¿En que consola aparecio originalmente Spider-Man (2018)?",
        answers: {
            a: "PlayStation 4",
            b: "PlayStation 5",
            c: "Xbox One",
            d: "PC"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 309,
        question: "¿Como se llama el villano principal en Spider-Man (2018)?",
        answers: {
            a: "Green Goblin",
            b: "Doctor Octopus",
            c: "Venom",
            d: "Kingpin"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 310,
        question: "¿Que videojuego incluye el Rhino como jefe?",
        answers: {
            a: "Spider-Man (2018)",
            b: "Spider-Man: Miles Morales",
            c: "Ambos",
            d: "Ninguno"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 311,
        question: "¿En que año se lanzo The Last of Us?",
        answers: {
            a: "2012",
            b: "2013",
            c: "2014",
            d: "2015"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 312,
        question: "¿Como se llama la protagonista joven de The Last of Us?",
        answers: {
            a: "Sarah",
            b: "Ellie",
            c: "Tess",
            d: "Marlene"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 313,
        question: "¿Que empresa desarrollo The Last of Us?",
        answers: {
            a: "Sony",
            b: "Naughty Dog",
            c: "Santa Monica Studio",
            d: "Sucker Punch"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 314,
        question: "¿En que videojuego aparecen los Clickers?",
        answers: {
            a: "Resident Evil",
            b: "Dead Space",
            c: "The Last of Us",
            d: "Left 4 Dead"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 315,
        question: "¿Como se llama el hongo en The Last of Us?",
        answers: {
            a: "Cordyceps",
            b: "Zombie Fungus",
            c: "Infected Spore",
            d: "Brain Fungus"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 316,
        question: "¿Que videojuego incluye las Fireflies?",
        answers: {
            a: "The Last of Us",
            b: "Days Gone",
            c: "State of Decay",
            d: "Dying Light"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 317,
        question: "¿En que consola aparecio originalmente The Last of Us?",
        answers: {
            a: "PlayStation 3",
            b: "PlayStation 4",
            c: "Ambas",
            d: "PlayStation 5"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 318,
        question: "¿Como se llama la secuela de The Last of Us?",
        answers: {
            a: "The Last of Us 2",
            b: "The Last of Us Part II",
            c: "The Last of Us: Part Two",
            d: "The Last of Us: Left Behind"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 319,
        question: "¿Que videojuego incluye a Abby como protagonista?",
        answers: {
            a: "The Last of Us",
            b: "The Last of Us Part II",
            c: "Left Behind",
            d: "Uncharted"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 320,
        question: "¿En que año se lanzo The Last of Us Part II?",
        answers: {
            a: "2019",
            b: "2020",
            c: "2021",
            d: "2022"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 321,
        question: "¿Como se llama el protagonista de Death Stranding?",
        answers: {
            a: "Sam Porter",
            b: "Sam Bridges",
            c: "Norman Reedus",
            d: "Cliff Unger"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 322,
        question: "¿Que empresa desarrollo Death Stranding?",
        answers: {
            a: "Konami",
            b: "Sony",
            c: "Kojima Productions",
            d: "Platinum Games"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 323,
        question: "¿En que videojuego aparece BB?",
        answers: {
            a: "Metal Gear Solid",
            b: "Death Stranding",
            c: "Silent Hill",
            d: "P.T."
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 324,
        question: "¿Como se llaman los enemigos principales en Death Stranding?",
        answers: {
            a: "BTs",
            b: "MULEs",
            c: "Terrorists",
            d: "Timefall"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 325,
        question: "¿Que actor aparece en Death Stranding?",
        answers: {
            a: "Keanu Reeves",
            b: "Norman Reedus",
            c: "Mads Mikkelsen",
            d: "Ambos B y C"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 326,
        question: "¿En que videojuego aparece la lluvia temporal?",
        answers: {
            a: "Control",
            b: "Death Stranding",
            c: "Quantum Break",
            d: "Alan Wake"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 327,
        question: "¿Como se llama la organizacion en Death Stranding?",
        answers: {
            a: "Bridges",
            b: "UCA",
            c: "Chiral Network",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 328,
        question: "¿Que videojuego incluye el concepto de Likes?",
        answers: {
            a: "Social Media Simulator",
            b: "Death Stranding",
            c: "Watch Dogs",
            d: "Mirror's Edge"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 329,
        question: "¿En que año se lanzo Control?",
        answers: {
            a: "2018",
            b: "2019",
            c: "2020",
            d: "2021"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 330,
        question: "¿Como se llama la protagonista de Control?",
        answers: {
            a: "Jesse Faden",
            b: "Emily Pope",
            c: "Helen Marshall",
            d: "Ahti"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 331,
        question: "¿Que empresa desarrollo Control?",
        answers: {
            a: "505 Games",
            b: "Remedy Entertainment",
            c: "Epic Games",
            d: "Microsoft"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 332,
        question: "¿En que videojuego aparece la FBC?",
        answers: {
            a: "Alan Wake",
            b: "Quantum Break",
            c: "Control",
            d: "Max Payne"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 333,
        question: "¿Como se llama el edificio en Control?",
        answers: {
            a: "The Bureau",
            b: "The Oldest House",
            c: "The Federal Building",
            d: "The Threshold"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 334,
        question: "¿Que videojuego incluye Objects of Power?",
        answers: {
            a: "Alan Wake",
            b: "Control",
            c: "Quantum Break",
            d: "American Nightmare"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 335,
        question: "¿En que consola aparecio originalmente Control?",
        answers: {
            a: "PlayStation 4",
            b: "Xbox One",
            c: "PC",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 336,
        question: "¿Como se llama el arma principal en Control?",
        answers: {
            a: "Service Weapon",
            b: "Director's Gun",
            c: "Object of Power",
            d: "FBC Pistol"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 337,
        question: "¿Que videojuego incluye la Astral Plane?",
        answers: {
            a: "Control",
            b: "Alan Wake",
            c: "Quantum Break",
            d: "Max Payne"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 338,
        question: "¿En que año se lanzo Assassin's Creed Valhalla?",
        answers: {
            a: "2019",
            b: "2020",
            c: "2021",
            d: "2022"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 339,
        question: "¿Como se llama el protagonista de AC Valhalla?",
        answers: {
            a: "Eivor",
            b: "Ragnar",
            c: "Bjorn",
            d: "Sigurd"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 340,
        question: "¿Que videojuego incluye Asgard?",
        answers: {
            a: "God of War",
            b: "AC Valhalla",
            c: "Hellblade",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 341,
        question: "¿En que pais transcurre principalmente AC Valhalla?",
        answers: {
            a: "Noruega",
            b: "Inglaterra",
            c: "Dinamarca",
            d: "Suecia"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 342,
        question: "¿Como se llama el pueblo de Eivor?",
        answers: {
            a: "Ravensthorpe",
            b: "Jorvik",
            c: "Lunden",
            d: "Vinland"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 343,
        question: "¿Que videojuego incluye el Hidden Blade?",
        answers: {
            a: "Assassin's Creed",
            b: "Dishonored",
            c: "Hitman",
            d: "Tenchu"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 344,
        question: "¿En que consola aparecio originalmente AC Valhalla?",
        answers: {
            a: "PlayStation 4",
            b: "PlayStation 5",
            c: "Xbox One",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 345,
        question: "¿Como se llama la orden enemiga en AC Valhalla?",
        answers: {
            a: "Templarios",
            b: "Order of Ancients",
            c: "Abstergo",
            d: "Cult of Kosmos"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 346,
        question: "¿Que videojuego incluye longships?",
        answers: {
            a: "AC Odyssey",
            b: "AC Black Flag",
            c: "AC Valhalla",
            d: "Sea of Thieves"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 347,
        question: "¿En que año se lanzo FIFA 22?",
        answers: {
            a: "2020",
            b: "2021",
            c: "2022",
            d: "2023"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 348,
        question: "¿Como se llama el motor grafico de FIFA 22?",
        answers: {
            a: "Frostbite",
            b: "Unreal Engine",
            c: "Unity",
            d: "CryEngine"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 349,
        question: "¿Que videojuego incluye el modo Ultimate Team?",
        answers: {
            a: "FIFA",
            b: "PES",
            c: "Football Manager",
            d: "Rocket League"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 350,
        question: "¿En que consola aparecio originalmente FIFA 22?",
        answers: {
            a: "PlayStation 4",
            b: "PlayStation 5",
            c: "Xbox Series",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "easy"
    },
    {
        id: 351,
        question: "¿Como se llama el modo carrera en FIFA?",
        answers: {
            a: "Career Mode",
            b: "Manager Mode",
            c: "Professional Mode",
            d: "Coach Mode"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 352,
        question: "¿Que empresa desarrolla FIFA?",
        answers: {
            a: "Electronic Arts",
            b: "EA Sports",
            c: "FIFA",
            d: "Konami"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 353,
        question: "¿En que videojuego aparece el modo Volta?",
        answers: {
            a: "FIFA 19",
            b: "FIFA 20",
            c: "FIFA 21",
            d: "Todas las anteriores"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 354,
        question: "¿Como se llama el rival principal de FIFA?",
        answers: {
            a: "Pro Evolution Soccer",
            b: "eFootball",
            c: "PES",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 355,
        question: "¿Que videojuego incluye HyperMotion Technology?",
        answers: {
            a: "FIFA 21",
            b: "FIFA 22",
            c: "FIFA 23",
            d: "PES 2022"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 356,
        question: "¿En que año se lanzo el primer Call of Duty: Modern Warfare?",
        answers: {
            a: "2006",
            b: "2007",
            c: "2008",
            d: "2009"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 357,
        question: "¿Como se llama el protagonista de MW?",
        answers: {
            a: "Captain Price",
            b: "Soap MacTavish",
            c: "Ghost",
            d: "No tiene protagonista fijo"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 358,
        question: "¿Que empresa desarrollo Modern Warfare 2019?",
        answers: {
            a: "Activision",
            b: "Infinity Ward",
            c: "Treyarch",
            d: "Sledgehammer Games"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 359,
        question: "¿En que videojuego aparece el mapa Rust?",
        answers: {
            a: "Call of Duty 4",
            b: "Modern Warfare 2",
            c: "Black Ops",
            d: "World at War"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 360,
        question: "¿Como se llama el modo batalla real de COD?",
        answers: {
            a: "Battle Royale",
            b: "Warzone",
            c: "Blackout",
            d: "Ground War"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 361,
        question: "¿Que videojuego incluye el mapa Verdansk?",
        answers: {
            a: "Modern Warfare",
            b: "Warzone",
            c: "Black Ops",
            d: "Cold War"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 362,
        question: "¿En que consola aparecio originalmente Warzone?",
        answers: {
            a: "PlayStation 4",
            b: "Xbox One",
            c: "PC",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "easy"
    },
    {
        id: 363,
        question: "¿Como se llama el personaje Ghost?",
        answers: {
            a: "Simon Riley",
            b: "John Price",
            c: "Kyle Garrick",
            d: "Alex Mason"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 364,
        question: "¿Que videojuego incluye el nivel No Russian?",
        answers: {
            a: "Call of Duty 4",
            b: "Modern Warfare 2",
            c: "Modern Warfare 3",
            d: "Black Ops"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 365,
        question: "¿En que año se lanzo Battlefield 1?",
        answers: {
            a: "2015",
            b: "2016",
            c: "2017",
            d: "2018"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 366,
        question: "¿Como se llama el motor de Battlefield?",
        answers: {
            a: "Frostbite",
            b: "Unreal Engine",
            c: "CryEngine",
            d: "Unity"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 367,
        question: "¿Que empresa desarrollo Battlefield?",
        answers: {
            a: "Electronic Arts",
            b: "DICE",
            c: "EA Sports",
            d: "Activision"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 368,
        question: "¿En que videojuego aparece el modo Operations?",
        answers: {
            a: "Battlefield 4",
            b: "Battlefield 1",
            c: "Battlefield V",
            d: "Battlefield 2042"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 369,
        question: "¿Como se llama el modo batalla real de Battlefield?",
        answers: {
            a: "Warzone",
            b: "Firestorm",
            c: "Battle Royale",
            d: "Last Stand"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 370,
        question: "¿Que videojuego incluye el concepto de Levolution?",
        answers: {
            a: "Battlefield 3",
            b: "Battlefield 4",
            c: "Battlefield 1",
            d: "Battlefield V"
        },
        correct: "b",
        difficulty: "hard"
    },
    {
        id: 371,
        question: "¿En que guerra se basa Battlefield 1?",
        answers: {
            a: "Primera Guerra Mundial",
            b: "Segunda Guerra Mundial",
            c: "Guerra de Vietnam",
            d: "Guerra del Golfo"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 372,
        question: "¿Como se llama el primer mapa de Battlefield 1942?",
        answers: {
            a: "Wake Island",
            b: "El Alamein",
            c: "Stalingrad",
            d: "Market Garden"
        },
        correct: "a",
        difficulty: "hard"
    },
    {
        id: 373,
        question: "¿Que videojuego incluye el mapa Operation Metro?",
        answers: {
            a: "Battlefield Bad Company",
            b: "Battlefield 3",
            c: "Battlefield 4",
            d: "Battlefield 1"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 374,
        question: "¿En que año se lanzo Valorant?",
        answers: {
            a: "2019",
            b: "2020",
            c: "2021",
            d: "2022"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 375,
        question: "¿Como se llaman los personajes en Valorant?",
        answers: {
            a: "Heroes",
            b: "Agents",
            c: "Operators",
            d: "Legends"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 376,
        question: "¿Que empresa desarrollo Valorant?",
        answers: {
            a: "Valve Corporation",
            b: "Riot Games",
            c: "Blizzard Entertainment",
            d: "Epic Games"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 377,
        question: "¿En que videojuego aparece Jett?",
        answers: {
            a: "Overwatch",
            b: "Apex Legends",
            c: "Valorant",
            d: "CS:GO"
        },
        correct: "c",
        difficulty: "easy"
    },
    {
        id: 378,
        question: "¿Como se llama la moneda de Valorant?",
        answers: {
            a: "VP",
            b: "Valorant Points",
            c: "Radianite",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 379,
        question: "¿Que videojuego incluye el mapa Bind?",
        answers: {
            a: "Counter-Strike",
            b: "Valorant",
            c: "Rainbow Six",
            d: "Overwatch"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 380,
        question: "¿En que consola esta disponible Valorant?",
        answers: {
            a: "PlayStation",
            b: "Xbox",
            c: "Nintendo Switch",
            d: "Solo PC"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 381,
        question: "¿Como se llama el agente teleportador en Valorant?",
        answers: {
            a: "Jett",
            b: "Omen",
            c: "Yoru",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "hard"
    },
    {
        id: 382,
        question: "¿Que videojuego incluye el Spike?",
        answers: {
            a: "Counter-Strike",
            b: "Valorant",
            c: "Rainbow Six",
            d: "CS:GO"
        },
        correct: "b",
        difficulty: "medium"
    },
    {
        id: 383,
        question: "¿En que año se lanzo Among Us?",
        answers: {
            a: "2018",
            b: "2019",
            c: "2020",
            d: "2021"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 384,
        question: "¿Como se llama la nave en Among Us?",
        answers: {
            a: "The Skeld",
            b: "MIRA HQ",
            c: "Polus",
            d: "Varia segun el mapa"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 385,
        question: "¿Que empresa desarrollo Among Us?",
        answers: {
            a: "InnerSloth",
            b: "Innersloth LLC",
            c: "Forest Willard",
            d: "Todas las anteriores"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 386,
        question: "¿En que videojuego aparecen los Impostors?",
        answers: {
            a: "Trouble in Terrorist Town",
            b: "Among Us",
            c: "Mafia",
            d: "Town of Salem"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 387,
        question: "¿Como se llaman las tareas en Among Us?",
        answers: {
            a: "Tasks",
            b: "Missions",
            c: "Jobs",
            d: "Assignments"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 388,
        question: "¿Que videojuego incluye Emergency Meetings?",
        answers: {
            a: "Fall Guys",
            b: "Among Us",
            c: "Party Animals",
            d: "Gang Beasts"
        },
        correct: "b",
        difficulty: "easy"
    },
    {
        id: 389,
        question: "¿En que consola esta disponible Among Us?",
        answers: {
            a: "PC",
            b: "Mobile",
            c: "Nintendo Switch",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "easy"
    },
    {
        id: 390,
        question: "¿Como se llama el proceso de eliminacion en Among Us?",
        answers: {
            a: "Voting",
            b: "Ejection",
            c: "Elimination",
            d: "Banishment"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 391,
        question: "¿Que videojuego incluye vents?",
        answers: {
            a: "Counter-Strike",
            b: "Among Us",
            c: "Rainbow Six",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 392,
        question: "¿En que año se popularizo Among Us?",
        answers: {
            a: "2018",
            b: "2019",
            c: "2020",
            d: "2021"
        },
        correct: "c",
        difficulty: "medium"
    },
    {
        id: 393,
        question: "¿Como se llama el mapa espacial de Among Us?",
        answers: {
            a: "The Skeld",
            b: "Space Station",
            c: "Orbital Platform",
            d: "Star Base"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 394,
        question: "¿Que videojuego incluye sabotajes?",
        answers: {
            a: "Among Us",
            b: "Fall Guys",
            c: "Party Animals",
            d: "Gang Beasts"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 395,
        question: "¿En que videojuego aparece el mapa Polus?",
        answers: {
            a: "Among Us",
            b: "Fall Guys",
            c: "Valorant",
            d: "Counter-Strike"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 396,
        question: "¿Como se llama el mapa de la sede en Among Us?",
        answers: {
            a: "MIRA HQ",
            b: "MIRA Headquarters",
            c: "Corporate Office",
            d: "Space HQ"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 397,
        question: "¿Que videojuego incluye camaras de seguridad?",
        answers: {
            a: "Among Us",
            b: "Five Nights at Freddy's",
            c: "Rainbow Six",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "medium"
    },
    {
        id: 398,
        question: "¿En que videojuego aparece el Admin Map?",
        answers: {
            a: "Among Us",
            b: "CS:GO",
            c: "Valorant",
            d: "Rainbow Six"
        },
        correct: "a",
        difficulty: "medium"
    },
    {
        id: 399,
        question: "¿Como se llama el proceso de reportar un cuerpo en Among Us?",
        answers: {
            a: "Report",
            b: "Emergency",
            c: "Alert",
            d: "Call Meeting"
        },
        correct: "a",
        difficulty: "easy"
    },
    {
        id: 400,
        question: "¿Que videojuego se volvio viral durante la pandemia de 2020?",
        answers: {
            a: "Fall Guys",
            b: "Among Us",
            c: "Animal Crossing",
            d: "Todas las anteriores"
        },
        correct: "d",
        difficulty: "easy"
    }
];

// Funcion para obtener preguntas aleatorias con dificultad progresiva
function getRandomQuestions(count = 20) {
    // Filtrar preguntas por dificultad
    const easyQuestions = QUESTIONS_DATABASE.filter(q => q.difficulty === 'easy');
    const mediumQuestions = QUESTIONS_DATABASE.filter(q => q.difficulty === 'medium');
    const hardQuestions = QUESTIONS_DATABASE.filter(q => q.difficulty === 'hard');
    
    // Mezclar cada grupo de preguntas
    const shuffledEasy = [...easyQuestions].sort(() => 0.5 - Math.random());
    const shuffledMedium = [...mediumQuestions].sort(() => 0.5 - Math.random());
    const shuffledHard = [...hardQuestions].sort(() => 0.5 - Math.random());
    
    // Seleccionar preguntas según el patrón requerido
    const selectedQuestions = [];
    
    // Preguntas 0-7: Solo fáciles (8 preguntas)
    selectedQuestions.push(...shuffledEasy.slice(0, 8));
    
    // Preguntas 8-13: Solo medias (6 preguntas)
    selectedQuestions.push(...shuffledMedium.slice(0, 6));
    
    // Preguntas 14-19: Solo difíciles (6 preguntas)
    selectedQuestions.push(...shuffledHard.slice(0, 6));
    
    // Verificar que tenemos suficientes preguntas
    if (selectedQuestions.length < count) {
        console.error('No hay suficientes preguntas en la base de datos para cada nivel de dificultad');
        // Rellenar con preguntas adicionales si es necesario
        const remaining = count - selectedQuestions.length;
        const allShuffled = [...QUESTIONS_DATABASE].sort(() => 0.5 - Math.random());
        selectedQuestions.push(...allShuffled.slice(0, remaining));
    }
    
    return selectedQuestions.slice(0, count);
}

// Configuracion de puntuacion con multiplicadores por dificultad
const SCORING_CONFIG = {
    baseScore: 50,
    multiplier: 1.5,
    timeBonus: 2,
    difficultyMultipliers: {
        easy: 1,      // Preguntas 0-7
        medium: 1.5,  // Preguntas 8-13
        hard: 2       // Preguntas 14-19
    }
};

// Funcion para calcular puntuacion
function calculateScore(questionNumber, timeRemaining) {
    const basePoints = SCORING_CONFIG.baseScore * Math.pow(SCORING_CONFIG.multiplier, questionNumber - 1);
    const timePoints = timeRemaining * SCORING_CONFIG.timeBonus;
    
    // Aplicar multiplicador según la dificultad
    let difficultyMultiplier = SCORING_CONFIG.difficultyMultipliers.easy;
    if (questionNumber > 8 && questionNumber <= 14) {
        difficultyMultiplier = SCORING_CONFIG.difficultyMultipliers.medium;
    } else if (questionNumber > 14) {
        difficultyMultiplier = SCORING_CONFIG.difficultyMultipliers.hard;
    }
    
    return Math.round((basePoints + timePoints) * difficultyMultiplier);
}