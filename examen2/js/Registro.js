
var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}
    function  guardar_usuario (){
    var nombre = (document.getElementById("Nombre").value);
     var apellido =(document.getElementById("Apellidos").value);
     var edad =(document.getElementById("Edad").value);
     var correo =(document.getElementById("Correo").value);
     var contraseña =(document.getElementById("Contrasena").value);
        
    saveToLocalStorage( nombre,apellido,edad, correo,contraseña);
   
}

function saveToLocalStorage( nombre,apellido,edad, correo,contraseña) {
    
alert("Registrando");
	var user = {
	 nombre,
     apellido,
     edad,
     correo,
     contraseña
    

	};
    
    
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
    var person = JSON.parse(localStorage.getItem("users"));
    console.log(person);
	
}

