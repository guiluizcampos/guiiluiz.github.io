let a = 9;
let b = 5;
let c = 7;

if (a > b) {
    if(a > c){
        console.log(a);
    }else{
        console.log(c);
    }
}else if (b > c){
    console.log(b);
}else{
    console.log(c);
}