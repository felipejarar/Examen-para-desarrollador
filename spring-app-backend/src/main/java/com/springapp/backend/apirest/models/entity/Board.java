package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

@Entity
@Table(name="boards")
public class Board implements Serializable{

	// Board's Identifier
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;	
	
	// Board's Tasks
	// Notes:
	// *	Unidirectional one-to-many relationship are more efficient when declared
	//		with @ManyToOne on the child entity, rather than @OneToMany on the parent entity.
	// * 	Bidirectional one-to-many relationship takes advantage of the entity state transition
	//		and dirty checking mechanism offered by JPA and Hibernate.
	@OneToMany(targetEntity = Task.class, mappedBy = "board", cascade = CascadeType.ALL )
	private Set<Task> tasks;
	
	// A board can be viewed and managed by many users (collaborators)
	@OneToMany(targetEntity = BoardCollaboratorEnrollment.class, mappedBy="board")
	private Set<User> collaborators;
	
	// Board's Name
	@Size(max=64)
    @Column(columnDefinition = "varchar(64) default ''")
	private String name;
	
	// Board's Description
	@Size(max=1024)
    @Column(columnDefinition = "varchar(1024) default ''")
	private String description;
	
	// Board's Date of creation
	@Column(name="created_at")
	@Temporal(TemporalType.DATE)
	private Date createdAt;
	
	// Board's Visibility
    @Column(columnDefinition = "boolean default true")
	private Boolean isActive;

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	public Set<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

	public Set<User> getCollaborators() {
		return collaborators;
	}

	public void setCollaborators(Set<User> collaborators) {
		this.collaborators = collaborators;
	}
	**/

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	/**
	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}
	**/

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	
}
