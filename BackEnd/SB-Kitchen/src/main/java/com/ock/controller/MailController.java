package com.ock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ock.service.MailService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/rest/")
public class MailController {
	
	@Autowired
	MailService serv;
 
	@PostMapping("/sendEmailOTP")
	public String sendOTPEmail(@RequestParam("email")String email){
		String toMail = email;
		String subject = "Cloud Kitchen thanks for ordering";
		String body = "Your order has placed successfully and delivered in 45 minutes";
		try {
			serv.sendMail(toMail, subject, body);
			return "Mail Sent Successfully";
		}catch(Exception e) {
			return "Mail Send Failure";
		}
 
	}
}
