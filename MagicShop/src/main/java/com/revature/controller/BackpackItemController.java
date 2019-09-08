package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.BackpackItem;
import com.revature.service.BackpackItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/backpack")
public class BackpackItemController {
	
	@Autowired
	private BackpackItemService bis;
	
	@GetMapping(value="{id}")
	public ResponseEntity<Set<BackpackItem>> getBackpackItems(@PathVariable Integer id){
		return ResponseEntity.ok(bis.returnBackpackItemsByOwnerID(id));
	}
	
	@PutMapping(value="{id}")
	public ResponseEntity<BackpackItem> updateBackpackItem(@PathVariable Integer id, @RequestBody BackpackItem b) {
		if(bis.returnBackpackItemsByOwnerID(id) == null) {
			return ResponseEntity.status(405).body(null);
		}
		return ResponseEntity.ok(bis.updateBackpackItem(b));
	}
	
	@DeleteMapping(value="{id}")
	public ResponseEntity<Void> deleteBackpackItem(@PathVariable Integer id){
		bis.deleteBackpackItem(id);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public ResponseEntity<BackpackItem> addItemToBackpack(@RequestBody BackpackItem b){
		return ResponseEntity.ok(bis.addItemToBackpack(b.getItemID().getItemID(), b.getOwnerID().getUserID(), b.getStock()));
	}
	
}
