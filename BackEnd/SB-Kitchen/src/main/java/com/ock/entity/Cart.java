package com.ock.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	
	@ManyToOne
	private Items items;
	
	private int quantity;
	private double price;
	
	@ManyToOne
	private Register register;

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public Items getItems() {
		return items;
	}

	public void setItems(Items items) {
		this.items = items;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Register getRegister() {
		return register;
	}

	public void setRegister(Register register) {
		this.register = register;
	}

	public Cart(int cartId, Items items, int quantity, double price, Register register) {
		super();
		this.cartId = cartId;
		this.items = items;
		this.quantity = quantity;
		this.price = price;
		this.register = register;
	}

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	


}