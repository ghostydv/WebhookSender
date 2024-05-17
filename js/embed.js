$("#loginForm").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    // Aquí puedes definir múltiples combinaciones de nombre de usuario y contraseña
    var validCredentials = {
        "V$": "431",
        "Juan": "7362",
        "Dany": "322424/",
        "user2": "password2"
        // Agrega más combinaciones si lo deseas
    };

    // Verifica si las credenciales son válidas
    if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
        $("#loginForm").hide();
        $("#notificacion .mensaje_not").text("Inicio de sesión exitoso como: " + username); // Mostrar información de inicio de sesión exitoso
        $("#notificacion").show();
        setTimeout(function() {
            $("#notificacion").fadeOut(1500);
        }, 6500);
    } else {
        $("#notificacion .mensaje_not").text("Nombre de usuario o contraseña incorrectos"); // Mostrar información de credenciales incorrectas
        $("#notificacion").show();
        alert("Nombre de usuario o contraseña incorrectos");
    }
});

function sendMessage() {
    var title = prompt("Ingrese el título del mensaje:");
    var description = prompt("Ingrese la descripción del mensaje:");
    var message = $("#message").val(); // Obtener el mensaje del textarea

    var data = {
        "content": "Nuevo mensaje recibido en la aplicación:",
        "embeds": [
            {
                "title": title,
                "description": description + "\n\n**Mensaje del usuario:**\n" + message, // Incluir el mensaje del usuario
                "color": 16711680 // Color rojo (puedes personalizar el color si lo deseas)
            }
        ]
    };
    
    // Envía los datos a un webhook de Discord
    fetch('https://discord.com/api/webhooks/1235385848229269594/8qHZl3aGBP1Vi1HvkrRsd9nxcQEftjz_dT9W4MZbmTKg8Pr7SmASmvPGpolwqUm8y39z', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            $("#notificacion .mensaje_not").text("Mensaje enviado correctamente a Discord"); // Mostrar información de mensaje enviado correctamente
            $("#notificacion").show();
            setTimeout(function() {
                $("#notificacion").fadeOut(1500);
            }, 6500);
        } else {
            alert("Error al enviar el mensaje a Discord");
        }
    }).catch(error => {
        console.error('Error:', error);
        alert("Error al enviar el mensaje a Discord");
    });
}
