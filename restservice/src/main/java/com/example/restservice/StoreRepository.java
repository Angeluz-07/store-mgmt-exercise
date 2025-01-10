package com.example.restservice;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;
import java.util.UUID;


// domain
@Repository
public class StoreRepository {
    List<Store> stores = new ArrayList();

    public List<Store> findAll(){
        return this.stores;
    }

    public Store findById(UUID id){
        Store result = this.stores.stream()
        .filter(item -> id.equals(item.getId()))
        .findAny()
        .orElse(null);
        return result;
    }

    public Store save(Store s){
        this.stores.add(s);
        return s; // todo: improve with a toString method.
    }
}
