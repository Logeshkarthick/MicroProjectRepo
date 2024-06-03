package com.ock.repo;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.ock.entity.Cart;

public interface CartDao {
	
	public boolean addCart(Cart cart);
	
	public List<Cart> getCarts();
	
	public boolean deleteCart(int CartId);
	
	public List<Cart> displayCartById(int id);

}
