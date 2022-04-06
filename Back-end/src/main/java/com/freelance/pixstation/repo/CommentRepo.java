package com.freelance.pixstation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelance.pixstation.Model.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer>{

}
