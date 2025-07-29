// Base de datos de preguntas sobre videojuegos
const QUESTIONS_DATABASE = [
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
            c: "Joker",
            d: "Ren Amamiya"
        },
        correct: "c",
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
    }
];

// Funcion para obtener preguntas aleatorias
function getRandomQuestions(count = 20) {
    const shuffled = [...QUESTIONS_DATABASE].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Configuracion de puntuacion
const SCORING_CONFIG = {
    baseScore: 50,
    multiplier: 1.5,
    timeBonus: 2
};

// Funcion para calcular puntuacion
function calculateScore(questionNumber, timeRemaining) {
    const basePoints = SCORING_CONFIG.baseScore * Math.pow(SCORING_CONFIG.multiplier, questionNumber - 1);
    const timePoints = timeRemaining * SCORING_CONFIG.timeBonus;
    return Math.round(basePoints + timePoints);
}