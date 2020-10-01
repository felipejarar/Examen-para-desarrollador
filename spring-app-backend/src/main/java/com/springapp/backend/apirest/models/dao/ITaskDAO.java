package com.springapp.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.entity.Task;

public interface ITaskDAO extends CrudRepository<Task, Long>{
	
}
