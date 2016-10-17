var pw = prompt("Introduce tu contraseña: ", pw);
var segura = 0;

if(longitud(pw))
    segura++;
else
    document.write("La longitud debe estar entre 8 y 12.<br>");

if(mayus(pw))
    segura++;
else
    document.write("La contraseña debe contener mayusculas.<br>");

if(minus(pw))
    segura++;
else
    document.write("La contraseña debe contener minusculas.<br>");

if(num(pw))
    segura++;
else
    document.write("La contraseña debe contener numeros.<br>");

if(sim(pw))
    segura++;
else
    document.write("La contraseña debe contener algun caracter especial (-, _, @, #, %, &).<br>");

if(segura == 5)
    document.write("La contraseña es segura.");

function longitud (texto){
    if(texto.length < 8 || texto.length > 12)
        return false;
    else
        return true;
}

function mayus(texto){
    if(texto.match(/[A-Z]/))
        return true;
    else
        return false;
}

function minus(texto){
    if(texto.match(/[a-z]/))
        return true;
    else
        return false;
}

function num(texto){
    if(texto.match(/[1-9]/))
        return true;
    else
        return false;
}

function sim(texto){
    if(texto.match(/[-, _, @, #, %, &]/))
        return true;
    else
        return false;
}