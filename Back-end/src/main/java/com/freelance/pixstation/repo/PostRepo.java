package com.freelance.pixstation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelance.pixstation.Model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer>{

}
