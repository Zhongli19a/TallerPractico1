class Libros {
    libro() {
        this.titulo = "";
        this.nombre = "";
        this.apellidos = "";
        this.precio = "";
        this.imagen = "";
    }
    settitulo(titulo) {
        this.titulo = titulo;
    }
    gettitulo() {
        return this.titulo;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setapellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getapellidos() {
        return this.apellidos;
    }
    setprecio(precio) {
        this.precio = precio;
    }
    getprecio() {
        return this.precio;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
    getImagen() {
        return this.imagen;
    }
}
function filtro() {
    var tecla = event.key;
    if (['e', '-', '+'].includes(tecla))
        event.preventDefault()
}
function iniciar() {
    var showinfo = document.getElementById("mostrar");
    if (showinfo.addEventListener) {
        showinfo.addEventListener("click", function () { createObject(document.frlibro); }, false);
    }
    else if (showinfo.attachEvent) {
        showinfo.attachEvent("onclick", function () { createObject(document.frlibro); });
    }
}
    function createObject(form) {
        if (document.frlibro.id.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.id.focus()
            return 0;
        } else if (document.frlibro.txttitulo.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.txttitulo.focus()
            return 0;
        }
        else if (document.frlibro.txtnombre.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.txtnombre.focus()
            return 0;
        }
        else if (document.frlibro.txtapellidos.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.txtapellidos.focus()
            return 0;
        }
        else if (document.frlibro.categoria.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.categoria.focus()
            return 0;
        }
        else if (document.frlibro.txtprecio.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.txtprecio.focus()
            return 0;
        }
        else if (document.frlibro.imagen.value.length == 0) {
            alert("Tiene que llenar todo los campos")
            document.frlibro.imagen.focus()
            return 0;
        }
        else {
        const libro = new Libros();
        libro.settitulo(form.txttitulo.value);
        libro.setNombre(form.txtnombre.value);
        libro.setapellidos(form.txtapellidos.value);
        libro.setprecio(form.txtprecio.value);
        libro.setImagen(URL.createObjectURL(document.getElementById("imagen").files[0]));
        showProperties(libro, "InfoLibros");
    }}
    const arrarObjetos = new Array;
    function showProperties(objeto) {
        var tbllibro = "<table border=1 width=100%><tr>";
        var info = document.getElementById('infolibros');
        arrarObjetos.push(objeto);
        var index = 0;
        arrarObjetos.forEach(element => {
            index += 1;
            tbllibro += "\t\t<div style='display: inline; vertical-align: middle;'>\n";
            tbllibro += "\t\t<td align=center><img style='width:40%; height:60%' src='" + element.getImagen() + "' /></td>\n";
            tbllibro += "\t\t</div>\n";
            tbllibro += "\t\t<div style='margin: auto 0; display: inline; vertical-align: middle;'>\n";
            tbllibro += "\t\t<td style='display: block;'><p>Titulo: " + element.gettitulo() + "</p></td>\n";
            tbllibro += "\t\t<td style='display: block;'><p>Nombre del autor: " + element.getNombre() + " " + element.getapellidos() + "</p></td>\n";
            tbllibro += "\t\t<td style='display: block;' ><p>Precio: $" + element.getprecio() + "</p></td>\n";
            tbllibro += "\t\t</div>\n";
            if (index === 2) {
                tbllibro += "\t\t<tr></tr>\n";
                index = 0;
            }
        });
        tbllibro += "</tr></table>";
        info.innerHTML = tbllibro;
    }
    if (window.addEventListener) {
        window.addEventListener("load", iniciar, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("onload", iniciar);
    };


