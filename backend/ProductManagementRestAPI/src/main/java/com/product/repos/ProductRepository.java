package com.product.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
