<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["success" => false]);
  exit;
}

/* Honeypot anti-bot */
$honeypot = $_POST['website'] ?? '';

if (!empty($honeypot)) {
  exit;
}

/* Tempo mínimo de envio */
$form_time = $_POST['form_time'] ?? 0;

if ((time() * 1000 - $form_time) < 3000) {
  exit;
}

/* Sanitização */

$nome = trim(strip_tags($_POST['nome'] ?? ""));
$email = filter_var($_POST['email'] ?? "", FILTER_SANITIZE_EMAIL);
$mensagem = trim(strip_tags($_POST['mensagem'] ?? ""));

/* Validação */

if (!$nome || !$email || !$mensagem) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Preencha todos os campos."]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Email inválido."]);
  exit;
}

/* Configuração do email */

$para = "contato@cristianetchebest.com";
$assunto = "Mensagem enviada pelo site";

/* Conteúdo */

$conteudo = "
Nome: $nome

Email: $email

Mensagem:
$mensagem
";

/* Headers */

$headers = "From: contato@cristianetchebest.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

/* Envio */

if (mail($para, $assunto, $conteudo, $headers)) {

  echo json_encode([
    "success" => true,
    "message" => "Mensagem enviada com sucesso!"
  ]);

} else {

  http_response_code(500);

  echo json_encode([
    "success" => false,
    "message" => "Erro ao enviar mensagem."
  ]);
}
