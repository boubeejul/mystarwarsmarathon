package com.app.mystarwarsmarathon.dto;

import java.util.Set;

public class MaratonaUserDTO {

	private Integer id_maratona;
	private String nome_maratona;
	private String data_inicio;
	private String data_final;
	private String status;
	private Set<Filme_MaratonaDTO> filmes;
	

	public Integer getId_maratona() {
		return id_maratona;
	}
	public void setId_maratona(Integer id_maratona) {
		this.id_maratona = id_maratona;
	}
	public String getNome_maratona() {
		return nome_maratona;
	}
	public void setNome_maratona(String nome_maratona) {
		this.nome_maratona = nome_maratona;
	}
	public String getData_inicio() {
		return data_inicio;
	}
	public void setData_inicio(String data_inicio) {
		this.data_inicio = data_inicio;
	}
	public String getData_final() {
		return data_final;
	}
	public void setData_final(String data_final) {
		this.data_final = data_final;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Set<Filme_MaratonaDTO> getFilmes() {
		return filmes;
	}
	public void setFilmes(Set<Filme_MaratonaDTO> filmes) {
		this.filmes = filmes;
	}
	
	
}
