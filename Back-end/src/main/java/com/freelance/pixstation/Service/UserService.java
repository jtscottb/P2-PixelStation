package com.freelance.pixstation.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelance.pixstation.Model.User;
import com.freelance.pixstation.repo.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo ur;
	
	public List<User> findAll(){
		return ur.findAll();
	}
	
	public User findById(int id) {
		return ur.getById(id);
	}
	
	public User findByUsername(String username) {
		return ur.findByUsername(username);
	}
	
	public void save(User user) {
		ur.save(user);
	}
	
	public void update(User user) {
		ur.save(user);
	}
	
	public boolean delete(int id) {
		ur.delete(ur.getById(id));
		return !ur.existsById(id);
	}

	public User randUser(){
		return ur.findByRandom();
	}
	 
}
