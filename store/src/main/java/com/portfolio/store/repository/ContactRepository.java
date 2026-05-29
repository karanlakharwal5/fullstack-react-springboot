package com.portfolio.store.repository;

import com.portfolio.store.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //Optional, since we are extending JpaRepository, Spring will automatically create a Bean for Product Repository class
public interface ProductRepository extends JpaRepository<Product, Long> {
}
