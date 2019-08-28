package com.revature.data;

import java.util.Set;

import com.revature.beans.BackpackItem;

public interface BackpackItemDAO {
	BackpackItem createBackpackItem(BackpackItem b);
	BackpackItem getBackpackItemByID(int id);
	Set<BackpackItem> getBackpackItemsByOwnerID(int id);
	void updateBackpackItem(BackpackItem b);
}
