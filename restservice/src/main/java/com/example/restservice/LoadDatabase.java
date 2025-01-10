package com.example.restservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(ProductRepository repository, StoreRepository storeRepo) {

    return args -> {
      log.info("Preloading " + repository.save(new Product("Atun", 1.5)));
      log.info("Preloading " + repository.save(new Product("Aceite", 2.10)));      
      log.info("Preloading " + repository.save(new Product("Colgate", 1.20)));

      log.info("Preloading " + storeRepo.save(new Store("Tienda Centro")));
      log.info("Preloading " + storeRepo.save(new Store("Tienda Norte")));
      log.info("Preloading " + storeRepo.save(new Store("Tienda Sur")));

    };
  }
}