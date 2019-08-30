package com.revature.service;

import java.util.Set;

import com.revature.beans.BackpackItem;
import com.revature.data.BackpackItemDAO;
import com.revature.data.BackpackItemHibernate;

public class BackpackItemServiceHibernate implements BackpackItemService {
	private BackpackItemDAO bd = new BackpackItemHibernate();
	
	@Override
	public BackpackItem addBackpackItem(BackpackItem b) {
		return bd.addBackpackItem(b);
	}

	@Override
	public BackpackItem getBackpackItemByID(int id) {
		return bd.getBackpackItemByID(id);
	}

	@Override
	public Set<BackpackItem> getBackpackItemsByOwnerID(int id) {
		return bd.getBackpackItemsByOwnerID(id);
	}

	@Override
	public void updateBackpackItem(BackpackItem b) {
		bd.updateBackpackItem(b);
	}

}
