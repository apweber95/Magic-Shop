package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		return hd.getHumanByID(id);
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
	
	public Human updateHuman(Human h) {
		return hd.updateHuman(h);
	}
		
}
