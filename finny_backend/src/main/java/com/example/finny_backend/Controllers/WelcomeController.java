package com.example.finny_backend.Controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class WelcomeController {
    
    @GetMapping("/")
    public String welcome(){
        return "Welcome!";
    }
    
}
