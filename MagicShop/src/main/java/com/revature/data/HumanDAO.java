package com.revature.data;

import com.revature.beans.Human;

public interface HumanDAO {

	public Human getHumanByID(int id);
	
	public Human getHumanByLogin(String username, String password);
	
	public void createHuman(Human h);
	
	public void updateHumanRole(Human h);
	
	public void updateHumanGold(Human h);
	
}
