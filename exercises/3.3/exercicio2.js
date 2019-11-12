function maiorNum(array) {
    let array = [2, 3, 6, 7, 10, 1];

    let i = 0;
    let indice;
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            indice = i
        }
    }
    return indice;
}