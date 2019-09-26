function verificaPalindrome(entrada) {
    let entrada = "o galo ama o lago";
    
    //remove espaços em branco
    let esp; 
    esp = entrada.replace( /\s/g, '' );

    //separa entrada por string
    var separado = esp.split("");

    let resultado = true;
    let i;
    
    for (i = 0; i < separado.length; i++) {
        if (separado[i] != separado[separado.length - 1 - i]) {
            resultado = false;
        }
    }
    return resultado;
}