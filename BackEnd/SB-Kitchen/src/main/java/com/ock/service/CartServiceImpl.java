package com.ock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ock.entity.Cart;
import com.ock.repo.CartDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CartServiceImpl  implements CartService{

	
	@Autowired
	CartDao cdao;
	@Override
	public boolean addCart(Cart cart) {
		return cdao.addCart(cart);
	}

	@Override
	public List<Cart> getCarts() {
		return cdao.getCarts();
	}

	@Override
	public boolean deleteCart(int CartId) {
	     return cdao.deleteCart(CartId);
		
	}

	@Override
	public List<Cart> displayCartById(int id) {
		return cdao.displayCartById(id);
	}

}
