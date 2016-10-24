var nombre=prompt("Pasame tu nombre");
var correo=prompt("Pasame tu correo electronico");
if(correo.search("@")==-1){
    document.write("Correo incorrecto");
}else{
    document.write("Correo correcto");
}