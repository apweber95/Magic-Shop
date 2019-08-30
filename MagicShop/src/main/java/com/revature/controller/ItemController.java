package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Item;
import com.revature.data.ItemDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/shop")
public class ItemController {
	@Autowired
	private ItemDAO id;
	
	@GetMapping
	public ResponseEntity<Set<Item>> getItems() {
		return ResponseEntity.ok(id.getAllItems());
	}
}
