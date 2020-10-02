package com.springapp.backend.apirest.models.dto;

import java.util.List;

public interface TaskProjection  {
	
	Long getId();
	String getTitle();
	String getDescription();
	String getStatus();
	List<UserProjection> getAssignees();
	
}

