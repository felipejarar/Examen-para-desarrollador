package com.springapp.backend.apirest.models.services;

import java.util.List;

import com.springapp.backend.apirest.models.entity.Task;

public interface ITaskService {
	
	public List<Task> findAll();
	
	public Task save(Task t);
	
	public Task update(Task t);
	
	public void deleteById(Long id);
	
}
