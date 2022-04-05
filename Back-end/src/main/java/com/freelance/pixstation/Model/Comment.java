package com.freelance.pixstation.Model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="comments")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Comment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer com_id;
	@Column
	private String body;
	@ManyToOne
	@JoinColumn(name="user_id")
	private User author;
	@ManyToOne
	@JoinColumn(name="poster_id")
	private Post origin;
	@Column
	private LocalDateTime created;
	
	public Comment() {
		
	}

	public Comment(Integer com_id, String body, User author, Post origin, LocalDateTime created) {
		super();
		this.com_id = com_id;
		this.body = body;
		this.author = author;
		this.origin = origin;
		this.created = created;
	}

	public Integer getCom_id() {
		return com_id;
	}

	public void setCom_id(Integer com_id) {
		this.com_id = com_id;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}

	public Post getOrigin() {
		return origin;
	}

	public void setOrigin(Post origin) {
		this.origin = origin;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}
	
	public void setCreated() {
		this.created = LocalDateTime.now();
	}

	@Override
	public String toString() {
		return "Comment [com_id=" + com_id + ", body=" + body + ", author=" + author + ", origin=" + origin
				+ ", created=" + created + "]";
	}

}
