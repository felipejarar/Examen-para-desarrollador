package com.springapp.backend.apirest.models.dto;

import java.io.Serializable;

public class UserEntry implements Serializable{

	private Long id;
	private String username;
	
	public UserEntry(Long id, String username) {
		this.id = id;
		this.username = username;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
