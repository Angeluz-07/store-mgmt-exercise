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
public class StoreController {
    
    private final StoreRepository repository;

    StoreController(StoreRepository repository){
        this.repository = repository;
    }

    @GetMapping("/stores")
    List<Store> all() {
        return repository.findAll();
    }
}
