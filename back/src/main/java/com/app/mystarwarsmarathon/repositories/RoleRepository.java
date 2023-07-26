package com.app.mystarwarsmarathon.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.mystarwarsmarathon.entities.Role;
import com.app.mystarwarsmarathon.enums.RoleEnum;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	Optional<Role> findByName(RoleEnum name);
}
