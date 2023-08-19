
document.getElementById("registroForm").addEventListener("submit", function(event) {
    var nombre = document.getElementsByName("nombre")[0].value;
    var telefono = document.getElementsByName("telefono")[0].value;
    var edad = document.getElementsByName("edad")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var contrasena = document.getElementsByName("contrasena")[0].value;
  
    if (nombre === "" || telefono === "" || edad === "" || correo === "" || contrasena === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault(); // Evita que el formulario se envíe
    }
  });
  