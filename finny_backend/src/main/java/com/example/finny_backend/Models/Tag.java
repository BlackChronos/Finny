package com.example.finny_backend.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Tag {
    
    @Id
    @GeneratedValue
    private long id;
    
    @Column
    private String content;
    
    @ManyToMany(mappedBy = "tags")
    //    @JsonIgnoreProperties("")
    private Set<Post> posts;
    
    public Tag(long id, String content, Set<Post> posts) {
        this.id = id;
        this.content = content;
        this.posts = posts;
    }
    
    public Tag() {
    }
    
    public long getId() {
        return id;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    public Set<Post> getPosts() {
        return posts;
    }
    
    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }
}
