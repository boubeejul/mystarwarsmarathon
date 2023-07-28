package com.app.mystarwarsmarathon.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.mystarwarsmarathon.dto.UserDTO;
import com.app.mystarwarsmarathon.entities.User;
import com.app.mystarwarsmarathon.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping
	public ResponseEntity<List<User>> getAllUser() {
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) {
		UserDTO userResponse = userService.getUserById(id);

		if (userResponse == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
		if (userService.deleteById(id))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}