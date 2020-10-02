package com.springapp.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springapp.backend.apirest.models.dao.UserRepository;
import com.springapp.backend.apirest.models.dto.UserProjection;
import com.springapp.backend.apirest.models.entity.User;

@Service 
public class UserServiceImpl implements IUserService{

	@Autowired
	private UserRepository userDAO;
	
	@Override
	@Transactional(readOnly = true)
	public List<UserProjection> findAllProjectedBy(){
		return userDAO.findAllProjectedBy();
	}
	
	@Override
	@Transactional(readOnly = true)
	public UserProjection findPagedProjectedByUsernameAndPassword(String username, String password){
		List<UserProjection> entries = userDAO.findPagedProjectedByUsernameAndPassword(username, password, PageRequest.of(0,1));
		return (entries != null && entries.size() == 1)? entries.get(0) : null;
	}
	
	@Override
	@Transactional(readOnly = true)
	public User findAllSortedByTaskCountDesc() {
		List<User> entries = userDAO.findAllSortedByTaskCountDesc(); 
		return (entries != null && entries.size() > 0)? entries.get(0) : null;
	}

}
