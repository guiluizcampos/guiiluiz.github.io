let n = 5;
let array = [];
let espaco, ast;

for(i = 0; i < n; i++) {
        espaco = n - 1 - i;
        ast = i + 1;
        res = " ".repeat(espaco) + "*".repeat(ast);
        console.log(res);
    }