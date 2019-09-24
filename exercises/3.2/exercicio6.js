let entrada = "XVIM";

var romano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
var separado = entrada.split("");

let result = [];
let cont = 0;
let valor = 0;

for (val of separado) {
    result[cont]=romano[val];
    cont++    
}

let c = 0;
for (c = 0; c < result.length; c++) {
    if (result[c] < result[c+1]) {
        result[c+1]= result[c+1] - result[c];
    }else{
        valor += result[c];
    }
}

console.log(valor);