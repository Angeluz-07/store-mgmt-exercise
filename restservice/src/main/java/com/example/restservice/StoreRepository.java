package com.example.restservice;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;


// domain
@Repository
public class StoreRepository {
    List<Store> stores = new ArrayList();

    public List<Store> findAll(){
        return this.stores;
    }
    
    public Store save(Store s){
        this.stores.add(s);
        return s; // todo: improve with a toString method.
    }
}
