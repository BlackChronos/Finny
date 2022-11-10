package com.example.finny_backend.Models;

import javax.persistence.*;

@Entity
public class Tag {
    
    @Id
    @GeneratedValue
    private long id;
    
    @Column
    private String content;
    
    public Tag(long id, String content) {
        this.id = id;
        this.content = content;
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
}
