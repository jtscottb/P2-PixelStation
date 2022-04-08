package com.freelance.pixstation.Controller;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelance.pixstation.Model.User;
import com.freelance.pixstation.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	UserService us;

	User currUser = null;
	boolean loggedIn = false;
	
	@GetMapping("/users")
	public List<User> getAll(){
		return us.findAll();
	}

	@GetMapping("/users/rand")
	public User getRand(){
		return us.randUser();
	}
	
	@GetMapping("/users/{id}")
	public User getbyId(@PathVariable Integer id){
		return us.findById(id);
	}
	
	@PutMapping("/users/{id}")
	public User updateUser(@PathVariable Integer id, @RequestBody User user) {
		us.update(user);
		return us.findById(id);
	}
	
	@DeleteMapping("users/{id}")
	public boolean deleteUser(@PathVariable Integer id) {
		return us.delete(id);
	}
	
	@GetMapping("/login")
	public User login(@RequestParam String username, @RequestParam String password) {
		try {
			User user = us.findByUsername(username);
			if(user.getPassword().equals(password)) {
				currUser = user;
				loggedIn = true;
				return user;
			}else {
				return null;
			}
		}catch(EntityNotFoundException e) {
			return null;
		}
	}

	@GetMapping("/currentUser")
	public User currUser(){
		return currUser;
	}

	@GetMapping("/logout")
	public void logout(){
		currUser = null;
		loggedIn = false;
	}
	
	@GetMapping("/loggedIn")
	public boolean isLoggedIn(){
		return loggedIn;
	}
	
	@PostMapping("/register")
	public User register(@RequestParam String username, @RequestParam String password, @RequestParam String fname,
			@RequestParam String lname, @RequestParam String email, @RequestPart Part propic) {
		try {
			User temp = us.findByUsername(username);
			if(temp != null){
				if(temp.getUsername().equals(username)){
					return null;
				}
			}
		}catch(EntityNotFoundException e) {
			//If the catch block happens, username not taken
		}
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
		user.setfName(fname);
		user.setlName(lname);
		user.setEmail(email);
		user.setisAdmin(false);
		Part pic = propic;
		byte[] img = new byte[(int)pic.getSize()];
		try {
			pic.getInputStream().read(img);
		} catch (IOException e) {
			e.printStackTrace();
		}
		user.setProPic(img);
		us.save(user);
		return user;
	}
	
	@GetMapping(value = "/propic/{id}", produces=MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] picture(@PathVariable int id) {
		return us.findById(id).getProPic();
	}
}