package com.app.mystarwarsmarathon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.entities.Maratona;
import com.app.mystarwarsmarathon.repositories.MaratonaRepository;

@Service
public class MaratonaService {

	@Autowired
	MaratonaRepository maratonaRepository;

	public List<Maratona> getAllMaratonas() {
		return maratonaRepository.findAll();
	}

	public Maratona getMaratonaById(Integer id) {
		return maratonaRepository.findById(id).orElse(null);
	}

	public Maratona saveMaratona(Maratona maratona) {
		return maratonaRepository.save(maratona);
	}

	public Maratona updateMaratona(Maratona maratona) {
		return maratonaRepository.save(maratona);
	}

	public Boolean deleteMaratona(Integer id) {

		if (getMaratonaById(id) != null) {
			maratonaRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
