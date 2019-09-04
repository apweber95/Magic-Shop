package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.CartItem;
import com.revature.beans.Human;
import com.revature.data.CartItemDAO;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/cart")
public class CartItemController {
	@Autowired
	private CartItemDAO cid;
	
	@PostMapping
	public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem){
		cid.addCartItem(cartItem);
		return ResponseEntity.ok(cartItem);
	}

	@GetMapping
	public ResponseEntity<Set<CartItem>> getCart(Human human){
		return ResponseEntity.ok(cid.getCart(human));
	}
	

}
