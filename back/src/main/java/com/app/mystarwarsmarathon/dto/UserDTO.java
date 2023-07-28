package com.app.mystarwarsmarathon.dto;

import java.util.Set;

public class UserDTO {

	private Integer id;
	private String username;
	private Integer marat_assistidas;
	private Integer marat_pendentes = 0;
	private Integer marat_canceladas = 0;
	private Integer horas_assistidas = 0;
	private Set<MaratonaUserDTO> maratonas;
	
	
	
	public Integer getMarat_assistidas() {
		return marat_assistidas;
	}
	public void setMarat_assistidas(Integer marat_assistidas) {
		this.marat_assistidas = marat_assistidas;
	}
	public Integer getMarat_pendentes() {
		return marat_pendentes;
	}
	public void setMarat_pendentes(Integer marat_pendentes) {
		this.marat_pendentes = marat_pendentes;
	}
	public Integer getMarat_canceladas() {
		return marat_canceladas;
	}
	public void setMarat_canceladas(Integer marat_canceladas) {
		this.marat_canceladas = marat_canceladas;
	}
	public Integer getHoras_assistidas() {
		return horas_assistidas;
	}
	public void setHoras_assistidas(Integer horas_assistidas) {
		this.horas_assistidas = horas_assistidas;
	}
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

