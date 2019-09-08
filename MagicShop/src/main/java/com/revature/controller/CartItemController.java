package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.CartItem;
import com.revature.beans.Human;
import com.revature.service.CartItemService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/cart")
public class CartItemController {
	@Autowired
	private CartItemService cis;
	
	@PostMapping
	public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem){
		cis.addCartItem(cartItem);
		return ResponseEntity.ok(cartItem);
	}

	@GetMapping(value="{id}")
	public ResponseEntity<Set<CartItem>> returnCartByUserID(@PathVariable Integer id){
		return ResponseEntity.ok(cis.getCartByUserID(id));
	}
	
	@PutMapping(value="{id}")
	public ResponseEntity<CartItem> updateCartItem(@PathVariable Integer id, @RequestBody CartItem c) {
		return ResponseEntity.ok(cis.updateCartItem(c));
	}
	
	@DeleteMapping(value="{id}")
	public ResponseEntity<Void> deleteCartItem(@PathVariable Integer id){
		cis.deleteCartItem(cis.getCartItem(id));
		return ResponseEntity.noContent().build();
	}

}
