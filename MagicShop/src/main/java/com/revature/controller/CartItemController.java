package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.CartItem;
import com.revature.data.CartItemDAO;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/cart")
public class CartItemController {
	@Autowired
	private CartItemDAO cid;

	@GetMapping(value="{id}")
	public ResponseEntity<Set<CartItem>> getCartByUserID(@PathVariable Integer id){
		return ResponseEntity.ok(cid.getCartByUserID(id));
	}
	

}
