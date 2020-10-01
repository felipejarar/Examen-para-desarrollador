package com.springapp.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.entity.User;

public interface IUserDAO extends CrudRepository<User, Long>{
	
}
