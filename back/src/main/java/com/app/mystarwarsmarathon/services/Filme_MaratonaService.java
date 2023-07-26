package com.app.mystarwarsmarathon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.entities.Filme_Maratona;
import com.app.mystarwarsmarathon.repositories.Filme_MaratonaRepository;

@Service
public class Filme_MaratonaService {

	@Autowired
	Filme_MaratonaRepository FMRepository;
	
	public List<Filme_Maratona> getAllFilme_Maratona() {
		return FMRepository.findAll();
	}
	
	public Filme_Maratona getFilme_MaratonaById(Integer id) {
		return FMRepository.findById(id).orElse(null);
	}
	
	public Filme_Maratona saveFilme_Maratona(Filme_Maratona fm) {
		return FMRepository.save(fm);
	}
	
	public Filme_Maratona updateFilme_Maratona(Filme_Maratona fm) {
		return FMRepository.save(fm);
	}
	
	public Boolean deleteFilme_Maratona(Integer id) {

		if (getFilme_MaratonaById(id) != null) {
			FMRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
