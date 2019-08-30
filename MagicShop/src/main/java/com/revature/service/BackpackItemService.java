package com.revature.service;

import java.util.Set;

import com.revature.beans.BackpackItem;

public interface BackpackItemService {
	public BackpackItem addBackpackItem(BackpackItem b);
	public BackpackItem getBackpackItemByID(int id);
	public Set<BackpackItem> getBackpackItemsByOwnerID(int id);
	public void updateBackpackItem(BackpackItem b);

}
