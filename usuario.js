function validarAcceso() {

    const USUARIOCORRECTO = "admin";
    const CONTRASEÑACORRECTA = "6789"
    const MAXIMOINTENTOS = 3;
    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < MAXIMOINTENTOS && !accesoConcedido) {
        intentos++;

        const usuarioIngresado = prompt("Ingrese su usuario(intento ${intentos} de ${MAXIMOINTENTOS})");
        const contraseñaIngresada = prompt("Ingrese su contraseña(intrnto ${intentos} de ${MAXIMOINTENTOS}) ");
        
        if (usuarioIngresado === USUARIOCORRECTO && contraseñaIngresada === CONTRASEÑACORRECTA) {
          accesoConcedido = true;
          console.log("Bienvenido al sistema");
          alert("Bienvenido al sistema"); 
        }else if(intentos < MAXIMOINTENTOS) {
            console.log("Datos incorrectos intento ${intentos} de ${MAXIMOINTENTOS}");
            alert("Datos incorrectos Intento ${intentos} de ${MAXMOINTENTOS}");
        }else {
            console.log("Usuario bloqueado. Ha superado el número de intentos");
            alert("Usuario bloqueado. Ha superado el número de intentos");
        }


        
    }
    
}

validarAcceso()