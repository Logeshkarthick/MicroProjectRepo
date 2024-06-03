package com.ock.service;

import java.util.List;

import com.ock.entity.Register;

public interface RegisterService {

	public boolean addRegister(Register register);
	
	public boolean deleteRegister(int id);
	
	public List<Register> getRegisters();
	
	

}
