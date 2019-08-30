package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Human;
import com.revature.service.HumanService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/login")
public class LoginController {

	@Autowired
	private HumanService hs;
	
	
	@GetMapping(value="{id}")
	public ResponseEntity<Human> login(@PathVariable int id, @RequestBody Human h){
		return ResponseEntity.ok(hs.login(h.getUsername(), h.getPassword()));
	}
	

	
}
