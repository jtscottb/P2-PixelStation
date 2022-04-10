package com.freelance.pixstation.Controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelance.pixstation.Model.Comment;
import com.freelance.pixstation.Model.Post;
import com.freelance.pixstation.Service.CommentService;
import com.freelance.pixstation.Service.PostService;
import com.freelance.pixstation.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
	@Autowired
	PostService ps;
	@Autowired
	UserService us;
	@Autowired
	CommentService cs;
	
	@GetMapping("/posts")
	public List<Post> posts() {
		return ps.findAll();
	}

	@GetMapping("/posts/rand")
	public List<Post> getRandPosts() {
		return ps.randomPosts();
	}
	
	@GetMapping("/posts/{id}")
	public List<Post> postsByUser(@PathVariable int id){
		return us.findById(id).getPosts();
	}

	@GetMapping("/posts/top/{id}")
	public List<Post> topPostsByUser(@PathVariable int id){
		return ps.Top3Posts(id);
	}
	
	@PostMapping("/post")
	public Post post(@RequestParam String title, @RequestParam String descript, @RequestPart Part photo, @RequestParam int id) {
		Post post = new Post();
		post.setTitle(title);
		post.setDescript(descript);
		post.setLikes(0);
		post.setDislikes(0);
		Part pic = photo;
		byte[] img = new byte[(int)pic.getSize()];
		try {
			pic.getInputStream().read(img);
		} catch (IOException e) {
			e.printStackTrace();
		}
		post.setImg(img);
		post.setPoster(us.findById(id));
		post.setPosted();
		ps.save(post);
		return post;
	}
	
	@PutMapping("/post/{id}")
	public Post updatePost(@PathVariable int id, @RequestParam String title, @RequestParam String descript) {
		Post post = ps.findById(id);
		post.setTitle(title);
		post.setDescript(descript);
		ps.update(post);
		return ps.findById(id);
	}
	
	@GetMapping("/post/{id}")
	public Post getPost(@PathVariable int id) {
		return ps.findById(id);
	}
	
	@DeleteMapping("/post/{id}")
	public Boolean deletePost(@PathVariable int id) {
		List<Comment> comments = ps.findById(id).getComments();
		for(Comment c: comments){
			cs.delete(c.getCom_id());
		}
		return ps.delete(id);
	}

	@GetMapping("/like/{id}")
	public void like(@PathVariable int id){
		Post temp = ps.findById(id);
		temp.setLikes(temp.getLikes()+1);
		ps.update(temp);
	}

	@GetMapping("/dislike/{id}")
	public void dislike(@PathVariable int id){
		Post temp = ps.findById(id);
		temp.setDislikes(temp.getDislikes()+1);
		ps.update(temp);
	}
	
	@GetMapping(value = "/image/{id}", produces=MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] picture(@PathVariable int id) {
		return ps.findById(id).getImg();
	}
}
