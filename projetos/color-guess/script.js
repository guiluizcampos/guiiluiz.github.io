function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var rcolor = "rgb(" + x + "," + y + "," + z + ")";
    return rcolor
}

var correct = Math.floor(Math.random() * (6 - 0) + 0); // Opção aleatória que será a resposta correta

function changeColor() {
    let c, options = document.querySelectorAll('.color');
    for (c = 0; c < options.length; c++) {
        options[c].style.backgroundColor = randomColor(); // Coloca cores aleatórias nas opções
    }
    // Define o rgb do texto da dica
    var correctanswer = document.getElementsByClassName("color")[correct]
    document.getElementById("rgb").innerHTML = correctanswer.style.backgroundColor
    return options
}

var selected;
var answer;

function chooseColor(cor) {
    answer = document.querySelector(cor).style.backgroundColor;
    clearSelected()
    selected = document.querySelector(cor)
    selectColor()
    resultScore(answer)
    document.getElementById("reiniciar").style.display = "inline-block";
}

var scorepoint = 0; // Cria variável para executar a soma do placar

function resultScore(answer) {
    let result = document.querySelectorAll(".color")[correct]
    if (answer == result.style.backgroundColor) {
        document.getElementById("result").style.color = "lightgreen";
        document.getElementById("result").innerHTML = "Correct!";
        scorepoint = scorepoint + 3;
        document.getElementById("score").innerHTML = scorepoint;
        setTimeout(resetGame, 400);
    } else {
        document.getElementById("result").style.color = "salmon";
        document.getElementById("result").innerHTML = "Wrong Answer! Guess Again!";
        if (scorepoint <= 0) {
            scorepoint = 0;
        } else {
            scorepoint = scorepoint - 1
        }
        document.getElementById("score").innerHTML = scorepoint;
    }
}

// Destaca a cor selecionada
function selectColor() {
    selected.style.borderColor = "black"
    selected.style.borderStyle = "solid"
    selected.style.borderWidth = "5px"
}

function clearSelected() {
    let color = document.querySelectorAll(".color")

    for (i = 0; i < color.length; i++) {
        color[i].style.borderColor = "";
        color[i].style.borderStyle = "";
        color[i].style.borderWidth = "";
    }
}

function resetGame() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("reiniciar").style.display = "none";
    correct = Math.floor(Math.random() * (6 - 0) + 0);
    changeColor();
    clearSelected()
}

function showResetScoreButton() {
    document.getElementById("score").innerHTML = "Reset";
}

function hideResetScoreButton() {
    document.getElementById("score").innerHTML = scorepoint;
}

function resetScore() {
    scorepoint = 0;
}
