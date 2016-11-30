function Club() {

    this.socios = new Array();

    this.darAlta = function (cliente) {
        this.socios.push(cliente);
    };

    this.darBajaNs = function (numSocio) {
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].numSocio == numSocio)
                this.socios.splice(i, 1);
        }
    };

    this.darBajaDni = function (dni) {
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].dni == dni)
                this.socios.splice(i, 1);
        }
    };

    this.getSocios = function () {
        return this.socios;
    };

    this.buscarSocio = function (n) {
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].numSocio == n)
                return this.socios[i];
        }
    };

    this.buscarSocioDni = function (dni) {
        var aux = new Array();
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].dni == dni)
                aux.push(this.socios[i]);
        }
        return aux;
    };

    this.buscarSocioNombreApellidos = function (nombreyapellidos) {
        var aux = new Array();
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].nombre + " " + this.socios[i].apellidos === nombreyapellidos)
                aux.push(this.socios[i]);
        }
        return aux;
    };

    this.buscarSociosCategoria = function (cat) {
        var aux = new Array();
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].getCat() === cat)
                aux.push(this.socios[i]);
        }
        return aux;
    };

    this.buscarSociosLocalidad = function (localidad) {
        var aux = new Array();
        for (var i = 0; i < this.socios.length; i++) {
            if (this.socios[i].localidad === localidad)
                aux.push(this.socios[i]);
        }
        return aux;
    };

}