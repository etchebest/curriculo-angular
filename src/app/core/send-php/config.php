<?php

$config = require __DIR__ . '/config.php';

$to = $config['contact_email'];

/* Sanitização */

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);

/* Validação */

if (!$nome || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$mensagem) {
    http_response_code(400);
    exit('Dados inválidos');
}

$subject = $config['subject_prefix'] . ' Novo contato recebido';

$body  = "Nome: $nome\r\n";
$body .= "Email: $email\r\n";
$body .= "Mensagem:\r\n$mensagem";

$headers  = "From: {$config['contact_email']}\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

/* Envio */

if (mail($to, $subject, $body, $headers)) {
    exit('OK');
}

http_response_code(500);
exit('Erro ao enviar');
