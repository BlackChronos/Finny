package com.example.finny_backend.Models;

import com.example.finny_backend.MyGenerator;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    
    @Id
    @GeneratedValue(generator = MyGenerator.generatorName)
    private long id;
    
    @Column
    private String firstName;
    @Column
    private String lastName;
    
    @Column
    private String phoneNumber;
    @Column
    private String email;
    
    @Column
    private String photoLink;
    
    public User() {
    }
    
    public User(long id, String firstName, String lastName, String phoneNumber, String email, String photoLink) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.photoLink = photoLink;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getPhoneNumber() {
        return phoneNumber;
    }
    
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPhotoLink() {
        return photoLink;
    }
    
    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }
}
