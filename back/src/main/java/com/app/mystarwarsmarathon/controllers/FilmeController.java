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

import com.app.mystarwarsmarathon.dto.FilmeDTO;
import com.app.mystarwarsmarathon.entities.Filme;
import com.app.mystarwarsmarathon.services.FilmeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/filme")
public class FilmeController {

	@Autowired
	FilmeService filmeService;
	
	@GetMapping
	public ResponseEntity<List<Filme>> getAllFilmes() {
		return new ResponseEntity<>(filmeService.getAllFilmes(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<FilmeDTO> getFilmeById(@PathVariable Integer id) {
		return new ResponseEntity<>(filmeService.getFilmeById(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> saveFilme(@RequestBody @Valid Filme filme) {
		return new ResponseEntity<>(filmeService.saveFilme(filme), HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<?> updateFilme(@RequestBody @Valid Filme filme) {
		return new ResponseEntity<>(filmeService.updateFilme(filme), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deteleFilme(@PathVariable Integer id) {
		return new ResponseEntity<>(filmeService.deleteFilme(id), HttpStatus.OK);
	}
}
