package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID; 



// controller
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {
    
    private final ProductRepository repository;

    ProductController(ProductRepository repository){
        this.repository = repository;
    }

    @GetMapping("/products")
    Iterable<Product> all() {
        return repository.findAll();
    }

    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        newProduct.setId(UUID.randomUUID());
        return repository.save(newProduct);
    }
}
