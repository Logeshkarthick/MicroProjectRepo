package com.ock.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ock.entity.Register;

import jakarta.persistence.EntityManager;

@Repository
public class RegisterDaoImpl implements RegisterDao {

	@Autowired
	EntityManager entity;

	@Override
	public boolean addRegister(Register register) {
		entity.persist(register);
		return true;
	}

	@Override
	public boolean deleteRegister(int id) {
		Register reg = entity.find(Register.class, id);
		entity.remove(reg);
		return true;
	}

	@Override
	public List<Register> getRegisters(int id) {
		return entity.createQuery("from Register").getResultList();

	}

	

	
	
}
