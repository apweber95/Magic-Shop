package com.revature.data;

import java.util.Set;

import com.revature.beans.Item;

public interface ItemDAO {
	Integer addItem(Item i);
	Item getItemById(Integer id);
	Set<Item> getItemsByRarity(String rarity);
	Set<Item> getAllItems();
}
