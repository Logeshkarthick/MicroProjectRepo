package com.ock.service;

import java.util.List;

import com.ock.entity.Kitchen;

public interface KitchenService {
	
	public boolean addKitchen(Kitchen kitchen);
	
	public List<Kitchen> getKitchens();
	
	

}
