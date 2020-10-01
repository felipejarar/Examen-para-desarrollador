package com.springapp.backend.apirest.models.services;

import java.util.List;

import com.springapp.backend.apirest.models.entity.User;

public interface IUserService {

	public List<User> findAll();
}
