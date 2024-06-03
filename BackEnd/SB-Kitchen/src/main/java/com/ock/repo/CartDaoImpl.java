package com.ock.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.ock.entity.Cart;

import jakarta.persistence.EntityManager;

@Repository
public class CartDaoImpl implements CartDao{
   
	@Autowired
	EntityManager ent;
	
	@Override
	public boolean addCart(Cart cart) {
		ent.persist(cart);
		return true;
	}

	@Override
	public List<Cart> getCarts() {
		return ent.createQuery("from Cart").getResultList();
	}

	@Override
	public boolean deleteCart(int cartId) {
		Cart obj = ent.find(Cart.class,cartId);
		ent.remove(obj);
		return true;
	}

	
	@Override
	public List<Cart> displayCartById(int id) {
		return ent.createQuery("select c from Cart c where register.id = :id").setParameter("id", id).getResultList();
	}

}
