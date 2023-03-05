package com.example.demo.service;

import com.example.demo.DB.DBUtil;
import com.example.demo.model.Products;
import com.example.demo.repo.ProductRepo;
import com.example.demo.repo.SingleProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceForPid implements SingleProductRepo {
    Connection connection;
    @Autowired
    static Products productsList=new Products();

    public ProductServiceForPid() throws SQLException, ClassNotFoundException {
        connection = DBUtil.getConnection();
    }

    @Override
    public Products getProduct(Integer pid) throws SQLException {

        PreparedStatement stmt = connection.prepareStatement("select * from productdata where pid=" + pid);
        ResultSet rs = stmt.executeQuery();
        while (rs.next()) {

            productsList.setPid(rs.getInt(1));
            productsList.setHeading(rs.getString(2));
            productsList.setDescription(rs.getString(3));
            productsList.setUrl(rs.getString(4));
            productsList.setName(rs.getString(5));
            productsList.setStock(rs.getInt(6));
            productsList.setExpiryDate(rs.getString(7));
        }
        return productsList;
    }

    @Override
    public String deleteProduct(Integer pid) throws SQLException {
        PreparedStatement stmt = connection.prepareStatement("delete from productdata where pid=" + pid);
        stmt.executeUpdate();
        return "Deleted" + pid;
    }

    @Override
    public void addProduct(Products products) throws SQLException {
        Integer pid = products.getPid();
        String name = products.getName();
        String heading = products.getHeading();
        String description = products.getDescription();
        String expiryDate = products.getExpiryDate();
        Integer stock = products.getStock();
        String url = products.getUrl();
        String insertQuery = "Insert into productdata(pid,heading,description,url, name, stock,expiryDate) value(" + pid + ",'" + heading + "','" + description + "','" + url + "','" + name + "'," + stock + ",'" + expiryDate + "')";
        PreparedStatement stmt=connection.prepareStatement(insertQuery);
        stmt.executeUpdate();
        System.out.println("data added");
    }

    @Override
    public void updateProduct(Products products) throws SQLException {
        Integer pid = products.getPid();
        String name = products.getName();
        String heading = products.getHeading();
        String description = products.getDescription();
        String expiryDate = products.getExpiryDate();
        Integer stock = products.getStock();
        String url = products.getUrl();
        String insertQuery = "update productdata set heading='" + heading + "', name= '" + name + "', description='" + description + "', expiryDate='" + expiryDate + "',stock="+stock+", url='"+url+"' where pid ="+pid+";";
        PreparedStatement stmt = connection.prepareStatement(insertQuery);
        stmt.executeUpdate();
        System.out.println("product updated");
    }
}
