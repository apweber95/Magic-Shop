package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Item;
import com.revature.data.ItemDAO;

@Service
public class ItemService {
	@Autowired
	private ItemDAO id;
	
	public Set<Item> returnAllItems() {
		return id.getAllItems();
	}
	
	public Item getItem(int itemID) {
		return id.getItemById(itemID);
	}
}
