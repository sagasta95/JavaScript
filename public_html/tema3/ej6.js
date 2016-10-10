var base = prompt("Pasame una base: ", base);
var exp = prompt("Pasame un exponente: ", exp);
var res = base;

for(var i = 1; i < exp; i++){
    res = res * base;
}
document.write(res);