package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Item;
import com.revature.data.ItemDAO;
import com.revature.service.ItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/shop")
public class ItemController {
	@Autowired
	private ItemService itemService;
	
	@GetMapping
	public ResponseEntity<Set<Item>> getItems() {
		return ResponseEntity.ok(itemService.returnAllItems());
	}
	
	@PostMapping(value="{itemId}")
	public ResponseEntity<Item> addItemtoStore(@PathVariable int itemId) {
		return ResponseEntity.ok(itemService.addItemToStore(itemId));
	}
	
	@DeleteMapping(value="{itemId}")
	public ResponseEntity<Item> deleteItemFromStore(@PathVariable int itemId) {
		return ResponseEntity.ok(itemService.removeItemFromStore(itemId));
	}
}
