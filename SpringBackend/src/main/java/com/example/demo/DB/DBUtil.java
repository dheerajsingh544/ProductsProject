package com.example.demo.DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
    private static Connection connection=null;
    public static Connection getConnection() throws ClassNotFoundException {
        if(connection!=null){
            return connection;
        }
        else{
            String driver="com.mysql.cj.jdbc.Driver";
            String url="jdbc:mysql://@localHost:3306/dj";
            String user="root";
            String password="root";
            try {
                Class.forName(driver);
                connection= DriverManager.getConnection(url,user,password);
            } catch (ClassNotFoundException | SQLException e) {
                throw new RuntimeException(e);
            }
        }
        return connection;
    }
}
