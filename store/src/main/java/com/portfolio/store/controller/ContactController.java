package com.portfolio.store.controller;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.portfolio.store.dto.ProductDto;
import com.portfolio.store.entity.Product;
import com.portfolio.store.repository.ProductRepository;
import com.portfolio.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
@JsonPropertyOrder({"productId","name","description","price","popularity","imageUrl","createdAt"})
public class ProductController {

    private final IProductService iProductService;

//    We do not need the below block, since @RequiredArgsConstructor will implement this
//    @Autowired
//    public ProductController(IProductService iProductService){
//
//        this.iProductService = iProductService;
//    }

    @GetMapping
    public List<ProductDto> getProducts() throws InterruptedException {
        List<ProductDto> productList = iProductService.getProducts();
        return productList;
    }
}
