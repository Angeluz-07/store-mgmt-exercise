package com.example.restservice;

import java.util.List;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Repository;

import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Stock, UUID> {}

/* 
// domain
@Repository
public class StockRepositoryMem {
    List<Stock> stocks = new ArrayList();

    public List<Stock> findAll(){
        return this.stocks;
    }
    
    public Stock save(Stock s){
        this.stocks.add(s);
        return s; // todo: improve with a toString method.
    }

    public Stock findById(UUID id){
        Stock result = this.stocks.stream()
        .filter(item -> id.equals(item.getId()))
        .findAny()
        .orElse(null);
        return result;
    }

}
*/