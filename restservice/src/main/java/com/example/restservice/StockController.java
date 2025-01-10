package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


// controller
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class StockController {
    
    private final StockRepository repository;

    StockController(StockRepository repository){
        this.repository = repository;
    }

    @GetMapping("/stocks")
    List<Stock> all() {
        return repository.findAll();
    }

    @PostMapping("/stocks")
    Stock newStock(@RequestBody Stock newStock) {
        return repository.save(newStock);
    }
}
