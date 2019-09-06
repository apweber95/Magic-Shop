package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.BackpackItem;
import com.revature.beans.Item;
import com.revature.data.BackpackItemDAO;
import com.revature.data.HumanDAO;
import com.revature.data.ItemDAO;

@Service
public class ItemService {
	@Autowired
	private ItemDAO id;
	@Autowired
	private BackpackItemDAO backpackItemDAO;
	@Autowired
	private HumanDAO humanDAO;
	
	public Set<Item> returnAllItems() {
		return id.getAllItems();
	}
	
	public Item getItem(int itemID) {
		return id.getItemById(itemID);
	}

	public Item addItemToStore(int itemId, int humanId) {
		Item item = id.getItemById(itemId);
		Set<BackpackItem> storeItems = backpackItemDAO.getBackpackItemsByOwnerID(humanId);
		for (BackpackItem backpackItem : storeItems) {
			if (backpackItem.getItemID().getItemID() == itemId) {
				return item;
			}
		}
		BackpackItem backpackItem = new BackpackItem();
		backpackItem.setItemID(item);
		backpackItem.setOwnerID(humanDAO.getHumanByID(1));
		backpackItem.setStock(1);
		backpackItemDAO.addBackpackItem(backpackItem);
		return item;
	}

	public Item removeItemFromStore(int itemId, int humanId) {
		Item item = id.getItemById(itemId);
		Set<BackpackItem> storeItems = backpackItemDAO.getBackpackItemsByOwnerID(humanId);
		for (BackpackItem backpackItem : storeItems) {
			if (backpackItem.getItemID().getItemID() == itemId) {
				backpackItemDAO.deleteBackpackItem(backpackItem.getBackpackID());
			}
		}
		return item;
	}
}
