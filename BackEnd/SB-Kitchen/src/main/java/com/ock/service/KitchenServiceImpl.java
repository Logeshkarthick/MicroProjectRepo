package com.ock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ock.entity.Kitchen;
import com.ock.repo.KitchenDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class KitchenServiceImpl  implements KitchenDao{
	
	@Autowired
	KitchenDao kdao;

	@Override
	public boolean addKitchen(Kitchen kitchen) {
		return kdao.addKitchen(kitchen);
	}

	@Override
	public List<Kitchen> getKitchens() {
		return kdao.getKitchens();
	}
	

}
