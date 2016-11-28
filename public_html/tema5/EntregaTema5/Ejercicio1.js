function Club() {
    var socios = new Array();

    function darAlta(cliente) {
        this.socios.push(cliente);
    }

    function darBaja(cliente) {
        this.socios.splice(this.socios.indexOf(cliente), 1);
    }

    function mostrarSocios() {
        document.write("<table>");
        for(var i = 0; i < this.socios.length; i++){
            document.write("<tr><td>" + this.socios[i].numSocio + "</td><td>" + this.socios[i].dni + "</td><td>" + this.socios[i].nombre + "</td><td>" + this.socios[i].apellidos + "</td><td>" + this.socios[i].fecNacimiento + "</td><td>" + this.socios[i].localidad + "</td><td>" + this.socios[i].getCategoria());
        }
        document.write("</table>");
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
    
    function getCategoria(){
        if(this.localidad){
        }
    }
}

