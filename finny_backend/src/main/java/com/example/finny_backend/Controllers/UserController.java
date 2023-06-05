package com.example.finny_backend.Controllers;


import com.example.finny_backend.Models.User;
import com.example.finny_backend.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

//Контроллер, який відповідає за взаємодію із базою данних користувачів
@CrossOrigin
@RestController
public class UserController {
    
    //Автоматична підвязка репозиторію користувачів
    @Autowired
    private UserRepo userRepo;
    
    //Знаходження користувача за його ID
    @GetMapping("/users/{id}")
    @ResponseBody
    public ResponseEntity<User> getUserById(@PathVariable long id){
        // Якщо користувача із цим ID не було знайдено
        if (userRepo.findById(id).isEmpty()) {
            //Повертаємо статус помилки
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        //Якщо користувача знайдено, повертаємо його
        User _user =  userRepo.findById(id).get();
        return new ResponseEntity<>(_user, HttpStatus.FOUND);
    }
    
    //Знаходження всіх користувачів
    @GetMapping("/users")
    @ResponseBody
    public ResponseEntity<Iterable<User>> getUsers(){
        Iterable<User> _users = userRepo.findAll();
        return new ResponseEntity<>(_users, HttpStatus.FOUND);
    }
    
    
    //Створення нового користувача
    @PostMapping("users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User _user = userRepo.save(
                new User(user.getFirstName(), user.getLastName(),
                user.getPhoneNumber(), user.getPhotoLink(), user.getPosts())
        );
        return new ResponseEntity<>(_user, HttpStatus.CREATED);
    }
    
}