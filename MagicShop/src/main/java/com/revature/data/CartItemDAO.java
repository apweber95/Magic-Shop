package com.revature.data;

import java.util.Set;

import com.revature.beans.CartItem;
import com.revature.beans.Human;

public interface CartItemDAO {
	
	public Integer addCartItem(CartItem cartItem);
	
	public CartItem getCartItem(Integer cartItemId);
	
	public Set<CartItem> getCartByUserID(int id);
	
	public void udateCartItem(CartItem cartItem);
	
	public void deleteCartItem(CartItem cartItem);

}
