package com.example.finny_backend.Models;

import com.example.finny_backend.MyGenerator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonTypeId;
import com.fasterxml.jackson.annotation.JsonTypeName;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "posts", "logInData"})
public class User {
    
    @Id
//    @GeneratedValue(generator = MyGenerator.generatorName)
    private long id = Math.abs(UUID.randomUUID().getLeastSignificantBits());
    
    @Column
    private String firstName;
    @Column
    private String lastName;
    
    @Column
    private String phoneNumber;
    
    @Column
    private String photoLink;
    
    @OneToMany(mappedBy = "author", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("author")
    private Set<Post> posts;
    
    public User() {
    }
    
    public User(long id, String firstName, String lastName, String phoneNumber, String photoLink, Set<Post> posts) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.photoLink = photoLink;
        this.posts = posts;
    }
    
    public User(String firstName, String lastName, String phoneNumber, String photoLink, Set<Post> posts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.photoLink = photoLink;
        this.posts = posts;
    }
    
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
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
    
    public String getPhotoLink() {
        return photoLink;
    }
    
    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }
    
    public Set<Post> getPosts() {
        return posts;
    }
    
    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }
}
