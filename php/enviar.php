<?php


if(isset($_POST)){
/* Recoger datos y comprobar */
    $destino = "gsanchez@diariovasco.com"; /* CORREO DEL ADMIN */
    $nombre = $_POST ["nombre"]; /* Nombre del usuario */
    $correo = $_POST ["correo"]; /* Correo del usuario */
    $telefono = $_POST ["telefono"]; /* Telefono del usuario */
    $mensaje = $_POST ["mensaje"]; /* Mensaje del usuario */

     

    /* datos que cogemos del usuario */
    /* IP */
    $ip=$_SERVER['REMOTE_ADDR'];

    /* Datos que cogemos del sistema */
    /* Fecha */
    $datetime= date("Y-m-d H:i:s");

    /* Mensaje concatenado para enviar por correo */
    $contenido = "fecha de envio: ".$datetime."\nIP: ".$ip."\nNombre: ".$nombre."\nCorreo: ".$correo."\nTeléfono: ".$telefono."\nMensaje: ".$mensaje;

    $cabecera = 'From: info@webda.eus'."\r\n".'Reply-To:  info@webda.eus'."\r\n".'X-Mailer: PHP/'.phpversion();

    /* Enviar correo de confirmación */
    mail($destino, "Consulta la web", $contenido,$cabecera);/* Correo que recibo yo */

    mail($correo, "Hemos recibido tu consulta",$contenido,$cabecera);

    /* Redirigir a index.html y salir de aquí */
    header("location:../index.html?enviado=correo enviado");
}
?>