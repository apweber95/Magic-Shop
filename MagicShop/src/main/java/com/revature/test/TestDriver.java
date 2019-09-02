package com.revature.test;

import com.revature.data.ItemHibernate;

public class TestDriver {
	
	public static void main(String[] args) {
		ItemHibernate itemHibernate = new ItemHibernate();
		System.out.println(itemHibernate.getItemById(1));
	}

}
