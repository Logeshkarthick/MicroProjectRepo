package com.ock;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.ock.entity.Payment;
import com.ock.service.PaymentService;

@SpringBootTest
public class Payment_Test {
	
	@Autowired
	PaymentService pso;
	
	@Test
	void test_findAllPaymenst()
	{
		List<Payment> items=pso.getPayments();
	}

}
