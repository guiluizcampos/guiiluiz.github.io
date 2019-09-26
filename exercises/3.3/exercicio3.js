function menorNum(array) {
    let array = [2, 4, 6, 7, 10, 0, -3];
    
    let i = 0;
    let menor = Math.min(...array);

    for (i = 0; i < array.length; i++) {
        if (array[i] == menor) {
            return i;
        }
    }
}

