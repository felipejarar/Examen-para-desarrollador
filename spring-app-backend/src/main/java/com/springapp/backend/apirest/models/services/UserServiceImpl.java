package com.springapp.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springapp.backend.apirest.models.dao.IUserDao;
import com.springapp.backend.apirest.models.dto.UserEntry;

@Service 
public class UserServiceImpl implements IUserService{

	@Autowired
	private IUserDao userDAO;
	
	@Override
	@Transactional(readOnly = true)
	public List<UserEntry> findAllIdsAndUsernames(){
		return userDAO.findAllIdsAndUsernames();
	}
	
	@Override
	@Transactional(readOnly = true)
	public UserEntry matchUsernameAndPassword(String name, String pass){
		List<UserEntry> entries = userDAO.matchUsernameAndPassword(name, pass, PageRequest.of(0,1));
		return (entries != null && entries.size() == 1)? entries.get(0) : null;
	}

}
