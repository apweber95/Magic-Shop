package com.revature.data;

import java.util.Set;

import com.revature.beans.BackpackItem;

public interface BackpackItemDAO {
	BackpackItem addBackpackItem(BackpackItem b);
	BackpackItem getBackpackItemByID(int id);
	Set<BackpackItem> getBackpackItemsByOwnerID(int id);
	BackpackItem updateBackpackItem(BackpackItem b);
	void deleteBackpackItem(int backpackItemId);
}
