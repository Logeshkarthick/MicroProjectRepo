package com.ock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ock.entity.Register;
import com.ock.repo.RegisterDao;

import jakarta.transaction.Transactional;

@Service
@Transactional

public class RegisterServiceImpl  implements RegisterService{
    
	@Autowired
	RegisterDao rdao;
	
	@Override
	public boolean addRegister(Register register) {
		return rdao.addRegister(register);
	}

	@Override
	public boolean deleteRegister(int id) {
		return rdao.deleteRegister(id);
	}

	@Override
	public List<Register> getRegisters() {
		return rdao.getRegisters(0);
	}

}
