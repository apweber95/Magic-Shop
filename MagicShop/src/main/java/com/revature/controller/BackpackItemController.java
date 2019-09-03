package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.BackpackItem;
import com.revature.data.BackpackItemDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/backpack")
public class BackpackItemController {
	@Autowired
	private BackpackItemDAO bd;
	
	@GetMapping(value="{id}")
	public ResponseEntity<Set<BackpackItem>> getBackpackItems(@PathVariable Integer id){
		return ResponseEntity.ok(bd.getBackpackItemsByOwnerID(id));
	}
}
