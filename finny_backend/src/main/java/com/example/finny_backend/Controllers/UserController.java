package com.example.finny_backend.Controllers;


import com.example.finny_backend.Models.Tag;
import com.example.finny_backend.Models.User;
import com.example.finny_backend.Repos.TagRepo;
import com.example.finny_backend.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    
    @Autowired
    private UserRepo userRepo;
    
    @CrossOrigin
    @GetMapping("/users/{id}")
    @ResponseBody
    public User getTagById(@PathVariable long id){
        return userRepo.findById(id).isPresent()
             ? userRepo.findById(id).get()
             : null;
    }
    
}