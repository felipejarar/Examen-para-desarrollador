package com.springapp.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.springapp.backend.apirest.models.dto.UserProjection;
import com.springapp.backend.apirest.models.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	
	List<UserProjection> findAllProjectedBy();
	
	List<UserProjection> findPagedProjectedByUsernameAndPassword(String username, String password, Pageable pagaeable);
	
	@Query(value = "SELECT users.* FROM users LEFT JOIN task_assignees ta ON users.id = ta.user_id GROUP BY users.id ORDER BY COUNT(users.id) ASC", nativeQuery = true)
	List<User> findAllSortedByTaskCountDesc();

	
}
