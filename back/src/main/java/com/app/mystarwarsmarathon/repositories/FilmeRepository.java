package com.app.mystarwarsmarathon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.mystarwarsmarathon.entities.Filme;

public interface FilmeRepository extends JpaRepository<Filme, Integer>{

}
