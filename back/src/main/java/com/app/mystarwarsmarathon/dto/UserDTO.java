package com.app.mystarwarsmarathon.dto;

import java.util.Set;

public class UserDTO {

	private Integer id;
	private String username;
	private Set<MaratonaUserDTO> maratonas;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Set<MaratonaUserDTO> getMaratonas() {
		return maratonas;
	}
	public void setMaratonas(Set<MaratonaUserDTO> maratonas) {
		this.maratonas = maratonas;
	}
	
	
}

