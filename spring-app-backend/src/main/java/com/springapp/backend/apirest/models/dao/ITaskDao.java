package com.springapp.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.dto.TaskEntry;
import com.springapp.backend.apirest.models.entity.Task;

public interface ITaskDao extends CrudRepository<Task, Long>{

	/**
	@Query( value = "SELECT "
			+ "t.id AS id, "
			+ "t.title AS title, "
			+ "t.description AS description, "
			+ "GROUP_CONCAT(u.id SEPARATOR ';') AS groupAssigneesId, "
			+ "GROUP_CONCAT(u.username SEPARATOR ';') AS groupAssigneesUsername, "
			+ "t.status AS status "
			+ "FROM tasks t "
			+ "LEFT OUTER JOIN task_assignees ta ON t.id = ta.task_id "
			+ "LEFT OUTER JOIN users u ON ta.user_id = u.id "
			+ "GROUP BY t.id;", nativeQuery = true)
	List<Tuple> findAllTaskEntries();
	//List<TaskEntry> findAllTaskEntries();
	 * 
	 */
}
