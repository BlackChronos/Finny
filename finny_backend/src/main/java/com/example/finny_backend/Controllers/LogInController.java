package com.example.finny_backend.Controllers;

import com.example.finny_backend.Exceptions.ResourceNotFoundException;
import com.example.finny_backend.Models.LogInData;
import com.example.finny_backend.Models.User;
import com.example.finny_backend.Repos.LogInDataRepo;
import com.example.finny_backend.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class LogInController {
    
    @Autowired
    private LogInDataRepo logInDataRepo;
    
    @Autowired
    private UserRepo userRepo;
    
    @GetMapping("/login")
    public LogInData getLogInData(@RequestParam String email,
                                  @RequestParam String password){
        return logInDataRepo.findLogInDataByEmailAndPassword(email, password);
    }
    
    
    @PostMapping("/users/{userId}/register")
    public ResponseEntity<LogInData> createLogInData(@PathVariable(value = "userId") Long userId,
                                                         @RequestBody LogInData logInData) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Tutorial with id = " + userId));
        
        logInData.setUser(user);
        LogInData details = logInDataRepo.save(logInData);
        
        return new ResponseEntity<>(details, HttpStatus.CREATED);
    }
    
    @PostMapping("register")
    public ResponseEntity<LogInData> createUser(@RequestBody LogInData logInData){
        User _user = userRepo.save(new User(logInData.getUser().getFirstName(), logInData.getUser().getLastName(),
                logInData.getUser().getPhoneNumber(), logInData.getUser().getPhotoLink(), logInData.getUser().getPosts()));
        logInData.setUser(_user);
        LogInData _logInData = logInDataRepo.save(logInData);
        return new ResponseEntity<>(_logInData, HttpStatus.CREATED);
    }
    
}