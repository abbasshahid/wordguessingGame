// Define an array of words for the game
const words = [
    {
    word: "apple",
    hint: "There is brand with this word."
    },
    {
        word: "banana",
        hint: "There is country with this word."
    },
    {
        word: "date",
        hint: "Growup mostly in Saudi Arabia."
    },
    {
    word: "grape",
    hint: "Rich source of Wine."
    },
    {
        word: "lemon",
        hint: "Rich source of citric acid."
    },
    {
        word: "orange",
        hint: "Rich source of calciam"
    },
    {
        word: "strawberry",
        hint: "Sweet red fruit often used in desserts."
    },
    {
        word: "pineapple",
        hint: "Tropical fruit with a spiky outer skin."
    },
    {
        word: "watermelon",
        hint: "Large, juicy fruit with green skin and red flesh."
    },
    {
        word: "blueberry",
        hint: "Small, round, and typically blue fruit often used in pancakes."
    },
    {
        word: "kiwi",
        hint: "Small, fuzzy fruit with green flesh and tiny black seeds."
    },
    {
        word: "pomegranate",
        hint: "Fruit with red seeds surrounded by a juicy pulp."
    },
    {
        word: "avocado",
        hint: "Creamy green fruit often used in salads and guacamole."
    },
    {
        word: "cherry",
        hint: "Small, round fruit available in various colors, including red and black."
    },
    {
        word: "mango",
        hint: "Tropical fruit with a sweet and juicy orange flesh."
    },
];
const imageFilenames = ["0.svg", "1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.gif"];
let currentImageIndex = 0;
let selected = words[Math.floor(Math.random() * words.length)];
let selectedWord = selected.word;
let selectedHint = selected.hint;
let attempts = 7;
let guessedLetters = [];
let wordDisplay = [];


wordDisplay.push(selectedHint + "\n");
const imageContainer = document.getElementById("image-container");
imageContainer.innerHTML = `<img src="images/0.svg" alt="Image 8">`;

for (let i = 0; i < selectedWord.length; i++) {
    wordDisplay.push("_");
    
}


function updateWordDisplay() {
    document.getElementById("word-display").textContent = wordDisplay.join(" ");
}


function handleGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();

    if (guessedLetters.includes(guess)) {
        document.getElementById("message").textContent = "You've already guessed that letter.";
        return;
    }

    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                wordDisplay[i] = guess;
            }
        }
        document.getElementById("message").textContent = `You're guess is correct.`;
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = `<img src="images/8.gif" alt="Image 8">`;
        updateWordDisplay();
        
    } else {
        currentImageIndex++;
        attempts--;
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = `<img src="images/${imageFilenames[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
        document.getElementById("message").textContent = `Wrong guess! ${attempts} attempts remaining.`;
    }

    if (attempts === 0) {
        document.getElementById("message").textContent = `You've run out of attempts. The word was "${selectedWord}".`;
        document.getElementById("guess-input").setAttribute("disabled", true);
        document.getElementById("guess-button").setAttribute("disabled", true);
    }

    guessInput.value = "";
}
document.getElementById("guess-button").addEventListener("click", handleGuess);
updateWordDisplay();
