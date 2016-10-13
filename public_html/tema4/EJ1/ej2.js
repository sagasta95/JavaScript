var dia = prompt("Introduce el dia de tu cumpleaños: ", dia);
var mes = prompt("Introduce el mes de tu cumpleaños: ", mes);


for(var i = 2016; i <= 2100; i++){
    var f = new Date(i,mes - 1,dia);
    if(f.getDay() == 0){
        document.write("En el año " + f.getFullYear() + " tu cumpleaños cae en Domingo.<br>");
    }
}