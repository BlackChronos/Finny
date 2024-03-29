package com.example.finny_backend.Controllers;


import com.example.finny_backend.Models.Post;
import com.example.finny_backend.Models.Tag;
import com.example.finny_backend.Models.User;
import com.example.finny_backend.Repos.PostRepo;
import com.example.finny_backend.Repos.UserRepo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PostController {
    
    @Autowired
    private PostRepo postRepo;
    
    @GetMapping("/posts")
    public List<Post> getPosts(@RequestParam(defaultValue = "25") int limit,
                               @RequestParam(defaultValue = "0") int offset) {
        return postRepo.findAll(PageRequest.of(offset, limit,
                Sort.by(Sort.Order.desc("date")))).getContent();
    }
    
    @GetMapping("/posts/tags")
    @JsonIgnoreProperties("tags")
    public List<Post> getPostsByTag(@RequestParam(defaultValue = "25") int limit,
                                    @RequestParam(defaultValue = "0") int offset,
                                    @RequestParam(defaultValue = "0") int tag) {
        
        return postRepo.findAllByTagsPage(PageRequest.of(offset, limit,
                Sort.by(Sort.Order.desc("date"))), tag);
    }
    @GetMapping("/posts/tags/count")
    @JsonIgnoreProperties("tags")
    public int getPostsByTag(@RequestParam(defaultValue = "0") int tag) {
        
        return postRepo.findAllByTagsLength(tag);
    }
    
    @GetMapping("/posts/count")
    public long getPostsCount() {
        return postRepo.count();
    }
    
    @GetMapping("/posts/{id}")
    @ResponseBody
    public Post getPostById(@PathVariable long id) {
        return postRepo.findById(id).isPresent()
                ? postRepo.findById(id).get()
                : null;
    }
    
    
//    @GetMapping("/posts")
//    public List<Post> getPosts(@RequestParam(defaultValue = "25") int limit,
//                               @RequestParam(defaultValue = "0") int offset) {
//        return postRepo.findAll(PageRequest.of(offset, limit,
//                Sort.by(Sort.Order.desc("date")))).getContent();
//    }
    
    
}