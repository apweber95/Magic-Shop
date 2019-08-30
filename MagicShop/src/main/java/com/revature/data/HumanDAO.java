package com.revature.data;

import com.revature.beans.Human;

public interface HumanDAO {

	public Human getHumanByID(int id);
	
	public Human getHumanByLogin(String username, String password);
	
	public int createHuman(Human h);
	
	public Human updateHuman(Human h);

	
}
