package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Human;
import com.revature.service.QuestService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/quest")
public class QuestController {
	
	@Autowired
	QuestService questService;
	
	@PostMapping(value="{difficulty}")
	public ResponseEntity<Human> quest(@PathVariable int difficulty, @RequestBody Human human) {
		human = questService.quest(difficulty, human);
		return ResponseEntity.ok(human);
	}

}
