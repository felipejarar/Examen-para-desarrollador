package com.springapp.backend.apirest.models.services;

import java.util.List;

import com.springapp.backend.apirest.models.dto.UserEntry;

public interface IUserService {

	public List<UserEntry> findAllIdsAndUsernames();
	
	public UserEntry matchUsernameAndPassword(String name, String pass);

}
