var n = prompt("Pasame n");
var espacios = n;
var num = 1;
if (espacios % 2) {
    espacios++;
}
for (var i = 0; i < n; i++) {
    for (var b = 0; b < espacios; b++) {
        document.write("*");
    }
    if (i == 0) {
        for (var c = 0; c < num; c++) {
            document.write(i);
        }
    } else {
        for (var c = 0; c < num; c++) {
            document.write(i);
        }
    }
    num += 2;
    espacios--;
    document.write("</br>");
}
