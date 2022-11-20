package com.example.finny_backend.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
public class LogInData {
    @Id
//    @GenericGenerator(name = "MyGenerator.generatorName",
//                      strategy = "com.example.finny_backend.MyGenerator.java")
//    @GeneratedValue(generator = MyGenerator.generatorName)
    @GeneratedValue
    private long id/* = Math.abs(UUID.randomUUID().getLeastSignificantBits())*/;
    
    @Column(unique = true)
    private String email;
    
    @Column
    private String password;
    
    @OneToOne
    @JoinColumn
    @JsonIgnoreProperties({"logInData", "posts"})
    private User user;
    
    
    public LogInData() {
    }
    
    public LogInData(long id, String email, String password, User user) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.user = user;
    }
    public LogInData(String email, String password, User user) {
        this.email = email;
        this.password = password;
        this.user = user;
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }
}
