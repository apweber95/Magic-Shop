package com.revature.data;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.BackpackItem;
import com.revature.utils.HibernateUtil;

@Component
public class BackpackItemHibernate implements BackpackItemDAO {
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public BackpackItem addBackpackItem(BackpackItem b) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BackpackItem getBackpackItemByID(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Set<BackpackItem> getBackpackItemsByOwnerID(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateBackpackItem(BackpackItem b) {
		// TODO Auto-generated method stub
		
	}

}
