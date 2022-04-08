package com.freelance.pixstation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.freelance.pixstation.Model.Comment;
import com.freelance.pixstation.Model.Post;
import com.freelance.pixstation.Model.User;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer>{
    public List<Comment> findByOrigin(Post origin);

    public List<Comment> findByAuthor(User author);

}
