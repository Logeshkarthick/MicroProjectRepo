package com.ock.repo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ock.entity.Payment;

import jakarta.persistence.EntityManager;
@Repository
public class PaymentDaoImpl implements PaymentDao {
    
	
	@Autowired
	EntityManager ent;
	@Override
	public boolean addPayment(Payment payment) {
		
		
		ent.persist(payment);
		return true;
	}

	@Override
	public List<Payment> getPayments() {
		return ent.createQuery("From Payment").getResultList();
	}

}
