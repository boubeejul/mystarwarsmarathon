package com.app.mystarwarsmarathon.dto;

public class FilmeDTO {

	private Integer id_filme;
	private String nome_filme;
	private Integer duracao;
	private Integer ano;
	private String imagem_URL;
	
	public Integer getId_filme() {
		return id_filme;
	}
	public void setId_filme(Integer id_filme) {
		this.id_filme = id_filme;
	}
	public String getNome_filme() {
		return nome_filme;
	}
	public void setNome_filme(String nome_filme) {
		this.nome_filme = nome_filme;
	}
	public Integer getDuracao() {
		return duracao;
	}
	public void setDuracao(Integer duracao) {
		this.duracao = duracao;
	}
	public Integer getAno() {
		return ano;
	}
	public void setAno(Integer ano) {
		this.ano = ano;
	}
	public String getImagem_URL() {
		return imagem_URL;
	}
	public void setImagem_URL(String imagem_URL) {
		this.imagem_URL = imagem_URL;
	}
	
	
}
