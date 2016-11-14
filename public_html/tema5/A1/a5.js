function Libro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;

    Libro.prototype.toString = function () {
        return "Titulo: " + this.titulo + " Autor: " + this.autor + " Año: " + this.ano;
    };
}
var array1 = new Array(5);
for (var i = 0; i < 5; i++) {
    array1[i] = new Libro(('titulo' + i), ('autor' + i), ('ano' + i));
}
for (var i = 0; i < 5; i++) {
    document.write(array1[i] + "<br>");
}