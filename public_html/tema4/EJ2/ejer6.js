var fecha1 = new Date();
var desfase = new Date().getTimezoneOffset();
var fecha2 = new Date(fecha1.getTime() + (desfase * 60 * 1000));
document.write(fecha2 + "<br>");
document.write(fecha1 + "<br>");