window.onload = generateLetter;

// Cria arrays para cada 'estilo'
const backgroundImg = ['background1.png', 'background2.png', 'background3.png', 'background4.png', ''];
const fontFamily = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
const fontWeight = ['normal', 'bold', 'bolder'];
const fontStyle = ['normal', 'italic', 'oblique', 'inherit', 'unset', 'initial'];
const fontVariant = ['normal', 'small-caps'];
const textDecoration = ['underline', 'line-through', 'none', 'none'];

function generateLetter() {
    const mysteryLetter = document.getElementById("mystery-letter");
    let inputText = document.getElementById('user-input').value;
    let splitedText = inputText.split(" ");
    const maxFontSize = 70;
    const minFontSize = 30;

    clearLetter()

    if (inputText == "") {
        document.getElementsByClassName("word-counter")[0].style.display = "none";
        setTimeout(function(){ 
            alert('Digite sua carta!');
        }, 10);
    } else {
        for (let word of splitedText) {
            let letterWord = document.createElement('span');
            letterWord.className = "mystery-letter";
            mysteryLetter.appendChild(letterWord);

            letterWord.innerHTML = word;

            letterWord.style.backgroundColor = generateRandomColor();
            letterWord.style.color = generateRandomColor();
            letterWord.style.fontSize = Math.floor(Math.random() * (maxFontSize - minFontSize) + minFontSize) + 'px';
            letterWord.style.backgroundImage = "url('img/" + randomize(backgroundImg) + "')";
            letterWord.style.fontFamily = randomize(fontFamily);
            letterWord.style.fontWeight = randomize(fontWeight);
            letterWord.style.fontStyle = randomize(fontStyle);
            letterWord.style.fontVariant = randomize(fontVariant);
            letterWord.style.textDecoration = randomize(textDecoration);
        }
        wordCounter(splitedText)
    }
}

function generateRandomColor() {
    return randomColor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
}

function randomize(array) {
    return randomFeature = array[Math.floor(Math.random() * array.length)];
}

function clearLetter() {
    const mysteryLetter = document.getElementById("mystery-letter"); 
    while (mysteryLetter.firstChild) {
        mysteryLetter.firstChild.remove();
    }
}

function wordCounter(splitedText) {
    document.getElementsByClassName("word-counter-number")[0].innerHTML = splitedText.length;
}
