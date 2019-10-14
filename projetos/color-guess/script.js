window.onload = changeColor

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rcolor = "rgb(" + red + "," + green + "," + blue + ")";
    return rcolor
}

// Opção aleatória que será a resposta correta
function correctColor() {
    return Math.floor(Math.random() * (6 - 0) + 0);
}

let correct =  correctColor();

function changeColor() {
    let options = document.querySelectorAll('.color');
    for (let colorIndex = 0; colorIndex < options.length; colorIndex++) {
        options[colorIndex].style.backgroundColor = randomColor(); // Coloca cores aleatórias nas opções
    }
    // Define o rgb do texto da dica
    const correctanswer = document.getElementsByClassName("color")[correct]
    document.getElementById("rgb").innerHTML = correctanswer.style.backgroundColor
    return options
}

let selected;

function chooseColor(cor) {
    let answer = document.querySelector(cor).style.backgroundColor;
    clearSelected()
    selected = document.querySelector(cor)
    selectColor()
    resultScore(answer)
    document.getElementById("reiniciar").style.display = "inline-block";
}

let scorePoint = 0; // Cria variável para executar a soma do placar

function resultScore(answer) {
    const result = document.querySelectorAll(".color")[correct]
    if (answer == result.style.backgroundColor) {
        document.getElementById("result").style.color = "lightgreen";
        document.getElementById("result").innerHTML = "Correct!";
        scorePoint += 3;
        document.getElementById("score").innerHTML = scorePoint;
        setTimeout(resetGame, 500);
    } else {
        document.getElementById("result").style.color = "salmon";
        document.getElementById("result").innerHTML = "Wrong Answer! Guess Again!";
        if (scorePoint <= 0) {
            scorePoint = 0;
        } else {
            scorePoint -= 1;
        }
        document.getElementById("score").innerHTML = scorePoint;
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
    correct = correctColor();
    changeColor();
    clearSelected()
}

function showResetScoreButton() {
    document.getElementById("score").innerHTML = "Reset";
}

function hideResetScoreButton() {
    document.getElementById("score").innerHTML = scorePoint;
}

function resetScore() {
    scorePoint = 0;
}
