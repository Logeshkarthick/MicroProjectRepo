package com.ock.repo;

import java.util.List;

import com.ock.entity.Register;

public interface RegisterDao {

	
	public boolean addRegister(Register register);
	
	public boolean deleteRegister(int id);
	
	public List<Register> getRegisters(int id);

	
	
	
	
	
}
