package com.ock.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ock.entity.Kitchen;

import jakarta.persistence.EntityManager;

@Repository
public class KitchenDaoImpl  implements KitchenDao{
    
	@Autowired
	EntityManager ent;
	
	@Override
	public boolean addKitchen(Kitchen kitchen) {
	    ent.persist(kitchen);
		return true;
	}

	@Override
	public List<Kitchen> getKitchens() {
		
	return ent.createQuery("From Kitchen").getResultList();
	}

}
