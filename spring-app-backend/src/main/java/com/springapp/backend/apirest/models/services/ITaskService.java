package com.springapp.backend.apirest.models.services;

import java.util.HashMap;
import java.util.List;

import com.springapp.backend.apirest.models.dto.TaskProjection;
import com.springapp.backend.apirest.models.entity.Task;

public interface ITaskService {
		
	// Find all Tasks
	public List<TaskProjection> findAll();
	
	// Find task by id
	public Task findById(Long id);
	
	// save Task
	public Task save(Task t);
	
	// delete by ID
	public void deleteById(Long id);
	
	// Find all Tasks for me
	public HashMap<String, Object> findAllTasks();
	

	
}
