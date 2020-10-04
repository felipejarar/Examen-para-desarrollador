package com.springapp.backend.apirest.models.entity;

import java.io.Serializable;

// Class required to form t he composite primary key of the BoardCollaboratorEnrollment entity
public class BoardCollaboratorId implements Serializable{
	
	private Long board;
	private Long collaborator;
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public Long getBoard() {
		return board;
	}
	
	public void setBoard(Long board) {
		this.board = board;
	}
	
	public Long getCollaborator() {
		return collaborator;
	}
	
	public void setCollaborator(Long collaborator) {
		this.collaborator = collaborator;
	}
}
