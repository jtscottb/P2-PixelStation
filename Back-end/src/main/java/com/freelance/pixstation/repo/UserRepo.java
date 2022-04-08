package com.freelance.pixstation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.freelance.pixstation.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	public User findByUsername(String username);

	@Query(nativeQuery = true, value="SELECT * FROM users ORDER BY random() LIMIT 1")
	public User findByRandom();
}
