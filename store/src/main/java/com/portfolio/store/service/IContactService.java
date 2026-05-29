package com.portfolio.store.service;

import com.portfolio.store.dto.ProductDto;
import com.portfolio.store.entity.Product;

import java.util.List;

public interface IProductService {

    List<ProductDto> getProducts();
}
