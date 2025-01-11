package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.UUID;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;
import java.util.stream.StreamSupport;


// controller
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class StockController {
    
    private final StockRepository repository;
    private final ProductRepository productRepository;
    private final StoreRepository storeRepository;

    public StockController(StockRepository repository, ProductRepository productRepository, StoreRepository storeRepository) {
        this.repository = repository;
        this.productRepository = productRepository;
        this.storeRepository = storeRepository;
    }
  

    @GetMapping("/stocks")
    Iterable<Stock> all(@RequestParam(required = false) String storeId) {
        Iterable<Stock> stocks;
        
        stocks = repository.findAll();
        if(storeId != null){
            //todo: add try/catch block for non-valid ids
            UUID storeIdParam = UUID.fromString(storeId);
            stocks = StreamSupport.stream(stocks.spliterator(),false)
            .filter(item -> storeIdParam.equals(item.getStoreId()))
            .collect(Collectors.toList());
        }
        
        for (Stock s:stocks){
            UUID productID = s.productId;            
            //Product p = productRepository.findById(productID).get();
            Product p = StreamSupport.stream(productRepository.findAll().spliterator(),false)
            .filter(item -> productID.equals(item.getId()))
            .findFirst()
            .orElse(null);         

            s.setProduct(p);

            UUID storeId_ = s.storeId;
            Store store = storeRepository.findById(storeId_);  
            s.setStore(store);        
        }

        return stocks;
    }

    @PostMapping("/stocks")
    Stock newStock(@RequestBody Stock newStock) {
        newStock.setId(UUID.randomUUID());//** 
        return repository.save(newStock);
    }

    @PostMapping("/stocks/{id}/substract/{value}")
    Stock replaceStock(@PathVariable String id, @PathVariable int value) {
        UUID stockId = UUID.fromString(id);
        //Stock stockToUpdate = repository.findById(stockId).get();
        Stock stockToUpdate = StreamSupport.stream(repository.findAll().spliterator(),false)
            .filter(item -> stockId.equals(item.getId()))
            .findFirst()
            .orElse(null);
        stockToUpdate.setQuantity(stockToUpdate.getQuantity()-value);
        repository.save(stockToUpdate);//when using db persistence, need to explicitlty save
        return stockToUpdate;
    }

    @PostMapping("/stocks/{id}/add/{value}")
    Stock increaseStock(@PathVariable String id, @PathVariable int value) {
        UUID stockId = UUID.fromString(id);
        //Stock stockToUpdate = repository.findById(stockId).get();
        Stock stockToUpdate = StreamSupport.stream(repository.findAll().spliterator(),false)
        .filter(item -> stockId.equals(item.getId()))
        .findFirst()
        .orElse(null);
        stockToUpdate.setQuantity(stockToUpdate.getQuantity()+value);
        repository.save(stockToUpdate);//when using db persistence, need to explicitlty save
        return stockToUpdate;
    }
}
