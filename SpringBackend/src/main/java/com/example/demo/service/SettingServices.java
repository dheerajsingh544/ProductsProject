package com.example.demo.service;

import com.example.demo.DB.DBUtil;
import com.example.demo.model.Setting;
import com.example.demo.repo.SettingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class SettingServices implements SettingRepo {
    Connection connection;
    @Autowired
    static Setting settingList = new Setting();

    public SettingServices() throws SQLException, ClassNotFoundException {
        connection = DBUtil.getConnection();
    }

    @Override
    public void setSetting(Setting setting) throws SQLException {
        Integer id = setting.getId();
        Boolean allowCreate = setting.getAllowCreate();
        Boolean allowEdit = setting.getAllowEdit();
        Boolean allowProductSearch = setting.getAllowProductSearch();
        Boolean allowDelete = setting.getAllowDelete();
        String insertQuery = "update setting set allowCreate=" + allowCreate + ", allowEdit=" + allowEdit + ", allowProductSearch=" + allowProductSearch + ", allowDelete=" + allowDelete + " where id=" + id + ";";
        PreparedStatement stmt = connection.prepareStatement(insertQuery);
        stmt.executeUpdate();
        System.out.println("setting update");
    }

    @Override
    public Setting getSetting(Integer id) throws SQLException {

        PreparedStatement stmt = connection.prepareStatement("select * from setting where id=" + id);
        ResultSet rs = stmt.executeQuery();
        while (rs.next()) {
            settingList.setId(rs.getInt(1));
            settingList.setAllowCreate(rs.getBoolean(2));
            settingList.setAllowEdit(rs.getBoolean(3));
            settingList.setAllowProductSearch(rs.getBoolean(4));
            settingList.setAllowDelete(rs.getBoolean(5));
        }
        return settingList;
    }
}
