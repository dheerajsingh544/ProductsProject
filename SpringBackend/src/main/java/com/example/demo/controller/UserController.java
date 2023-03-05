package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepo repo;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Users userData){
        System.out.println(userData);
       Users users=repo.findByUserId(userData.getUserId());
       if(users.getPassword().equals(userData.getPassword())){
           return ResponseEntity.ok(users);
       }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
}
