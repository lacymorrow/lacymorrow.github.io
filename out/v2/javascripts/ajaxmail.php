<?php

	$sendTo  =  "gojukebox@gmail.com";
	$subject  = "Broadcasting from: www.lacymorrow.com";
	$header = "From: lacy.morrow <admin@lacymorrow.com> \n";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$header .= "Reply-To: ".$name." <".$email."> \n";
	$header .= "X-Mailer: PHP/" . phpversion() . "\n";
	$header .= "X-Priority: 1";
	$phone = $_POST["phone"];
	$website = $_POST["website"];
	$message = " Name: ".$name."\n Phone: ".$phone."\n Email: ".$email."\n Website: ".$website."\n \n".$_POST["message"];
	$send = false;
	if(!$_POST["text"] && $phone != "123456"){ 
		// $send = mail($sendTo,  $subject,  $message,  $header);
		require_once 'lib/swift_required.php';

		// Create the Transport
		$transport = Swift_SmtpTransport::newInstance("mail.lacymorrow.com", 26)
		  ->setUsername('me@lacymorrow.com')
		  ->setPassword('Gnarnia1')
		  ;

		/*
		You could alternatively use a different transport such as Sendmail or Mail:

		// Sendmail
		$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');

		// Mail
		$transport = Swift_MailTransport::newInstance();
		*/

		// Create the Mailer using your created Transport
		$mailer = Swift_Mailer::newInstance($transport);

		// Create a message
		$message = Swift_Message::newInstance($subject)
		  ->setFrom(array('admin@lacymorrow.com' => 'Lacy Morrow'))
		  ->setTo(array('gojukebox@gmail.com'))
		  ->setBody($message)
		  ;

		// Send the message
		$result = $mailer->send($message);
		echo $result;
	} else {
		echo '0';
	}
?> 