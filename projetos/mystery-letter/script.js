window.onload = generateLetter;

// Cria arrays para cada 'estilo'
var backgroundImg = ['background1.png', 'background2.png', 'background3.png', 'background4.png', ''];
var fontFamily = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
var fontWeight = ['normal', 'bold', 'bolder'];
var fontStyle = ['normal', 'italic', 'oblique', 'inherit', 'unset', 'initial'];
var fontVariant = ['normal', 'small-caps'];

function generateLetter() {
    let mysteryLetter = document.getElementById("mysteryLetter");
    let inputText = document.getElementById('userInput').value;
    let splitedText = inputText.split(" ");

    clearLetter()

    for (let index = 0; index < splitedText.length; index++) {
        let letterWord = document.createElement('span');
        letterWord.className = "mysteryLetter";
        mysteryLetter.appendChild(letterWord);

        letterWord.innerHTML = splitedText[index];

        letterWord.style.backgroundColor = generateRandomColor();
        letterWord.style.color = generateRandomColor();
        letterWord.style.backgroundImage = "url('" + backgroundImg[randomize(backgroundImg)] + "')";
        letterWord.style.fontFamily = fontFamily[randomize(fontFamily)];
        letterWord.style.fontWeight = fontWeight[randomize(fontWeight)];
        letterWord.style.fontStyle = fontStyle[randomize(fontStyle)];
        letterWord.style.fontVariant = fontVariant[randomize(fontVariant)];
        letterWord.style.fontSize = Math.floor(Math.random() * (70 - 30) + 30) + 'px';
    }
    wordCounter(splitedText)
}

function generateRandomColor() {
    var randomColor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
    return randomColor
}

function randomize(array) {
    let randomFeature = Math.floor(Math.random() * array.length);
    return randomFeature
}

function clearLetter() {
    let numberOfLetters = document.getElementsByClassName("mysteryLetter").length;

    for (let i = 0; i < numberOfLetters; i++) {
        let firstChild = mysteryLetter.firstElementChild;
        mysteryLetter.removeChild(firstChild);
    }
}

function wordCounter(splitedText) {
    document.getElementsByClassName("wordCounter")[1].innerHTML = splitedText.length;
    document.getElementsByClassName("wordCounter")[0].style.display = "block";
    document.getElementsByClassName("wordCounter")[1].style.display = "inline-block";
}
