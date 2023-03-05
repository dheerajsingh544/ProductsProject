package com.example.demo.controller;

import com.example.demo.model.Products;
import com.example.demo.model.Setting;
import com.example.demo.service.ProductService;
import com.example.demo.service.ProductServiceForPid;
import com.example.demo.service.SettingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/setting")
@CrossOrigin
public class SettingController {
    @Autowired
    private SettingServices settingServices;
    @PostMapping("/updateSetting")
    public void updateSetting(@RequestBody Setting setting) throws SQLException {
        settingServices.setSetting(setting);
    }
    @GetMapping("/getSetting")
    public Setting getSetting(@RequestParam Integer id){
        try {
            return this.settingServices.getSetting(id);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
