package com.example.finny_backend.Controllers;

import com.example.finny_backend.Models.LogInData;
import com.example.finny_backend.Repos.LogInDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LogInController {
    
    @Autowired
    private LogInDataRepo logInDataRepo;
    
    @CrossOrigin
    @GetMapping("/login")
    public LogInData getTags(@RequestParam String email,
                             @RequestParam String password){
        return logInDataRepo.findLogInDataByEmailAndPassword(email, password);
    }
    
}