package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


// controller
@RestController
public class ProductController {
    
    private final ProductRepository repository;

    ProductController(ProductRepository repository){
        this.repository = repository;
    }

    @GetMapping("/products")
    List<Product> all() {
        return repository.findAll();


    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        return repository.save(newProduct);
    }
}
