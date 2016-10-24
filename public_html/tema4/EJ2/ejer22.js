var ventana= window.open("", "ventana", "width=200,height=300");

ventana.document.write("<HTML><HEAD><TITLE>Ejercicio 22</TITLE></HEAD>\n");
ventana.document.write("<BODY>\n");
ventana.document.write("<form name='formulario'>\n\
                        <input type='Button' value='Mover' onclick='window.moveTo(200, 200) '/>\n\
                        <input type='Button' value='Cerrar' onclick='window.close()'/>");

ventana.document.write("</BODY></HTML>\n");
