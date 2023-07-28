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
import com.app.mystarwarsmarathon.entities.Filme;
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

		if (user != null) {
			UserDTO userDTO = modelMapper.map(user, UserDTO.class);

			Set<MaratonaUserDTO> maratonaDTO = new HashSet<>();
			int assistidas = 0;
			int canceladas = 0;
			int pendentes = 0;
			int tempo_assistido = 0;

			for (Maratona maratona : user.getMaratonas()) {
				MaratonaUserDTO newMaratDTO = modelMapper.map(maratona, MaratonaUserDTO.class);

				switch (newMaratDTO.getStatus()) {
				case "Assistida":
					assistidas++;

					for (Filme_Maratona fm : maratona.getLista_filme_maratona()) {
						tempo_assistido += fm.getFilme().getDuracao();
					}

					break;
				case "Pendente":
					pendentes++;
					break;
				case "Cancelada":
					canceladas++;
					break;
				}

				int tempo_total = 0;

				Set<Filme_MaratonaDTO> fmDTO = new HashSet<>();

				for (Filme_Maratona fm : maratona.getLista_filme_maratona()) {
					Filme_MaratonaDTO newfmDTO = modelMapper.map(fm, Filme_MaratonaDTO.class);
					FilmeDTO newFilmeDTO = modelMapper.map(fm.getFilme(), FilmeDTO.class);

					tempo_total += fm.getFilme().getDuracao();

					newfmDTO.setFilme(newFilmeDTO);
					fmDTO.add(newfmDTO);
				}

				newMaratDTO.setFilmes(fmDTO);
				newMaratDTO.setTempo_total(tempo_total);
				maratonaDTO.add(newMaratDTO);
			}

			userDTO.setMaratonas(maratonaDTO);

			userDTO.setMarat_assistidas(assistidas);

			userDTO.setMarat_canceladas(canceladas);

			userDTO.setMarat_pendentes(pendentes);

			userDTO.setHoras_assistidas(tempo_assistido / 60);

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
