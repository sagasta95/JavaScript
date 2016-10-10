var x = prompt("Pasame un numero: ", x);
var z = prompt("¿Que numeros quieres seleccionar?: ", z);
var aux = 0;
var j = 0;
for (var i = 1; i <= x; i++){
    if(i % 2 == 0 && z == "pares"){
        aux = i + aux;
        j++;
    }
    if(i % 2 == 1 && z == "impares"){
        aux = i + aux;
        j++;
    }
    if(z == "todos"){
        aux = i + aux;
        j++;
    }
}
document.write(aux/j);
