package com.ock;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ock.entity.Cart;
import com.ock.service.CartService;

@SpringBootTest
public class Cart_Test {
	
	@Autowired
	CartService csi;
	
	@Test
	void test_getCart() {
		List<Cart> cart = csi.getCarts();
		assertNotNull(cart);
	}
	
	@Test
	void test_findById() {
		List<Cart> cart=csi.displayCartById(1);
		assertNotNull(cart);
	}
	
	

}
