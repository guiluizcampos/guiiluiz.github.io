let piece = "cAvalo";

if (piece.toLowerCase() == "torre"){
    console.log("A torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça.");
}else if(piece.toLowerCase() == "bispo") {
    console.log("O bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo");
}else if(piece.toLowerCase() == "cavalo") {
    console.log("O cavalo tem um movimento especial que parece a letra L");
}else if(piece.toLowerCase() == "rainha") {
    console.log("A Rainha pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça");
}else if(piece.toLowerCase() == "rei") {
    console.log("O Rei movimenta-se apenas 1 casa em qualquer direção");
}else if(piece.toLowerCase() == "peão") {
    console.log("O peão só se movimenta para frente, sendo a única peça que não se move para trás");
}else{
    console.log("Peça inválida, não se esqueça do acento no peão");
}
