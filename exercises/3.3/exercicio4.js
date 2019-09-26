function maiorNome(array) {
    let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

    let maior = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maior.length) {
            maior = array[i];
        }
    }
    return maior;
}