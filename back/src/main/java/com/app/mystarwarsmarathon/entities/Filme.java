package com.app.mystarwarsmarathon.entities;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "filme")
public class Filme {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_filme;
	
	@NotBlank(message = "Nome do filme não informado")
	@Column(name = "nome_filme")
	private String nome_filme;
	
	@NotNull(message = "Duração do filme não informada")
	@Column(name = "duracao")
	private Integer duracao;
	
	@NotNull(message = "Ano do filme não informado")
	@Column(name = "ano")
	private Integer ano;
	
	@NotBlank(message = "Endereço da imagem do filme não informado")
	@Column(name = "imagem_URL")
	private String imagem_URL;
	
	@OneToMany(mappedBy = "filme")
    Set<Filme_Maratona> lista_filme_maratona;

    
	
	public Set<Filme_Maratona> getLista_filme_maratona() {
		return lista_filme_maratona;
	}

	public void setLista_filme_maratona(Set<Filme_Maratona> lista_filme_maratona) {
		this.lista_filme_maratona = lista_filme_maratona;
	}

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
