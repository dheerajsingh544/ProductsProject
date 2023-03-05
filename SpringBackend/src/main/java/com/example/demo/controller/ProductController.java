package com.example.demo.controller;

import com.example.demo.model.Products;
import com.example.demo.model.Setting;
import com.example.demo.model.Users;
import com.example.demo.repo.ProductRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.ProductService;
import com.example.demo.service.ProductServiceForPid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/getProduct")
    public List<Products> getProduct(){
        try {
            return this.productService.getProduct();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    @Autowired
    private ProductServiceForPid productServiceForPid;
    @CrossOrigin
    @GetMapping("/getSingleProduct")
    public Products getSingleProduct(@RequestParam Integer pid) throws SQLException {
        return productServiceForPid.getProduct(pid);
    }
    @CrossOrigin
    @GetMapping("/deleteProduct")
    public String deleteProduct(@RequestParam Integer pid) throws SQLException {
        return productServiceForPid.deleteProduct(pid);
    }


    @PostMapping("/addProduct")
    public void addProduct(@RequestBody Products products) throws SQLException {
        productServiceForPid.addProduct(products);
    }

    @PostMapping("/updateProduct")
    public void updateProduct(@RequestBody Products products) throws SQLException {
        productServiceForPid.updateProduct(products);
    }
}
