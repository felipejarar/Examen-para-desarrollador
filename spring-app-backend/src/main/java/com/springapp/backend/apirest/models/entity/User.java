package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table(name ="users")
public class User implements Serializable{

	// Identifier of the user
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	// User's tasks (as an assignee of the task)
	@ManyToMany(targetEntity = Task.class, fetch = FetchType.LAZY, mappedBy = "assignees")
	private Set<Task> tasks;
	
	// An user can view or manage many boards
	@OneToMany(targetEntity = BoardCollaboratorEnrollment.class, mappedBy="collaborator")
	private Set<BoardCollaboratorEnrollment> boardEnrollments;
	
	// Username of the user
	@NotNull
	@Size(min=4, max=128)
	private String username;
	
	// Password of the user
	@NotNull
	@Size(max=128)
	private String password;
	
	// Date of creation of the user
	@Column(name="created_at", unique=true)
	@Temporal(TemporalType.DATE)
	private Date createAt;
	
	// Visibility of the user
    @Column(columnDefinition = "boolean default true")
	private Boolean isActive;

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
