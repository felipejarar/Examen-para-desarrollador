package com.springapp.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.dto.UserEntry;
import com.springapp.backend.apirest.models.entity.User;

public interface IUserDao extends CrudRepository<User, Long>{
	
	@Query("SELECT new com.springapp.backend.apirest.models.dto.UserEntry(u.id, u.username)"
			+ "FROM User u")
	List<UserEntry> findAllIdsAndUsernames();
	
	@Query("SELECT new com.springapp.backend.apirest.models.dto.UserEntry(u.id, u.username)"
			+ "FROM User u WHERE u.username = ?1 and u.password = ?2")
	List<UserEntry> matchUsernameAndPassword(String username, String password, Pageable pagaeable);

}
