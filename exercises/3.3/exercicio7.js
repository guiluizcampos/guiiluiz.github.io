function verificaFimPalavra(word, ending) {
    final = word.substr(-ending.length);

    let result = true;
    if(ending !== final) {
        result = false;
    }
    return result;
}

console.log(verificaFimPalavra("trybe","ube"));