package com.springapp.backend.apirest.models.services;

import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springapp.backend.apirest.models.dao.TaskRepository;
import com.springapp.backend.apirest.models.dto.TaskProjection;
import com.springapp.backend.apirest.models.entity.Task;

@Service
public class TaskServiceImpl implements ITaskService{
	
	@Autowired
	private TaskRepository taskDAO;
	
	@Override
	@Transactional(readOnly = true)
	public List<TaskProjection> findAll() {
		return (List<TaskProjection>) taskDAO.findAllProjectedBy();
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

	@Override
	public HashMap<String, Object> findAllTasks() {
		// TODO Auto-generated method stub
		return null;
	}
	
}

