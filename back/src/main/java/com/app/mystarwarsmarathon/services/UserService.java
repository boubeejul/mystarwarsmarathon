package com.app.mystarwarsmarathon.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.dto.FilmeDTO;
import com.app.mystarwarsmarathon.dto.Filme_MaratonaDTO;
import com.app.mystarwarsmarathon.dto.MaratonaUserDTO;
import com.app.mystarwarsmarathon.dto.UserDTO;
import com.app.mystarwarsmarathon.entities.Filme_Maratona;
import com.app.mystarwarsmarathon.entities.Maratona;
import com.app.mystarwarsmarathon.entities.User;
import com.app.mystarwarsmarathon.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public UserDTO getUserById(Integer id) {
		
		ModelMapper modelMapper = new ModelMapper();
		
		User user = userRepository.findById(id).orElse(null);
		
		if(user != null) {
			UserDTO userDTO = modelMapper.map(user, UserDTO.class);
			
			Set<MaratonaUserDTO> maratonaDTO = new HashSet<>();
			
			for (Maratona maratona : user.getMaratonas()) {
				MaratonaUserDTO newMaratDTO = modelMapper.map(maratona, MaratonaUserDTO.class);
				
				Set<Filme_MaratonaDTO> fmDTO = new HashSet<>();
				
				for(Filme_Maratona fm : maratona.getLista_filme_maratona()) {
					Filme_MaratonaDTO newfmDTO = modelMapper.map(fm, Filme_MaratonaDTO.class);
					FilmeDTO newFilmeDTO = modelMapper.map(fm.getFilme(), FilmeDTO.class);
					newfmDTO.setFilme(newFilmeDTO);
					fmDTO.add(newfmDTO);
				}
				
				newMaratDTO.setFilmes(fmDTO);
				maratonaDTO.add(newMaratDTO);
			}
			
			userDTO.setMaratonas(maratonaDTO);
			
			return userDTO;
		}
		
		return null;
	}

	public Boolean deleteById(Integer id) {
		if (userRepository.findById(id) != null) {
			userRepository.deleteById(id);
			return true;
		}
		return false;
	}

}
