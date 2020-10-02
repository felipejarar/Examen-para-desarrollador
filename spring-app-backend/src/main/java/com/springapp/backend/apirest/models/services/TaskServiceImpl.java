package com.springapp.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springapp.backend.apirest.models.dao.ITaskDao;
import com.springapp.backend.apirest.models.dto.TaskEntry;
import com.springapp.backend.apirest.models.entity.Task;

@Service
public class TaskServiceImpl implements ITaskService{
	
	@Autowired
	private ITaskDao taskDAO;

	@Override
	@Transactional(readOnly = true)
	public List<Task> findAll() {
		return (List<Task>) taskDAO.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Task findById(Long id) {
		return taskDAO.findById(id).orElse(null);
	}
	
	@Override
	@Transactional
	public Task save(Task t) {
		return taskDAO.save(t);
	}

	@Override
	@Transactional 
	public void deleteById(Long id) {
		taskDAO.deleteById(id);
	}
	
}
