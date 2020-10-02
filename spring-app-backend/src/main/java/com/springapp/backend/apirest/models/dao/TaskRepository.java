package com.springapp.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.entity.Task;
import com.springapp.backend.apirest.models.dto.TaskProjection;

public interface TaskRepository extends CrudRepository<Task, Long>{
	
	List<TaskProjection> findAllProjectedBy();


}
