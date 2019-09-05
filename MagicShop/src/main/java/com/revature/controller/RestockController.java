package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.BackpackItem;
import com.revature.service.BackpackItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/restock")
public class RestockController {
	@Autowired
	private BackpackItemService backpackItemService;
	
	@PutMapping(value="{backpackItemId}")
	public ResponseEntity<BackpackItem> register(@PathVariable Integer backpackItemId) {
		return ResponseEntity.ok(backpackItemService.increaseStockFor(backpackItemId));
	}


}
