package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.BackpackItem;
import com.revature.beans.Human;
import com.revature.data.HumanDAO;

@Service
public class HumanService {
	
	@Autowired
	private HumanDAO hd;
	
	public Human login(String username, String password) {
		Human h = new Human();
		h = hd.getHumanByLogin(username, password);
		
		return h;
	}
	
	public Human getByID(int id) {
		Human h = new Human();
		h = hd.getHumanByID(id);
		return h;
	}
	
	public Set<Human> returnAllAccounts() {
		return hd.getAllAccounts();
	}
	
	public int createHuman(Human h) {
		if (hd.getHumanByLogin(h.getUsername(), h.getPassword()) == null) {
			//this username/password combo is available
			return hd.createHuman(h);
		} else {
			//this username/password combo is already taken
			return 0;
		}
		
	}
	
	public Human increaseRole(Integer humanId) {
		Human human = hd.getHumanByID(humanId);
		human.setRoleID(human.getRoleID() + 1);
		return hd.updateHuman(human);
	}
	
	public Human updateHuman(Human h) {
		return hd.updateHuman(h);
	}
		
}
