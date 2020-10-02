package com.springapp.backend.apirest.models.services;

import java.util.List;

import com.springapp.backend.apirest.models.dto.UserProjection;
import com.springapp.backend.apirest.models.entity.User;

public interface IUserService {

	public List<UserProjection> findAllProjectedBy();
	
	public UserProjection findPagedProjectedByUsernameAndPassword(String name, String pass);

	public User findAllSortedByTaskCountDesc();
}
