let n = 82139;
var contador = 0;

for (var i = 1; i <= n; i++) {
    if(n % i == 0) {
        contador++
    }
}
if(contador == 2) {
    console.log("O número " + (n) + " é primo");
}else{
    console.log("O número " + (n) + " nao é primo");
}