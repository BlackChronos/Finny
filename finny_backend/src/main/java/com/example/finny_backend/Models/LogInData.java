package com.example.finny_backend.Models;

import com.example.finny_backend.MyGenerator;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class LogInData {
    @Id
    @GeneratedValue(generator = MyGenerator.generatorName)
    private long id;
    
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private long userId;
    
    public LogInData(long id, String email, String password, long userId) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userId = userId;
    }
    
    public LogInData() {
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
    
    public long getUserId() {
        return userId;
    }
    
    public void setUserId(long userId) {
        this.userId = userId;
    }
}
