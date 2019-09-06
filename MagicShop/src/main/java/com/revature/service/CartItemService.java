package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.CartItem;
import com.revature.data.CartItemDAO;

@Service
public class CartItemService {
	@Autowired
	private CartItemDAO cid;
	
	public CartItem addCartItem(CartItem cartItem) {
		Set<CartItem> cartItems = cid.getCartByUserID(cartItem.getOwnerID().getUserID());
		for(CartItem ci : cartItems) {
			if(cartItem.getItemID().getItemID() == ci.getItemID().getItemID()) {
				ci.setAmount(ci.getAmount() + 1);
				return cid.updateCartItem(ci);
			}
		}
		cartItem.setAmount(1);
		return cid.addCartItem(cartItem);
	}
	
	public Set<CartItem> getCartByUserID(int id) {
		return cid.getCartByUserID(id);
	}

}
