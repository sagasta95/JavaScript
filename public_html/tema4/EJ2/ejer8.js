var fecha2 = new Date(2001, 2, 11, 19, 26, 00);
var fecha1 = new Date();
fecha1.setTime(0);
var mls = fecha2 - fecha1;
document.write(mls/(1000 * 60 * 60 ));



