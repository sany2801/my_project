<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$formkitch1 = $_POST['form_kitch1'];
$formkitch2 = $_POST['form_kitch2'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'agrantsevich@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'A2v4H69P2gJFkVRNMief'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('agrantsevich@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('aleksandr8862323@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name. ' оставил заявку, его телефон ' .$phone. 
'<p>Почта этого пользователя: ' .$email. 
'<p>input1: ' .$formkitch1.
'<p>input2: '.$formkitch2;

 if(!$mail->send()){
        $messege = 'Ошибка';
    }
    else{
        $messege = 'Данные отправлены';
    }
    $response = ['messege' => $messege];
    header('Content-type: application/json');
    echo json_encode($response);

?>