package com.revature.test;

import com.revature.data.ItemHibernate;
import com.revature.service.ItemService;

public class TestDriver {
	
	public static void main(String[] args) {
		ItemHibernate itemHibernate = new ItemHibernate();
		System.out.println(itemHibernate.getItemById(1));
	}

}
