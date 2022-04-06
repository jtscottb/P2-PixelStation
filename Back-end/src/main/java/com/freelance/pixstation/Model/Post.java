package com.freelance.pixstation.Model;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="posts")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer post_id;
	@Column
	private String title;
	@Column
	@JsonIgnore
	private byte[] img;
	@ManyToOne
	@JoinColumn(name="user_id")
	private User poster;
	@Column
	private String descript;
	@Column
	private Integer likes;
	@Column
	private Integer dislikes;
	@Column
	private LocalDateTime posted;
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy ="origin")
	private List<Comment> comments;
	
	public Post() {

	}

	public Post(Integer post_id, String title, byte[] img, User poster, String descript, Integer likes,
			Integer dislikes, LocalDateTime posted, List<Comment> comments) {
		super();
		this.post_id = post_id;
		this.title = title;
		this.img = img;
		this.poster = poster;
		this.descript = descript;
		this.likes = likes;
		this.dislikes = dislikes;
		this.posted = posted;
		this.comments = comments;
	}

	public Integer getPost_id() {
		return post_id;
	}

	public void setPost_id(Integer post_id) {
		this.post_id = post_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public User getPoster() {
		return poster;
	}

	public void setPoster(User poster) {
		this.poster = poster;
	}

	public String getDescript() {
		return descript;
	}

	public void setDescript(String descript) {
		this.descript = descript;
	}

	public Integer getLikes() {
		return likes;
	}

	public void setLikes(Integer likes) {
		this.likes = likes;
	}

	public Integer getDislikes() {
		return dislikes;
	}

	public void setDislikes(Integer dislikes) {
		this.dislikes = dislikes;
	}

	public LocalDateTime getPosted() {
		return posted;
	}

	public void setPosted(LocalDateTime posted) {
		this.posted = posted;
	}
	
	public void setPosted() {
		this.posted = LocalDateTime.now();
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Post [post_id=" + post_id + ", title=" + title + ", img=" + Arrays.toString(img) + ", poster=" + poster
				+ ", descript=" + descript + ", likes=" + likes + ", dislikes=" + dislikes + ", posted=" + posted
				+ ", comments=" + comments + "]";
	}
	
}
