package com.example.restservice;

// domain
public class Store {
    String name;

    public Store(String name) {
        this.name = name;
    }

    
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Store{" +
            " name='" + getName() + "'" +
            "}";
    }

}