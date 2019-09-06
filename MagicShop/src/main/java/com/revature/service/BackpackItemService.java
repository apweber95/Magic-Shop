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
public class BackpackItemService {
	@Autowired
	private ItemDAO id;
	@Autowired
	private BackpackItemDAO bd;
	@Autowired
	private HumanDAO hd;
	
	public Set<BackpackItem> returnBackpackItemsByOwnerID(int id){
		return bd.getBackpackItemsByOwnerID(id);
	}
	
	public BackpackItem updateBackpackItem(BackpackItem b) {
		return bd.updateBackpackItem(b);
	}
	
	public BackpackItem addItemToBackpack(int itemId, int humanId, int quantity) {
		Item item = id.getItemById(itemId);
		Set<BackpackItem> backpack = bd.getBackpackItemsByOwnerID(humanId);
		for (BackpackItem backpackItem : backpack) {
			if (backpackItem.getItemID().getItemID() == itemId) {
				backpackItem.setStock(backpackItem.getStock() + quantity);
				bd.updateBackpackItem(backpackItem);
				return backpackItem;
			}
		}
		BackpackItem backpackItem = new BackpackItem();
		backpackItem.setItemID(item);
		backpackItem.setOwnerID(hd.getHumanByID(humanId));
		backpackItem.setStock(quantity);
		bd.addBackpackItem(backpackItem);
		return backpackItem;
	}

	public BackpackItem removeItemFromBackpack(int itemId, int humanId) {
		Set<BackpackItem> storeItems = bd.getBackpackItemsByOwnerID(humanId);
		for (BackpackItem backpackItem : storeItems) {
			if (backpackItem.getItemID().getItemID() == itemId) {
				bd.deleteBackpackItem(backpackItem.getBackpackID());
				return backpackItem;
			}
		}
		return null;
	}
	
	public void transferAll(int id) {
		Set<BackpackItem> bi = bd.getBackpackItemsByOwnerID(id);
		for(BackpackItem b: bi) {
			BackpackItem temp = addItemToBackpack(b.getItemID().getItemID(), 1, b.getStock());
			temp = removeItemFromBackpack(b.getItemID().getItemID(), id);
		}
	}
}
