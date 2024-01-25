# Word Guessing Game

This is a simple Word Guessing Game where the player needs to guess a word within a certain number of attempts. The game provides hints for the words and displays images as the player makes correct or incorrect guesses. The basic idea of the game is taken from \[1] but developed completely from scratch (the difference is identical both in code and features).

## How to Play

1.     Open index.html in your web browser to start the game.
2.     You will see a word display with blanks, and a message indicating the number of attempts remaining.
3.     Enter a letter in the input field and click the "Guess" button.
4.     If your guess is correct, the game will update the word display with the correct letter, display a message, and show an image.
5.     If your guess is wrong, the game will update the number of attempts, display a message, and show a different image.
6.     Keep guessing until you guess the word correctly or run out of attempts.

## Game Features

- The game selects a random word from a predefined list.
- The game provides hints for the words to help you guess.
- You have a limited number of attempts to guess the word.
- The game displays an emoji when you guess the word correctly.
- Images change as you make correct or incorrect guesses.


## Word List

The game uses the following words for guessing:

- Apple: There is a big brand with this name.
- Banana: There is a country name with this.
- date: Grows mostly in Saudi Arabia.
- Grape: Wine is made up of this.
- Lemon: Rich source of citric acid.
- Orange: Rich source of calcium.
- strawberry: Sweet red fruit often used in desserts.
- pineapple: Tropical fruit with a spiky outer skin.
- watermelon: Large, juicy fruit with green skin and red flesh.
- blueberry: Small, round, and typically blue fruit often used in pancakes.
- kiwi: Small, fuzzy fruit with green flesh and tiny black seeds.
- pomegranate: Fruit with red seeds surrounded by a juicy pulp.
- avocado: Creamy green fruit often used in salads and guacamole.
- cherry: Small, round fruit available in various colors, including red and black.
- mango: Tropical fruit with a sweet and juicy orange flesh.

The word list can be changed or increased based on the interest.

## Images

The game displays images as you make guesses. The images are numbered from 0 to 7 and are stored in the "images" folder within the project directory.

## Development

This game was developed using HTML, CSS, and JavaScript. The main logic of the game can be found in the script.js file, and the styling is defined in the style.css file.

## Acknowledgments

- This game was created as a simple project for fun and learning.
- Images used in the game are sourced from various places on the internet.

## References

\[1] Last accessed on 30<sup>th</sup> November 2023 <https://www.geeksforgeeks.org/word-guessing-game-using-html-css-and-javascript/>
