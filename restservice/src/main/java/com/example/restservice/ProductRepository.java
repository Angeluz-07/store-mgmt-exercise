package com.example.restservice;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;


// domain
@Repository
public class ProductRepository {
    List<Product> products = new ArrayList();

    public List<Product> findAll(){
        return this.products;
    }
    public Product save(Product p){
        this.products.add(p);
        return p; // todo: improve with a toString method.
    }
}
