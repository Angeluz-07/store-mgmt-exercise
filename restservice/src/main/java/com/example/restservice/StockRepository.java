package com.example.restservice;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;


// domain
@Repository
public class StockRepository {
    List<Stock> stocks = new ArrayList();

    public List<Stock> findAll(){
        return this.stocks;
    }
    
    public Stock save(Stock s){
        this.stocks.add(s);
        return s; // todo: improve with a toString method.
    }
}
