package com.example.restservice;
import java.util.UUID; 

// domain
public class Stock {
    
    UUID storeId;
    UUID productId;
    int quantity;

    Product product;
    Store store; 

    public Stock(UUID storeId, UUID productId, int quantity) {
        this.storeId = storeId;
        this.productId = productId;
        this.quantity = quantity;
    }


    public UUID getStoreId() {
        return this.storeId;
    }

    public void setStoreId(UUID storeId) {
        this.storeId = storeId;
    }

    public UUID getProductId() {
        return this.productId;
    }

    public void setProductId(UUID productId) {
        this.productId = productId;
    }
  
    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return this.product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Store getStore() {
        return this.store;
    }

    public void setStore(Store store) {
        this.store = store;
    }


    @Override
    public String toString() {
        return "Stock{" +
            " storeId='" + getStoreId() + "'" +
            ", productId='" + getProductId() + "'" +
            ", quantity='" + getQuantity() + "'" +
            "}";
    }

}