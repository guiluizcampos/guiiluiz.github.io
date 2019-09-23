let porcentagem = 70;

if(porcentagem > 100){
    console.log("Porcentagem inválida!");
}else if(porcentagem >= 90) {
    console.log("A");
}else if(porcentagem >= 80) {
    console.log("B");
}else if(porcentagem >= 70) {
    console.log("C");
}else if(porcentagem >= 60) {
    console.log("D");
}else if(porcentagem >= 40) {
    console.log("E");
}else if(porcentagem < 40){
    console.log("F");
}else{
    console.log("Porcentagem inválida!");
}