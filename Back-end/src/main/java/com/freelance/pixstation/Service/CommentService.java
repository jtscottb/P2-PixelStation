package com.freelance.pixstation.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelance.pixstation.Model.Comment;
import com.freelance.pixstation.Model.Post;
import com.freelance.pixstation.Model.User;
import com.freelance.pixstation.repo.CommentRepo;

@Service
public class CommentService {
	@Autowired
	CommentRepo cr;
	
	public List<Comment> findAll(){
		return cr.findAll();
	}

	public List<Comment> findByPost(Post post){
		return cr.findByOrigin(post);
	}

	public List<Comment> findByUser(User user){
		return cr.findByAuthor(user);
	}
	
	public Comment findById(int id){
		return cr.getById(id);
	}
	
	public void add(Comment com) {
		cr.save(com);
	}
	
	public void update(Comment com) {
		cr.save(com);
	}
	
	public boolean delete(int id) {
		cr.delete(cr.getById(id));
		return !cr.existsById(id);
	}
}
