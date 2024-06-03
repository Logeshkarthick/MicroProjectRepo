package com.ock.service;

import java.util.List;

import com.ock.entity.Payment;

public interface PaymentService {
	

	public boolean addPayment(Payment payment);
	
	public List<Payment> getPayments();
	
	

}
