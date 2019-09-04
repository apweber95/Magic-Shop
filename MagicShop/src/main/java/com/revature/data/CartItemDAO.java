package com.revature.data;

import java.util.Set;

import com.revature.beans.CartItem;
import com.revature.beans.Human;

public interface CartItemDAO {
	
	public CartItem addCartItem(CartItem cartItem);
	
	public CartItem getCartItem(Integer cartItemId);
	
	public Set<CartItem> getCart(Human human);
	
	public void updateCartItem(CartItem cartItem);
	
	public void deleteCartItem(CartItem cartItem);

}
