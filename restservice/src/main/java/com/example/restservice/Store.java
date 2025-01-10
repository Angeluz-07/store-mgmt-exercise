package com.example.restservice;
import java.util.UUID; 

// domain
public class Store {
    UUID id;
    String name;

    public Store(String name) {
        this.name = name;
        this.id= UUID.randomUUID();
    }

    
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public UUID getId() {
        return this.id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Store{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            "}";
    }

}