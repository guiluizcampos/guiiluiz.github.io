let custo = 100;
let venda = 200;
let lucro;

if(custo <= 0 || venda <= 0){
    console.log("Valores inválidos!");
}else{
    lucro = (venda - (120/100 * custo)) * 1000;
    console.log(lucro);
}