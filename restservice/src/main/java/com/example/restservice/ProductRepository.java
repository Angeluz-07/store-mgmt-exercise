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
    public String save(Product p){
        this.products.add(p);
        return "Added product: " + p.name; // todo: improve with a toString method.
    }
}
