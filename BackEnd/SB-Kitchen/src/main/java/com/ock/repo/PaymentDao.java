package com.ock.repo;

import java.util.List;

import com.ock.entity.Payment;
import com.ock.entity.Register;

public interface PaymentDao {
	
	
	public boolean addPayment(Payment payment);
	
	public List<Payment> getPayments();
	
	
	
	

}
