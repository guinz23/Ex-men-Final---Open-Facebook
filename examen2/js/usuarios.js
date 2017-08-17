function obtener_localStorage() {
    if (localStorage.getItem("users")) {
        var usuario = document.getElementById("user").value;
        var contraseña = document.getElementById("pass").value;

        var person = JSON.parse(localStorage.getItem("users"));
        for (i= 0; i<person.length; i++) {
            if (usuario==person[i].nombre && contraseña==person[i].contraseña) {
                alert("usuario correcto");
                location.href = "create.html?nombre="+person[i].nombre+"&correo="+person[i].correo;
                break;
            }
        }




    }
}
