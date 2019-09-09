package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.BackpackItem;
import com.revature.beans.CartItem;
import com.revature.data.BackpackItemDAO;
import com.revature.data.CartItemDAO;

@Service
public class CartItemService {
	@Autowired
	private CartItemDAO cid;
	
	@Autowired
	private BackpackItemService bps;
	
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
	
	public CartItem getCartItem(Integer cartItemId) {
		return cid.getCartItem(cartItemId);
	}
	
	public Set<CartItem> getCartByUserID(int id) {
		return cid.getCartByUserID(id);
	}
	
	public CartItem updateCartItem(CartItem cartItem) {
		return cid.updateCartItem(cartItem);
	}
	
	public void deleteCartItem(CartItem cartItem) {
		cid.deleteCartItem(cartItem);
	}
	
	public void transferItems(int id) {
		System.out.println(id);
		Set<CartItem> cart = getCartByUserID(id);
		for(CartItem c : cart) {
			int itemId = c.getItemID().getItemID();
			int itemStock = c.getAmount();
			BackpackItem temp = bps.addItemToBackpack(itemId, id, itemStock);
			cid.deleteCartItem(c);
		}
	}

}
