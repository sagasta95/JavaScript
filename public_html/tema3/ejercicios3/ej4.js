var num = parseInt(prompt("Pasame un numero: ", num));
var base = num / 10;
var exp = num - base * 10;
var res = 0;
for (var i = 0; i <= exp; i++){
    res = res * base
}
document.write(base + " ^ " + exp + " = " + )
