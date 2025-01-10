package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.UUID;

import java.util.List;


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
    List<Stock> all() {
        List<Stock> stocks = repository.findAll();
        for (Stock s:stocks){
            UUID productID = s.productId;            
            Product p = productRepository.findById(productID);
            s.setProduct(p);

            UUID storeId = s.storeId;
            Store store = storeRepository.findById(storeId);
            s.setStore(store);        
        }

        return stocks;
    }

    @PostMapping("/stocks")
    Stock newStock(@RequestBody Stock newStock) {
        return repository.save(newStock);
    }
}
