package com.example.demo.repo;

import com.example.demo.model.Products;
import com.example.demo.model.Setting;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface SettingRepo {
    public void setSetting(Setting setting) throws SQLException;

    abstract Setting getSetting(Integer id) throws SQLException;
}
