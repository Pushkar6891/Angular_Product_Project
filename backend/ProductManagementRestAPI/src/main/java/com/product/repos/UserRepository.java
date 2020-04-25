package com.product.repos;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.product.entities.User;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Integer> {

	List<User> findAllByUname(String uname);
	User findByUname(String uname);
	int deleteByUname(String uname);
}
