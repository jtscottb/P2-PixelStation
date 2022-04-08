package com.freelance.pixstation.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelance.pixstation.Model.Post;
import com.freelance.pixstation.repo.PostRepo;

@Service
public class PostService {
	@Autowired
	PostRepo pr;
	
	public List<Post> findAll(){
		return pr.findAll();
	}
	
	public Post findById(int id) {
		return pr.getById(id);
	}
	
	public void save(Post post) {
		pr.save(post);
	}
	
	public void update(Post post) {
		pr.save(post);
	}
	
	public boolean delete(int id) {
		pr.delete(pr.getById(id));
		return !pr.existsById(id);
	}

	public List<Post> randomPosts(){
		return pr.findRandomPosts();
	}
}
