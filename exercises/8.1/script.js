// Exercicio 1
const getFatorial = (number) => {for (let i = number-1; i > 0; i--) number *= i; console.log(number)}
getFatorial(4)

// Exercicio 2
function longestWord(sentence) {
    const wordsArray = sentence.split(" ");
    let bigger = '';

    for (let i = 0; i < wordsArray.length; i++) {
        let characters = wordsArray[i].length
        if (characters > bigger.length) {
            bigger = wordsArray[i];
        }
    }
    console.log(bigger)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")

// Exercicio 3