package com.app.mystarwarsmarathon.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.mystarwarsmarathon.dto.MaratonaDTO;
import com.app.mystarwarsmarathon.entities.Maratona;
import com.app.mystarwarsmarathon.services.MaratonaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/maratona")
public class MaratonaController {

	@Autowired
	MaratonaService maratonaService;
	
	@GetMapping
	public ResponseEntity<List<Maratona>> getAllMaratonas() {
		return new ResponseEntity<>(maratonaService.getAllMaratonas(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<MaratonaDTO> getMaratonaById(@PathVariable Integer id) {
		MaratonaDTO maratonaResponse = maratonaService.getMaratonaById(id);
		
		if(maratonaResponse == null) 
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<>(maratonaService.getMaratonaById(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> saveMaratona(@RequestBody @Valid Maratona maratona) {
		return new ResponseEntity<>(maratonaService.saveMaratona(maratona), HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<?> updateMaratona(@RequestBody @Valid Maratona maratona) {
		return new ResponseEntity<>(maratonaService.updateMaratona(maratona), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deteleMaratona(@PathVariable Integer id) {
		if(maratonaService.deleteMaratona(id))
			return new ResponseEntity<>(HttpStatus.OK);
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
