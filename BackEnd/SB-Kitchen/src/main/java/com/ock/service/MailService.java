package com.ock.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service

public class MailService {
	
	@Autowired
	private JavaMailSender mailsender;
	
	public void sendMail(String toMail ,String subject,String body) {
		SimpleMailMessage message=new SimpleMailMessage();
		message.setFrom("logeshkarthick934@gmail.com");
		message.setTo(toMail);
		message.setText(body);
		message.setSubject(subject);
		mailsender.send(message);
		System.out.println("sended");
 
	}
}
