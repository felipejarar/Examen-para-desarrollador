package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "board_collaborators")
@IdClass(BoardCollaboratorId.class)
public class BoardCollaboratorEnrollment implements Serializable {

	public static enum AccessPermission{
		OWNERSHIP_ACCESS,	
		READ_WRITE_ACCESS,	
		READ_ACCESS,
		ACCESS_DENIED
	}
	
	// Board Reference
	@Id
	@ManyToOne(targetEntity = Board.class)
	@JoinColumn(name="fk_board", referencedColumnName="id")
	private Board board;
	
	// User (Collaborator) Reference
	@Id
	@ManyToOne(targetEntity = User.class)
	@JoinColumn(name="fk_user", referencedColumnName="id")
	private User collaborator;
	
	// User's access permission
	@Column(name="access_permission")
	@Enumerated(EnumType.STRING)
	private AccessPermission accessPermission;

	// Date of creation
	@Column(name="created_at")
	@Temporal(TemporalType.DATE)
	private Date createdAt;
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;



	
}
