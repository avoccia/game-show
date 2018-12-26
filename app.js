// VARIABLES
const startButton = document.querySelector('.btn__reset');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phrases = [
  'down for the count',
  'shot in the dark',
  'cut to the chase',
  'in the red',
  'my cup of tea'
];
let missed = 0;

// Event listener to watch for the start of the game & hide start screen
startButton.addEventListener('click', () => {
  const startScreen = document.getElementById('overlay');
  startScreen.style.display = 'none';
});

// Function to get a random phrase from an array
function getRandomPhraseArray(arr) {
  const randomNum = Math.floor(Math.random() * (5));
  const randomPhrase = arr[randomNum];
  const phraseChars = randomPhrase.split('');
  return phraseChars;
}

console.log(getRandomPhraseArray(phrases));