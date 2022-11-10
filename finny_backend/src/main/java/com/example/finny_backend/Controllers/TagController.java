package com.example.finny_backend.Controllers;


import com.example.finny_backend.Models.Tag;
import com.example.finny_backend.Repos.TagRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TagController {
    
    @Autowired
    private TagRepo tagRepo;
    
    @GetMapping("/tags")
    public List<Tag> getTags(@RequestParam(defaultValue = "25") int limit,
                             @RequestParam(defaultValue =  "0") int offset){
        return tagRepo.findAll(PageRequest.of(offset, limit, Sort.by("content"))).getContent();
    }
    
    @GetMapping("/tags/{id}")
    @ResponseBody
    public String getTagById(@PathVariable long id){
        return tagRepo.findById(id).isPresent()
             ? tagRepo.findById(id).get().getContent()
             : String.valueOf(id);
    }
    
    @PutMapping("/tags/{id}")
    @ResponseBody
    public String setTagById(@PathVariable long id, @RequestParam("content") String content){
        if(tagRepo.findById(id).isEmpty()) {
            return String.valueOf(id);
        }
        tagRepo.findById(id).get().setContent(content);
        return "Success";
    }
    
}