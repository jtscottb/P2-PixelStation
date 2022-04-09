package com.freelance.pixstation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.freelance.pixstation.Model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer>{

    @Query(nativeQuery = true, value ="SELECT * FROM posts WHERE user_id=:featured_id LIMIT 3")
    public List<Post> findTop3ByFeatured(@Param("featured_id") int featured_id);

    @Query(nativeQuery = true, value="SELECT * FROM posts ORDER BY random() LIMIT 20")
    public List<Post> findRandomPosts();
}
