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

import com.app.mystarwarsmarathon.entities.Filme_Maratona;
import com.app.mystarwarsmarathon.services.Filme_MaratonaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/filme_maratona")
public class Filme_MaratonaController {

	@Autowired
	Filme_MaratonaService FMService;

	@GetMapping
	public ResponseEntity<List<Filme_Maratona>> getAllFilme_Maratona() {
		return new ResponseEntity<>(FMService.getAllFilme_Maratona(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Filme_Maratona> getFilme_MaratonaById(@PathVariable Integer id) {
		Filme_Maratona fmResponse = FMService.getFilme_MaratonaById(id);

		if (fmResponse == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		return new ResponseEntity<>(FMService.getFilme_MaratonaById(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> saveFilme_Maratona(@RequestBody @Valid Filme_Maratona filme_maratona) {
		return new ResponseEntity<>(FMService.saveFilme_Maratona(filme_maratona), HttpStatus.CREATED);
	}

	@PutMapping
	public ResponseEntity<?> updateFilme_Maratona(@RequestBody @Valid Filme_Maratona filme_maratona) {
		return new ResponseEntity<>(FMService.updateFilme_Maratona(filme_maratona), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deteleFilme_Maratona(@PathVariable Integer id) {
		if(FMService.deleteFilme_Maratona(id))
			return new ResponseEntity<>(HttpStatus.OK);
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
