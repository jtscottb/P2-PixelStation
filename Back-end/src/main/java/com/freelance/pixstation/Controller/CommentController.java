package com.freelance.pixstation.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freelance.pixstation.Model.Comment;
import com.freelance.pixstation.Service.CommentService;
import com.freelance.pixstation.Service.PostService;
import com.freelance.pixstation.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {
	@Autowired
	CommentService cs;
	@Autowired
	PostService ps;
	@Autowired
	UserService us;
	
	@GetMapping("/comments")
	public List<Comment> getAll(){
		return cs.findAll();
	}
	
	@GetMapping("/comments/user/{id}")
	public List<Comment> getUserComments(@PathVariable Integer id){
		return us.findById(id).getComments();
	}
	
	@GetMapping("/comments/post/{id}")
	public List<Comment> getPostComments(@PathVariable Integer id){
		return ps.findById(id).getComments();
	}
	
	@PostMapping("/comment")
	public Comment comment(@RequestParam String body, @RequestParam int user_id, @RequestParam int post_id) {
		Comment com = new Comment();
		com.setBody(body);
		com.setAuthor(us.findById(user_id));
		com.setOrigin(ps.findById(post_id));
		com.setCreated();
		cs.add(com);
		return com;
	}
	
	@GetMapping("/comment/{id}")
	public Comment getComment(@PathVariable Integer id){
		return cs.findById(id);
	}
	
	@PutMapping("/comment/{id}")
	public Comment updateComment(@PathVariable Integer id, @RequestBody Comment comment) {
		cs.update(comment);
		return cs.findById(id);
	}
	
	@DeleteMapping("/comment/{id}")
	public boolean deleteComment(@PathVariable Integer id, @RequestBody Comment comment) {
		return cs.delete(comment);
	}

}
