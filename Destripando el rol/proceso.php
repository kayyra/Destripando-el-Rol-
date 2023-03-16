<?php
    // Declaración de variables para la recepción de datos
    $_nombre = validaDatos( $_POST['nombre']); 
    $_apellidos = validaDatos($_POST['apellidos']);
    $_correo = validaDatos($_POST['correo']);
    $_telefono = validaDatos($_POST['telefono']);
    $_terminos = validaDatos($_POST['terminos']);
   

    function validaDatos($_data){
        if(isset($_data)and !empty($_data)){
            return $_data;
        } else{
            $_data = null;
            return $_data;
        }
    }


    if($_nombre == null or $_apellidos == null or $_correo == null or $_telefono == null or $_terminos == null){
        $_resultado = 'Los datos introducidos no son validos';
    }
    else{
   //Declaración de variables para dar forma al mail
    $_resultado = 'Gracias por contactar con nosotros, en breve nos pondremos en contacto con usted';
    $_destinatario = 'kyoyuki004@gmail.com';
    $_asunto = 'Enviado desde mi sitio web. Formulario de contacto';
    $_contenido = 'Nombre y apellidos: '.$_nombre.' '.$_apellidos."\n".'Correo Electrónico: '.$_correo."\n".'Teléfono de contacto: '.$_telefono."\n".'Acepta los términos y condiciones: '.$_terminos."\n" .'Mensaje: '.$_escriba.;
    mail($_destinatario, $_asunto, $_contenido);
}
   
?>