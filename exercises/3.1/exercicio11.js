let salBruto = 1000;
let salLiq;
let inss;
let ir;

if(salBruto < 1556.95) {
    inss = 8/100 * salBruto;
}else if(salBruto < 2594.93) {
    inss = 9/100 * salBruto;
}else if(salBruto < 5189.83) {
    inss = 11/100 * salBruto;
}else{
    inss = 570.88;
}
