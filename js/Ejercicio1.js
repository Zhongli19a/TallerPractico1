function crearMatriz() {
    var numeroFilas = parseInt(document.getElementById('filas').value);
    var numeroColumnas = parseInt(document.getElementById('columnas').value);
    var matriz = document.getElementById('Matriz');
    var filas = [];
    var numMin = 100;
    var numMax = -100;
    var tabla = "<table>";

    for (let i = 0; i < numeroFilas; i++) {
        var nuevaFila = [];
        var htmlTr = "<tr>";

        for (let a = 0; a < numeroColumnas; a++) {
            var numeroAleatorio = Math.floor(Math.random() * (100))+Math.floor(Math.random() * (-100));

            if (numeroAleatorio > numMax) {
                numMax = numeroAleatorio;
            }
            if (numeroAleatorio < numMin) {
                numMin = numeroAleatorio;
            }

            nuevaFila.push(numeroAleatorio);
            htmlTr += "<td>" + numeroAleatorio + "</td>";
        }

        filas.push(nuevaFila);
        htmlTr += "</tr>";
        tabla += htmlTr;
    }
    tabla += "</table>";
    matriz.innerHTML = tabla;

    tabla +="<table>";
    matriz.innerHTML += '<p style="color: red;"> Numero Mayor : ' + numMax + '</p>';
    matriz.innerHTML += '<p style="color: blue;"> Numero menor : '+ numMin + '</p>';
    tabla +="</table>";
}
