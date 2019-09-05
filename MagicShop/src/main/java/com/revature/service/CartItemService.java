package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.CartItem;
import com.revature.data.CartItemDAO;

@Service
public class CartItemService {
	@Autowired
	private static CartItemDAO cid;
	
	public CartItem addCartItem(CartItem cartItem) {
		return cid.addCartItem(cartItem);
	}
	
	public Set<CartItem> getCartByUserID(int id) {
		return cid.getCartByUserID(id);
	}

}
