package com.ock;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ock.entity.Register;
import com.ock.service.RegisterService;

@SpringBootTest
public class Register_Test {

	
	@Autowired
	RegisterService rso;
	
	@Test
	void test_getAllRegisters()
	{
		List<Register> register=rso.getRegisters();
	}
	
}
