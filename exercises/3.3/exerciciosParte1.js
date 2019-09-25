// Exercício 1
function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function modulo(a,b){
    return a % b;
}


// Exercício 2
function maior(a,b){
    if (a > b) {
        return a;
    }else{
        return b;
    }
}


// Exercício 3
function maiorNumero(a,b,c){
    if (a > b) {
        if(a > c){
            return a;
        }else{
            return c;
        }
    }else if (b > c){
        return b;
    }else{
        return c;
    }
}


// Exercício 4
function positivo(a){
    if(a > 0){
        return "positive";
    }else if(a < 0){
        return "negative";
    }else{
        return "zero";
    }
}


// Exercício 5
function triangulo(a,b,c){
    if(a+b+c == 180){
        return true;
    }else{
        return "Valores Inválidos";
    }
    
}


// Exercício 6
function chess(piece){
    if (piece.toLowerCase() == "torre"){
        return "A torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça.";
    }else if(piece.toLowerCase() == "bispo") {
        return "O bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo";
    }else if(piece.toLowerCase() == "cavalo") {
        return "O cavalo tem um movimento especial que parece a letra L";
    }else if(piece.toLowerCase() == "rainha") {
        return "A Rainha pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça";
    }else if(piece.toLowerCase() == "rei") {
        return "O Rei movimenta-se apenas 1 casa em qualquer direção";
    }else if(piece.toLowerCase() == "peão") {
        return "O peão só se movimenta para frente, sendo a única peça que não se move para trás";
    }else{
        return "Peça inválida, não se esqueça do acento no peão";
    }
}


// Exercício 7 
function grade(porcentagem){
    if(porcentagem > 100){
        return "Porcentagem inválida!";
    }else if(porcentagem >= 90) {
        return "A";
    }else if(porcentagem >= 80) {
        return "B";
    }else if(porcentagem >= 70) {
        return "C";
    }else if(porcentagem >= 60) {
        return "D";
    }else if(porcentagem >= 40) {
        return "E";
    }else if(porcentagem < 40){
        return "F";
    }else{
        return "Porcentagem inválida!";
    }
}


// Exercício 8 
function par(a,b,c){
    if (a % 2 == 0 || b % 2 == 0 || c % 2 ==0){
        return true;
    }else{
        return false;
    }
}


// Exercício 9
function impar(a,b,c){
    if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
        return true;
    }else{
        return false;
    }
}


// Exercício 10
function venda(custo,venda){
    if(custo <= 0 || venda <= 0){
        return  "Valores inválidos!";
    }else{
        var lucro = (venda - (120/100 * custo)) * 1000;
        return  lucro;
    }
}


// Exercício 11
function salario(salBruto){
    if(salBruto < 1556.95) {
        var inss = 8/100 * salBruto;
    }else if(salBruto < 2594.93) {
        var inss = 9/100 * salBruto;
    }else if(salBruto < 5189.83) {
        var inss = 11/100 * salBruto;
    }else{
        var inss = 570.88;
    }
    
    if(salBruto < 1903.99) {
        var ir = 0;
    }else if(salBruto < 2826,66) {
        var ir = 7.5/100 * salBruto - 142.80;
    }else if(salBruto < 3751,06) {
        var ir = 15/100 * salBruto - 354.80;
    }else if(salBruto < 4664,69) {
        var ir = 22.5/100 * salBruto - 636.13;
    }else{
        var ir = 27.5/100 * salBruto - 869.36;
    }
    
    var salLiq = salBruto - ir - inss;
    return salLiq;
}