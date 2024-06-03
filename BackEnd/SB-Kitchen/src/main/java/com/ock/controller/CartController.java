package com.ock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ock.entity.Cart;
import com.ock.service.CartService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("api/rest/")
@CrossOrigin("http://localhost:3000")
public class CartController {

	@Autowired
	CartService cs;

	@PostMapping("/Cart")
	public boolean doInsert(@RequestBody Cart c) {
		return cs.addCart(c);
	}

//	@GetMapping("/CartG")
//	public List<Cart> getCart() {
//		return cs.getCarts();
//	}

	@DeleteMapping("/Cart/{cartId}")
	public boolean deleteCart(@PathVariable("cartId") int carId) {
		return cs.deleteCart(carId);
	}

	@GetMapping("/Cart/{id}")
	public List<Cart> displayCartById(@PathVariable("id") int id) {
		return cs.displayCartById(id);
	}

}
