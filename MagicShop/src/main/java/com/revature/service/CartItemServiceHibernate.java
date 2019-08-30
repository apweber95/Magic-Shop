package com.revature.service;

import java.util.Set;

import com.revature.beans.BackpackItem;
import com.revature.beans.CartItem;
import com.revature.beans.Human;
import com.revature.beans.Item;
import com.revature.beans.PurchaseTransaction;
import com.revature.data.BackpackItemDAO;
import com.revature.data.CartItemDAO;
import com.revature.data.HumanDAO;
import com.revature.data.ItemDAO;
import com.revature.data.TransactionDAO;
import com.revature.data.BackpackItemHibernate;
import com.revature.data.CartItemHibernate;
import com.revature.data.HumanHibernate;
import com.revature.data.ItemHibernate;
import com.revature.data.TransactionHibernate;
import com.revature.service.CartItemService;

public class CartItemServiceHibernate implements CartItemService{
	
	private static CartItemDAO cid = new CartItemHibernate();

	@Override
	public Set<CartItem> getCart(Human human) {
		// TODO Auto-generated method stub
		return cid.getCart(human);
	}



}
