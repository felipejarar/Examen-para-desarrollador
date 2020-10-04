package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name="tasks")
public class Task implements Serializable{
	
	public static enum Status{
		TO_DO,
		IN_PROGRESS,
		DONE
	}

	// Identifier of the task
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	// Task's Board	(Board contains a list of tasks)
	@ManyToOne(targetEntity = Board.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_board")
	private Board board;
	
	// Task's Assignees
	@ManyToMany(targetEntity = User.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "task_assignees",
		joinColumns = @JoinColumn(name = "fk_task", referencedColumnName = "id"),
		inverseJoinColumns = @JoinColumn(name ="fk_user", referencedColumnName = "id"))
	private Set<User> assignees;	

	// Title of the task
	@NotEmpty
	@Size(max=128)
	private String title;
	
	// Description of the task
	@Size(max=1024)
    @Column(columnDefinition = "varchar(1024) default ''")
	private String description;
	
	// Status of the task
	@Enumerated(EnumType.STRING)
	private Status status;
	
	// Date of creation of the task
	@Column(name="created_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;	
	
	// Visibility of the task 
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

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
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
