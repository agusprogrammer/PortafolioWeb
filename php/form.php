<?php
if($_POST) {
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $emailEnvio = '3dagustingonzalez1@gmail.com';
    $titulo = 'Mensaje del portafolio web';
    $mensajeEnviar = 'Email: $email \nMensaje: \n $mensaje';

    if ($ _POST['submit']) {
        if (mail ($emailEnvio, $titulo, $mensajeEnviar)) {
            echo '<p>El mensaje se ha enviado</p>';
        } else {
            echo '<p>El mensaje no se ha enviado</p>';
        }
    }
}
?>