package com.example.demo.repo;

import com.example.demo.model.Products;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface SingleProductRepo {
    public Products getProduct(Integer pid) throws SQLException;
    public String deleteProduct(Integer pid) throws SQLException;
    public void addProduct(Products products) throws SQLException;
    public void updateProduct(Products products)throws  SQLException;
}
