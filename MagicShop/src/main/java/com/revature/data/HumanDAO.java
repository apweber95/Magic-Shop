package com.revature.data;

import com.revature.beans.Human;

public interface HumanDAO {

	public Human getHumanByID(Human h);
	
	public Human getHumanByLogin(String username, String password);
	
	public int createHuman(Human h);
	
	public void updateHuman(Human h);

	
}
