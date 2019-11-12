let n = 5;
let array = [];
let espaco, res;

for(let i = 1; i <= n; i++) {
    if(i % 2 !== 0) {
        espaco = (n - i) / 2;
        res = " ".repeat(espaco) + "*".repeat(i) + " ".repeat(espaco);
        console.log(res);
    }
}