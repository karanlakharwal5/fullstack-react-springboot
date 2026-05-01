package com.portfolio.store.service.impl;

import com.portfolio.store.entity.Product;
import com.portfolio.store.repository.ProductRepository;
import com.portfolio.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
