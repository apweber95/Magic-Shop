package com.revature.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Human;
import com.revature.service.HumanService;


@RestController
@CrossOrigin(origins="http://localhost:4401")
@RequestMapping(value="/register")

public class RegisterController {
	
	@Autowired
	private HumanService hs;
	
	@GetMapping
	public ResponseEntity<Human> register() {
		System.out.println("Here it is");
		return ResponseEntity.ok(hs.getByID(1));
	}
	
	@PostMapping
	public ResponseEntity<Integer> register(@RequestBody Human human, HttpServletResponse resp){
		System.out.println("Registering new Account: " + human);
		return ResponseEntity.ok(hs.createHuman(human));
	}

}
