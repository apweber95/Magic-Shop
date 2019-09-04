package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.BackpackItem;
import com.revature.data.BackpackItemDAO;

@Service
public class BackpackItemService {
	@Autowired
	private BackpackItemDAO bd;
	
	public Set<BackpackItem> returnBackpackItemsByOwnerID(int id){
		return bd.getBackpackItemsByOwnerID(id);
	}

	public BackpackItem increaseStockFor(Integer backpackItemId) {
		BackpackItem backpackItem = bd.getBackpackItemByID(backpackItemId);
		backpackItem.setStock(backpackItem.getStock() + 1);
		return bd.updateBackpackItem(backpackItem);
	}
	
	public BackpackItem updateBackpackItem(BackpackItem b) {
		return bd.updateBackpackItem(b);
	}
}
