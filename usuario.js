function validarAcceso() {

    const USUARIOCORRECTO = "admin";
    const CONTRASEÑACORRECTA = "6789"
    const MAXIMOINTENTOS = 3;
    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < MAXIMOINTENTOS && !accesoConcedido) {
        intentos++;

        const usuarioIngredo = prompt("Ingrese su usuario(intento ${intentos} de {MAXIMOINTENTOS})");
        const contraseñaIngresada = prompt("Ingrese su contraseña(intrnto ${intentos} de {MAXIMOINTENTOS}) ");
        
        if (usuarioIngredo === USUARIOCORRECTO && contraseñaIngresada === CONTRASEÑACORRECTA) {
          accesoConcedido = true;
          console.log("Bienvenido al sistema");
          alert("Bienvenido al sistema") 
        }


        
    }
    
}