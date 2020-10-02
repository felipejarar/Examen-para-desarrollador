package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table(name="tasks")
public class Task implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;	
	
	@NotNull
	@Size(max=128)
	private String title;
	
	@Size(max=1024)
	private String description;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
		name = "task_assignees",
		joinColumns = @JoinColumn(name = "task_id", referencedColumnName = "id"),
		inverseJoinColumns = @JoinColumn(name ="user_id", referencedColumnName = "id"))
	private Set<User> assignees;
	
	@NotNull
	@Size(max=32)
	@Column(columnDefinition = "varchar(32) default 'TODO'")
	private String status;
	
	
	@Column(name="create_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;	
	
	@NotNull
    @Column(columnDefinition = "boolean default true")
	private Boolean isActive;
	

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
	
	public Date getCreateAt() {
		return createAt;
	}
	
	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Boolean isActive() {
		return isActive;
	}

	public void setActive(Boolean isActive) {
		this.isActive = isActive;
	}


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
