package com.product.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.entities.User;
import com.product.repos.UserRepository;

@RestController
@CrossOrigin("*")
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserRepository repository;

	@RequestMapping(value = "/users/", method = RequestMethod.GET)
	public List<User> selectAllUsers() {
		LOGGER.info("Finding All Users");
		// Way 1:
		// Iterable<User> itr = repository.findAll();
		// List<User> list = getCollectionFromIteralbe(itr);

		// Way 2:
		List<User> list = new ArrayList<>();
		repository.findAll().forEach(list::add);
		return list;
	}

	@RequestMapping(value = "/users/{uname}/", method = RequestMethod.GET)
	public @ResponseBody List<User> selectAllUserByUname(@PathVariable("uname") String uname) {
		LOGGER.info("Finding User by id: " + uname);

		// Way 1:

		// Optional<User> optionalUser = repository.findByUname(uname);
		// if (optionalUser.isPresent()) {
		// return optionalUser.get();
		// } else {
		// LOGGER.info("User with name: " + uname + " absent");
		// return null;
		// }

		// Way 2:
		// List<User> list = new ArrayList<>();
		// repository.findAll().forEach(list::add);
		// return list.stream().filter(t ->
		// t.getUname().equals(uname)).findFirst().get();

		return repository.findAllByUname(uname);
	}

	@RequestMapping(value = "/users/", method = RequestMethod.POST)
	public User createUser(@RequestBody User user) {
		LOGGER.info("User Created");
		return repository.save(user);
	}

	@RequestMapping(value = "/users/{uname}", method = RequestMethod.PUT)
	public User updateUser(@RequestBody User user, @PathVariable("uname") String uname) {
		LOGGER.info("User Updated");
		User existingUser = repository.findByUname(uname);
		if (existingUser != null) {
			existingUser.setMobile(user.getMobile());
			existingUser.setAge(user.getAge());
			existingUser.setGender(user.getGender());
			return repository.save(existingUser);
		} else {
			user.setUname(uname);
			return repository.save(user);
		}

		// return repository.findByUname(uname).map(oldUser -> {
		// oldUser.setUname(user.getUname());
		// oldUser.setMobile(user.getMobile());
		// oldUser.setAge(user.getAge());
		// oldUser.setGender(user.getGender());
		// return repository.save(oldUser);
		// }).orElseGet(() -> {
		// user.setUname(uname);
		// return repository.save(user);
		// });

	}

	@RequestMapping(value = "/users/{uname}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("uname") String uname) {
		LOGGER.info("User with name: " + uname + " deleted");
		repository.deleteByUname(uname);
	}

	public static <T> List<T> getCollectionFromIteralbe(Iterable<T> itr) {
		List<T> list = new ArrayList<T>();
		for (T t : itr)
			list.add(t);
		return list;
	}
}
