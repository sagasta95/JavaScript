var n = prompt("Pasame una numero: ", n);
var primo = true;

for(var i = 2; i < n; i++){     
    if(n % i == 0){
        primo = false;
        break;
    }
}
if(primo == true && n > 2){
    document.write(n + " es primo.");
}
else{
    document.write(n + " no es primo.");
}
