package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Human;
import com.revature.service.HumanService;


@RestController
@CrossOrigin
@RequestMapping(value="/register")

public class RegisterController {
	
	@Autowired
	private HumanService hs;
	
	@PostMapping
	public ResponseEntity<Integer> register(@RequestBody Human human){
		System.out.println("Registering new Account: " + human);
		return ResponseEntity.ok(hs.createHuman(human));
	}

}
