package com.springapp.backend.apirest.controllers;

import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.backend.apirest.models.entity.Task;
import com.springapp.backend.apirest.models.dto.TaskProjection;
import com.springapp.backend.apirest.models.services.ITaskService;
import com.springapp.backend.apirest.models.services.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskRestController {

	@Autowired
	private ITaskService taskService;
	
	@Autowired
	private IUserService userService;
	
	// GET ALL TASKS
	@GetMapping("/tasks")
	public ResponseEntity<?> index(){
		List<TaskProjection> entries = taskService.findAll();
		return (entries == null || entries.isEmpty())?
			ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body("No task found") :
			ResponseEntity.status(HttpStatus.OK)
				.body(entries);	
	}
	
	// CREATE TASK
	@PostMapping("/tasks")
	public ResponseEntity<?> create(@RequestBody Task task){
		if (task.getAssignees() == null || task.getAssignees().size() == 0)
			task.setAssignees(new HashSet<>());
			task.getAssignees().add(userService.findAllSortedByTaskCountDesc());
		Task entry = taskService.save(task);
		return (entry == null)?
			ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body("Method failure") :
			ResponseEntity.status(HttpStatus.OK)
				.body(entry);	
	}
	
	
	@PutMapping("/tasks/{id}")
	public ResponseEntity<?> update(@RequestBody Task task, @PathVariable Long id){
		Task currentTask = taskService.findById(id);
		currentTask.setTitle(task.getTitle());
		currentTask.setDescription(task.getDescription());
		currentTask.setStatus(task.getStatus());
		currentTask.setActive(task.isActive());
		currentTask.setAssignees(task.getAssignees());
		Task entry = taskService.save(currentTask);
		return (entry == null)?
			ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body("Method failure") :
			ResponseEntity.status(HttpStatus.OK)
				.body(entry);	
	}
	
	@DeleteMapping("/tasks/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id){
		taskService.deleteById(id);
	}
	
}
