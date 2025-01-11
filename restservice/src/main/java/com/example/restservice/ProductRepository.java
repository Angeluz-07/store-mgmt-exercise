package com.example.restservice;

import java.util.List;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;


public interface ProductRepository extends CrudRepository<Product, UUID> {

}
/* 
// domain
@Repository
public class ProductRepositoryMem {
    List<Product> products = new ArrayList();

    public List<Product> findAll(){
        return this.products;
    }

    public Product findById(UUID id){
        Product result = this.products.stream()
        .filter(item -> id.equals(item.getId()))
        .findAny()
        .orElse(null);
        return result;
    }

    public Product save(Product p){
        this.products.add(p);
        return p; // todo: improve with a toString method.
    }
}
*/