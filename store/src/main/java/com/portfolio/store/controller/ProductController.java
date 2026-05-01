package com.portfolio.store.controller;

import com.portfolio.store.entity.Product;
import com.portfolio.store.repository.ProductRepository;
import com.portfolio.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final IProductService iProductService;

//    We do not need the below block, since @RequiredArgsConstructor will implement this
//    @Autowired
//    public ProductController(IProductService iProductService){
//
//        this.iProductService = iProductService;
//    }

    @GetMapping
    public List<Product> getProducts() {
        List<Product> productList = iProductService.getProducts();
        return productList;
    }
}
