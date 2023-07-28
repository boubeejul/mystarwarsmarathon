package com.app.mystarwarsmarathon.entities;

import java.util.Set;

import com.app.mystarwarsmarathon.enums.StatusEnum;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id_maratona", scope = Maratona.class)
@Entity
@Table(name = "maratona")
public class Maratona {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_maratona;
	
	@NotBlank(message = "Nome da maratona não informado")
	@Column(name = "nome_maratona")
	private String nome_maratona;
	
	@NotBlank(message = "Data de início da maratona não informado")
	@Column(name = "data_inicio")
	private String data_inicio;
	
	@NotBlank(message = "Data final da maratona não informado")
	@Column(name = "data_final")
	private String data_final;
	
	@NotNull(message = "Status da maratona não informado")
	@Column(name = "status")
	private StatusEnum status;

	@OneToMany(mappedBy = "maratona")
    private Set<Filme_Maratona> lista_filme_maratona;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;
    

	public Set<Filme_Maratona> getLista_filme_maratona() {
		return lista_filme_maratona;
	}

	public void setLista_filme_maratona(Set<Filme_Maratona> lista_filme_maratona) {
		this.lista_filme_maratona = lista_filme_maratona;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

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

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}
}
