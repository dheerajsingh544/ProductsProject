package com.example.demo.repo;

import com.example.demo.model.Products;
import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface ProductRepo {
    public List<Products> getProduct() throws SQLException;
}
