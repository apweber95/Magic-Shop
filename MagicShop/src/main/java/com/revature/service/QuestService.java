package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.BackpackItem;
import com.revature.beans.Human;
import com.revature.beans.Item;
import com.revature.data.BackpackItemDAO;
import com.revature.data.HumanDAO;
import com.revature.data.ItemDAO;

@Component
public class QuestService {
	
	@Autowired
	BackpackItemDAO backpackItemDAO;
	@Autowired
	ItemDAO itemDAO;
	@Autowired
	BackpackItemService backpackItemService;
	@Autowired
	HumanDAO humanDAO;
	
	public Human quest(int difficulty, Human human) {
		int dc = (int) Math.floor(Math.random() * difficulty * 2);
		int roll = (int) Math.ceil(Math.random() * human.getLuck());
		if (dc > roll) {
			human.setRoleID(5);
			humanDAO.updateHuman(human);
			
		} else {
			int lootMod = 1 + (difficulty + human.getLuck()) / 5;
			human.setGold(human.getGold() + (difficulty * human.getLuck()));
			for (int i=0; i<lootMod; i++) {
				backpackItemService.addItemToBackpack((int) Math.floor(Math.random() * 248), human.getUserID(), 1);
			}
		}
		return human;
	}

}
