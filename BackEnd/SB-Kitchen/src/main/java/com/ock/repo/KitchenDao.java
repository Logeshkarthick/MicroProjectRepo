package com.ock.repo;

import java.util.List;

import com.ock.entity.Kitchen;

public interface KitchenDao {
	
	public boolean addKitchen(Kitchen kitchen);
	
	public List<Kitchen> getKitchens();
	
	

}
