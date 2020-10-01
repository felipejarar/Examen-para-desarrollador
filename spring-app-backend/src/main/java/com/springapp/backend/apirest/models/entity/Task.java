package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

public class Task implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;	
	
	@NotNull
	@Size(max=128)
	private String title;
	
	@Size(max=1024)
	private String description;
	
	@ManyToMany
	@JoinTable(
		name = "task_assignees",
		joinColumns = @JoinColumn(name = "task_id"),
		inverseJoinColumns = @JoinColumn(name ="course_id"))
	private Set<User> assignees;
	
	@NotNull
	@Size(max=32)
	private String status;
	
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

	public Set<User> getAssignees() {
		return assignees;
	}

	public void setAssignees(Set<User> assignees) {
		this.assignees = assignees;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
