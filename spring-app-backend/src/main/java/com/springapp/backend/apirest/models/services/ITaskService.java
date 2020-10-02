package com.springapp.backend.apirest.models.services;

import java.util.List;

import com.springapp.backend.apirest.models.entity.Task;

public interface ITaskService {
		
	// Find all Tasks
	public List<Task> findAll();
	
	// Find task by id
	public Task findById(Long id);
	
	// save Task
	public Task save(Task t);
	
	// delete by ID
	public void deleteById(Long id);

	
}
