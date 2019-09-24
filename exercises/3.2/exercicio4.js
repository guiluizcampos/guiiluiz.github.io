let n = 5;
let array = [];
let espaco, ast, res;

for(let i = 0; i < n; i++) {
    if(i % 2 == 0) {
        espaco = (n - i) / 2;
        ast = i + 1;
        res = " ".repeat(espaco) + "*".repeat(ast) + " ".repeat(espaco);
        console.log(res);
    }
    }