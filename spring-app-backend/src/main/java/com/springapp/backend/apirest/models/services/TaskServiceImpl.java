package com.springapp.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.springapp.backend.apirest.models.entity.Task;
import com.springapp.backend.apirest.models.dao.ITaskDAO;

public class TaskServiceImpl implements ITaskService{
	
	@Autowired
	private ITaskDAO taskDAO;
	
	@Override
	public List<Task> findAll() {
		return (List<Task>) taskDAO.findAll();
	}

	@Override
	public Task save(Task t) {
		return taskDAO.save(t);
	}

	@Override
	public Task update(Task t) {
		return taskDAO.save(t);
	}

	@Override
	public void deleteById(Long id) {
		taskDAO.deleteById(id);
	}

}
