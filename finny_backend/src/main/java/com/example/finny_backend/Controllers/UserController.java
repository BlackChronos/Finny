package com.example.finny_backend.Controllers;


import com.example.finny_backend.Models.User;
import com.example.finny_backend.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class UserController {
    
    @Autowired
    private UserRepo userRepo;
    
    @GetMapping("/users/{id}")
    @ResponseBody
    public User getTagById(@PathVariable long id){
        return userRepo.findById(id).isPresent()
             ? userRepo.findById(id).get()
             : null;
    }
    
    
    @PostMapping("users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User _user = userRepo.save(new User(user.getFirstName(), user.getLastName(),
                user.getPhoneNumber(), user.getPhotoLink(), user.getPosts()));
        return new ResponseEntity<>(_user, HttpStatus.CREATED);
    }
}