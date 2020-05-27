<?php


require("class.phpmailer.php");
require("class.smtp.php");

$data = json_decode(file_get_contents("php://input"), TRUE);

// Valores enviados desde el formulario
if ( !isset($data["email"]) || !isset($data["comment"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}

$email = $data["email"];

$nombre = $data["name"];

$mensaje = $data["comment"];

$destinatario = "hola@digitestudio.com";


// Datos de la cuenta de correo utilizada para enviar v�a SMTP
$smtpHost = "mail.digitestudio.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "hola@digitestudio.com";  // Mi cuenta de correo
$smtpClave = "Contradigit23";  // Mi contrase�a


$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;


$mail->From = $email; // Email desde donde env�o el correo.
$mail->FromName = $nombre;
$mail->AddAddress($destinatario); // Esta es la direcci�n a donde enviamos los datos del formulario

$mail->Subject = "Mensaje desde la web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<html> 

<body> 

<h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

<p>Informacion enviada por el usuario de la web:</p>

<p>nombre: {$nombre}</p>

<p>email: {$email}</p>

<p>mensaje: {$mensaje}</p>

</body> 

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurri� un error inesperado.";
}