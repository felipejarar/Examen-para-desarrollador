package com.springapp.backend.apirest.models.dto;

import java.io.Serializable;

public class TaskEntry implements Serializable{

	private Long id;
	private String title;
	private String description;
	private String groupAssigneesId;
	private String groupAssigneesUsername;
	private String status;
	
	public TaskEntry(Long id, String title, String description, String groupAssigneesId, String groupAssigneesUsername, String status) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.groupAssigneesId = groupAssigneesId;
		this.groupAssigneesUsername = groupAssigneesUsername;
		this.status = status;
	}
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getGroupAssigneesId() {
		return groupAssigneesId;
	}


	public void setGroupAssigneesId(String groupAssigneesId) {
		this.groupAssigneesId = groupAssigneesId;
	}


	public String getGroupAssigneesUsername() {
		return groupAssigneesUsername;
	}


	public void setGroupAssigneesUsername(String groupAssigneesUsername) {
		this.groupAssigneesUsername = groupAssigneesUsername;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
