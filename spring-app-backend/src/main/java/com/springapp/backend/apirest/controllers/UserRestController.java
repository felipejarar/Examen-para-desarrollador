package com.springapp.backend.apirest.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.backend.apirest.models.dto.UserEntry;
import com.springapp.backend.apirest.models.services.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserRestController {

	@Autowired
	private IUserService userService;
	
	@GetMapping("/users")
	public ResponseEntity<?> index(){
		List<UserEntry> entries = userService.findAllIdsAndUsernames();
		return (entries == null || entries.isEmpty())?
			ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body("No username found") :
			ResponseEntity.status(HttpStatus.OK)
				.body(entries);
	}
	
@PostMapping("/authentication")
public ResponseEntity<?> authenticate(@RequestBody Map<String, String> body)
	{		
		String name = (body.containsKey("username"))? body.get("username") : "";
		String pass = (body.containsKey("password"))? body.get("password") : "";
				
		if (name.isEmpty() || pass.isEmpty()) 
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("'Username' and 'Password' are required");
		
		UserEntry entry = userService.matchUsernameAndPassword(name, pass);
		
		return (entry == null)? 
			ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body("'Username' and 'Password' do not match") :
			ResponseEntity.status(HttpStatus.OK)
				.body(entry);
	}
}
