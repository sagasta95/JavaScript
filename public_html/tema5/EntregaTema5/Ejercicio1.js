function Club() {
    var socios = new Array();

    function darAlta(cliente) {
        this.socios.push(cliente);
    }

    function darBajaNs(numSocio) {
        var index = null;
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].numSocio == numSocio)
                index = i;
        }
        this.socios.splice(index, 1);
    }
    function darBajaDni(dni) {
        var index = null;
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].dni === dni)
                index = i;
        }
        this.socios.splice(index, 1);
    }

    function mostrarSocios() {
        document.write("<table>");
        for (var i = 0; i < this.socios.length; i++) {
            document.write("<tr><td>" + this.socios[i].numSocio + "</td><td>" + this.socios[i].dni + "</td><td>" + this.socios[i].nombre + "</td><td>" + this.socios[i].apellidos + "</td><td>" + this.socios[i].fecNacimiento + "</td><td>" + this.socios[i].localidad + "</td><td>" + this.socios[i].getCat() + "</td></tr>");
        }
        document.write("</table>");
    }

    function buscarSocioDni(dni) {
        var index = null;
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].numSocio == numSocio)
                index = i;
        }
        document.write("<tr><td>" + this.socios[index].numSocio + "</td><td>" + this.socios[index].dni + "</td><td>" + this.socios[index].nombre + "</td><td>" + this.socios[index].apellidos + "</td><td>" + this.socios[index].fecNacimiento + "</td><td>" + this.socios[index].localidad + "</td><td>" + this.socios[index].getCat() + "</td></tr></table>");
    }
    
    function buscarSocioNombreApellidos(nombre, apellidos) {
        
        var index = null;
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].nombre === nombre && this.socios[i].apellidos === apellidos)
                index = i;
        }
        document.write("<tr><td>" + this.socios[index].numSocio + "</td><td>" + this.socios[index].dni + "</td><td>" + this.socios[index].nombre + "</td><td>" + this.socios[index].apellidos + "</td><td>" + this.socios[index].fecNacimiento + "</td><td>" + this.socios[index].localidad + "</td><td>" + this.socios[index].getCat() + "</td></tr></table>");
    }
}

function Socio(numSocio, dni, nombre, apellidos, fecNacimiento, localidad) {
    this.numSocio = numSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecNacimiento = fecNacimiento;
    this.localidad = localidad;

    function setLocalidad(localidad) {
        this.localidad = localidad;
    }

    function getCat() {
        dif = Date.getFullYear() - this.fecNacimiento.getFullYear();
        if (dif < 18)
            return "Adolescente";
        else if (dif < 25)
            return "Joven";
        else
            return "Adulto";
    }
}

