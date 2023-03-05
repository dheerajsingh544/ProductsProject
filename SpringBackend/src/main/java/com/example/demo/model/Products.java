package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="productdata")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Products {
    @Id
    private Integer Pid;
    private String name;
    private String heading;
    private String description;
    private String expiryDate;
    private Integer stock;
    private String  url;
}
