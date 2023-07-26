package com.app.mystarwarsmarathon.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id_filme_maratona", scope = Filme_Maratona.class)
@Entity
@Table(name = "filme_maratona")
public class Filme_Maratona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_filme_maratona;
	
	@ManyToOne
    @JoinColumn(name = "id_filme")
    private Filme filme;
	
	@ManyToOne
    @JoinColumn(name = "id_maratona")
    private Maratona maratona;

	public Integer getId_filme_maratona() {
		return id_filme_maratona;
	}

	public void setId_filme_maratona(Integer id_filme_maratona) {
		this.id_filme_maratona = id_filme_maratona;
	}

	public Filme getFilme() {
		return filme;
	}

	public void setFilme(Filme filme) {
		this.filme = filme;
	}

	public Maratona getMaratona() {
		return maratona;
	}

	public void setMaratona(Maratona maratona) {
		this.maratona = maratona;
	}
}
