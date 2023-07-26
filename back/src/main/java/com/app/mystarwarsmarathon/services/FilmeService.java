package com.app.mystarwarsmarathon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.entities.Filme;
import com.app.mystarwarsmarathon.repositories.FilmeRepository;

@Service
public class FilmeService {

	@Autowired
	FilmeRepository filmeRepository;
	
	public List<Filme> getAllFilmes() {
		return filmeRepository.findAll();
	}
	
	public Filme getFilmeById(Integer id) {
		return filmeRepository.findById(id).orElse(null);
	}
	
	public Filme saveFilme(Filme filme) {
		return filmeRepository.save(filme);
	}
	
	public Filme updateFilme(Filme filme) {
		return filmeRepository.save(filme);
	}
	
	public Boolean deleteFilme(Integer id) {
		
		if(getFilmeById(id) != null) {
			filmeRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
