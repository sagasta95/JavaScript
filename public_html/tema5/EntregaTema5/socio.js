
function Socio(numSocio, dni, nombre, apellidos, fecNacimiento, localidad) {
    this.numSocio = numSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecNacimiento = fecNacimiento;
    this.localidad = localidad;

    this.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };

    this.getCat = function() {
        var fecha = new Date();
        var fecha2 = new Date(this.fecNacimiento);
        var dif = fecha.getFullYear() - fecha2.getFullYear();
        if (dif < 18)
            return "Adolescente";
        else if (dif < 25)
            return "Joven";
        else if(dif < 65)
            return "Adulto";
        else
            return "Jubilado";
    };
}