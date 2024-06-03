package com.ock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ock.entity.Payment;
import com.ock.entity.Register;

import com.ock.service.PaymentService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/rest")
public class PaymentController {

	@Autowired
	PaymentService rs;

	
	@PostMapping("/paymentmodule")
	public void doInsert(@RequestBody Payment payment) {

		
		//mailService.sendMail(payment, email);
		
		rs.addPayment(payment);
	

	}
//	@GetMapping("/paymentList")
//	public  List<Payment> getPayments(){
//		return rs.getPayments();
//	}
}
