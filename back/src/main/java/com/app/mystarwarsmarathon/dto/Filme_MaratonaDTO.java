package com.app.mystarwarsmarathon.dto;

public class Filme_MaratonaDTO {
	
	private Integer id_filme_maratona;
	private FilmeDTO filme;
	
	public Integer getId_filme_maratona() {
		return id_filme_maratona;
	}
	public void setId_filme_maratona(Integer id_filme_maratona) {
		this.id_filme_maratona = id_filme_maratona;
	}
	public FilmeDTO getFilme() {
		return filme;
	}
	public void setFilme(FilmeDTO filme) {
		this.filme = filme;
	}
}
