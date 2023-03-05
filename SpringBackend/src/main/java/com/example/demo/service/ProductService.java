package com.example.demo.service;

import com.example.demo.DB.DBUtil;
import com.example.demo.model.Products;
import com.example.demo.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements ProductRepo {

    @Autowired
    static  List<Products> productsList=new ArrayList<>();

    Connection connection;

    public ProductService() throws SQLException, ClassNotFoundException {
        connection=DBUtil.getConnection();
    }
    @Override
    public List<Products> getProduct() throws SQLException {
        productsList.clear();

        PreparedStatement stmt=connection.prepareStatement("select * from productdata");
        ResultSet rs=stmt.executeQuery();
        while(rs.next()){
            Products products=new Products();
            products.setPid(rs.getInt(1));
            products.setHeading(rs.getString(2));
            products.setDescription(rs.getString(3));
            products.setUrl(rs.getString(4));
            products.setName(rs.getString(5));
            products.setStock(rs.getInt(6));
            products.setExpiryDate(rs.getString(7));
            productsList.add(products);
        }
        return productsList;
    }
}
