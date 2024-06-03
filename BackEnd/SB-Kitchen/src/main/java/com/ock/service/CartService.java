package com.ock.service;

import java.util.List;

import com.ock.entity.Cart;

public interface CartService {
	public boolean addCart(Cart cart);

	public List<Cart> getCarts();

	public boolean deleteCart(int CartId);
	

	public List<Cart> displayCartById(int id);

}
