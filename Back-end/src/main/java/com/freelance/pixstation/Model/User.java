package com.freelance.pixstation.Model;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer user_id;
	@Column
	private String username;
	@Column
	private String password;
	@Column(name = "f_name")
	private String fname;
	@Column(name = "l_name")
	private String lname;
	@Column
	private String email;
	@Column
	@JsonIgnore
	private byte[] proPic;
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy ="poster")
	private List<Post> posts;
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy ="author")
	private List<Comment> comments;
	
	public User() {
		
	}

	public User(Integer user_id, String username, String password, String fname, String lname, String email,
			byte[] proPic, List<Post> posts, List<Comment> comments) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.proPic = proPic;
		this.posts = posts;
		this.comments = comments;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getfName() {
		return fname;
	}

	public void setfName(String fName) {
		this.fname = fName;
	}

	public String getlName() {
		return lname;
	}

	public void setlName(String lName) {
		this.lname = lName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getProPic() {
		return proPic;
	}

	public void setProPic(byte[] proPic) {
		this.proPic = proPic;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", password=" + password + ", fName=" + fname
				+ ", lName=" + lname + ", email=" + email + ", proPic=" + Arrays.toString(proPic) + ", posts=" + posts
				+ ", comments=" + comments + "]";
	}

}
