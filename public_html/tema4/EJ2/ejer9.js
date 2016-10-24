var opcion;
opcion = prompt("Introduce la opción elegida", opcion);

switch (opcion) {
    case "1":
        metodo1();
        break;
    case "2":
        metodo2();
        break;
    case "3":
        metodo3();
        break;
    case "4":
        metodo4();
        break;
    case "5":
        metodo5();
        break;
    case "6":
        metodo6();
        break;
    case "7":
        metodo7();
        break;
    case "8":
        metodo8();
        break;
    case "9":
        metodo9();
        break;
    case "10":
        metodo10();
        break;
    case "11":
        metodo11();
        break;
    case "12":
        metodo12();
        break;
}
function metodo1() {//valor absoluto
    num = prompt("Introduce un numero", opcion);
    return document.write(Math.abs(num));
}

function metodo2() {//tangente de un numero
    var num = prompt("Introduce un numero", opcion);
    return document.write(Math.atan(num));//tangente de un numero
}

function metodo3() {//redondear hacia arriba
    var num = prompt("Introduce un numero", opcion);
    var num = parseInt(num) + 1;
    return document.write(num);
}

function metodo4() {//redondear hacia abajo
    var num = prompt("Introduce un numero", opcion);
    var num = parseInt(num);
    return document.write(Math.abs(num));
}

function metodo5() {//redondear al numero mas cercano
    var num = prompt("Introduce un numero", opcion);
    return document.write(Math.round(num));
}


function metodo6() {//calcular exponencial de un numero
    var num = prompt("Introduce un numero", opcion);
    var num = parseFloat(num);
    return document.write(Math.pow(num, num));
}

function metodo7() {//calcular logaritmo de un numero
    var num = prompt("Introduce un numero", opcion);
    return document.write(Math.log(num));
}

function metodo8() {
    var num = prompt("Introduce el primer numero", opcion);
    var num2 = prompt("Introduce el segundo numero", opcion);
    return document.write(Math.max(num, num2));
}

function metodo9() {
    var num = prompt("Introduce el primer numero", opcion);
    var num2 = prompt("Introduce el segundo numero", opcion);
    return document.write(Math.min(num, num2));
}

function metodo10() {
    var num = prompt("Introduce un numero base", opcion);
    var exp = prompt("Introduce un numero exponente", opcion);
    return document.write(Math.pow(num, exp));
}

function metodo11() {//asi por defecto pilla entre 0 - 1
    return document.write(Math.random());
}

function metodo12() {
    var num = prompt("Introduce un numero", opcion);
    return document.write(Math.sqrt(num));
}