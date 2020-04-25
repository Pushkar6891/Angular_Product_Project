package com.product.controllers;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.product.entities.Product;
import com.product.repos.ProductRepository;

@RestController
@CrossOrigin("*")
public class ProductController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

	@Autowired
	ProductRepository repository;

	@RequestMapping(value = "/products/", method = RequestMethod.GET)
	public List<Product> selectAllProducts() {
		LOGGER.info("Finding All Products");
		return repository.findAll();
	}

	@RequestMapping(value = "/products/{id}/", method = RequestMethod.GET)
	public Product selectAProduct(@PathVariable("id") int id) {
		LOGGER.info("Finding Product by id: " + id);
		Optional<Product> optionalProduct = repository.findById(id);
		if (optionalProduct.isPresent()) {
			return optionalProduct.get();
		} else {
			LOGGER.info("Product with id: " + id + " absent");
			return null;
		}
	}

	@RequestMapping(value = "/products/", method = RequestMethod.POST)
	public Product createProduct(@RequestBody Product product) {
		LOGGER.info("Product Created");
		return repository.save(product);
	}

	@RequestMapping(value = "/products/{productId}", method = RequestMethod.PUT)
	public Product updateProduct(@RequestBody Product product, @PathVariable Integer productId) {
		LOGGER.info("Product Updated");
		return repository.findById(productId).map(oldProduct -> {
			oldProduct.setPname(product.getPname());
			oldProduct.setPrice(product.getPrice());
			oldProduct.setGrade(product.getGrade());
			return repository.save(oldProduct);
		}).orElseGet(() -> {
			product.setId(productId);
			return repository.save(product);
		});
	}

	@RequestMapping(value = "/products/{id}/", method = RequestMethod.DELETE)
	public void deleteProduct(@PathVariable("id") int id) {
		LOGGER.info("Product with id: " + id + " deleted");
		repository.deleteById(id);
	}

}
