package com.freelance.pixstation.repo;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.freelance.pixstation.Model.Post;
import com.freelance.pixstation.Model.User;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer>{
   public List<Post> findByPoster(User poster, Pageable pageable);

    default public List<Post> findTop3ByPoster(User poster){return findByPoster(poster, PageRequest.of(0,3));}
}
