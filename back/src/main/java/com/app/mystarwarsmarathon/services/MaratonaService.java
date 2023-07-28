package com.app.mystarwarsmarathon.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.dto.FilmeDTO;
import com.app.mystarwarsmarathon.dto.Filme_MaratonaDTO;
import com.app.mystarwarsmarathon.dto.MaratonaDTO;
import com.app.mystarwarsmarathon.dto.UserMaratonaDTO;
import com.app.mystarwarsmarathon.entities.Filme_Maratona;
import com.app.mystarwarsmarathon.entities.Maratona;
import com.app.mystarwarsmarathon.repositories.MaratonaRepository;

@Service
public class MaratonaService {

	@Autowired
	MaratonaRepository maratonaRepository;

	public List<Maratona> getAllMaratonas() {
		return maratonaRepository.findAll();
	}

	public MaratonaDTO getMaratonaById(Integer id) {
		ModelMapper modelMapper = new ModelMapper();

		Maratona maratona = maratonaRepository.findById(id).orElse(null);

		if (maratona != null) {
			MaratonaDTO maratonaDTO = modelMapper.map(maratona, MaratonaDTO.class);
			int tempo_total = 0;

			Set<Filme_MaratonaDTO> fmDTO = new HashSet<>();

			for (Filme_Maratona fm : maratona.getLista_filme_maratona()) {
				Filme_MaratonaDTO newfmDTO = modelMapper.map(fm, Filme_MaratonaDTO.class);
				FilmeDTO newFilmeDTO = modelMapper.map(fm.getFilme(), FilmeDTO.class);
				
				tempo_total += fm.getFilme().getDuracao();
				
				newfmDTO.setFilme(newFilmeDTO);
				fmDTO.add(newfmDTO);
			}

			maratonaDTO.setFilmes(fmDTO);
			maratonaDTO.setTempo_total(tempo_total);
			UserMaratonaDTO userDTO = modelMapper.map(maratona.getUser(), UserMaratonaDTO.class);
			maratonaDTO.setUser(userDTO);
			return maratonaDTO;
		}
		return null;

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
