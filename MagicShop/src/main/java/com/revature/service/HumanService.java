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
		return hd.getHumanByLogin(username, password);
	}
	
	@Autowired
	public Human getByID(int id) {
		return hd.getHumanByID(id);
	}
	
	@Autowired
	public int createHuman(Human h) {
		return hd.createHuman(h);
	}
	
	@Autowired
	public Human updateHuman(Human h) {
		return hd.updateHuman(h);
	}
	
	
	
}
