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

if(salBruto < 1903.99) {
    ir = 0;
}else if(salBruto < 2826,66) {
    ir = 7.5/100 * salBruto - 142.80;
}else if(salBruto < 3751,06) {
    ir = 15/100 * salBruto - 354.80;
}else if(salBruto < 4664,69) {
    ir = 22.5/100 * salBruto - 636.13;
}else{
    ir = 27.5/100 * salBruto - 869.36;
}
