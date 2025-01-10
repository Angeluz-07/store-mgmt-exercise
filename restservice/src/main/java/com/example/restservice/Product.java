package com.example.restservice;

import java.util.UUID; 

// domain
public class Product {
    UUID id;
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        this.id = UUID.randomUUID(); 
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name ;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public UUID getId() {
        return this.id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Product{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", price='" + getPrice() + "'" +
            "}";
    }

}
