function somaNum(n){
    let soma = 0;

    for (var i = 0; i <= n; i++) {
        soma = soma + i;
    }
    return soma;
}

console.log(somaNum(5));