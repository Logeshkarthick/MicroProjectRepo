package com.ock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ock.entity.Payment;
import com.ock.repo.PaymentDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PaymentServiceImpl  implements PaymentService{
     
	
	@Autowired
	PaymentDao pdao;
	
	@Override
	public boolean addPayment(Payment payment) {
		return pdao.addPayment(payment);
	}

	@Override
	public List<Payment> getPayments() {
		return pdao.getPayments();
	}

}
