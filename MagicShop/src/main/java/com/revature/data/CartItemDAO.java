package com.revature.data;

import java.util.Set;

import com.revature.beans.CartItem;

public interface CartItemDAO {
	
	public CartItem addCartItem(CartItem cartItem);
	
	public CartItem getCartItem(Integer cartItemId);
	
	public Set<CartItem> getCartByUserID(int id);
	
	public void updateCartItem(CartItem cartItem);
	
	public void deleteCartItem(CartItem cartItem);

}
