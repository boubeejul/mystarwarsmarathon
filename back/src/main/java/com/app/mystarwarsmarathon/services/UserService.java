package com.app.mystarwarsmarathon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.mystarwarsmarathon.entities.User;
import com.app.mystarwarsmarathon.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUserById(Integer id) {
		return userRepository.findById(id).orElse(null);
	}

	public Boolean deleteById(Integer id) {
		if (userRepository.findById(id) != null) {
			userRepository.deleteById(id);
			return true;
		}
		return false;
	}

}
