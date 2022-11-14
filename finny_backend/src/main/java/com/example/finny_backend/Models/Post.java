package com.example.finny_backend.Models;

import com.example.finny_backend.MyGenerator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Set;
import java.util.UUID;

@Entity
public class Post {
    
    @Id
//    @GenericGenerator(name = "MyGenerator.generatorName",
//                      strategy = "com.example.finny_backend.MyGenerator.java")
//    @GeneratedValue(generator = MyGenerator.generatorName)
    private long id = Math.abs(UUID.randomUUID().getLeastSignificantBits());
    
    @Column
    private String title;
    @Column
    private String description;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnoreProperties({"posts","phoneNumber","logInData"})
    private User author;
    
    @Column
    private Timestamp date;
    
    @Column
    private String photoLink;
    
    @ManyToMany
    @JoinTable(
            name = "tag_post",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    @JsonIgnoreProperties("posts")
    private Set<Tag> tags;
    
    
    public Post(long id, String title, String description, User author, Timestamp date, String photoLink, Set<Tag> tags) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = date;
        this.photoLink = photoLink;
        this.tags = tags;
    }
    
    public Post() {
    
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public User getAuthor() {
        return author;
    }
    
    public void setAuthor(User author) {
        this.author = author;
    }
    
    public Timestamp getDate() {
        return date;
    }
    
    public void setDate(Timestamp date) {
        this.date = date;
    }
    
    public String getPhotoLink() {
        return photoLink;
    }
    
    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }
    
    public Set<Tag> getTags() {
        return tags;
    }
    
    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    
    
}
