package com.example.finny_backend.Repos;

import com.example.finny_backend.Models.Post;
import com.example.finny_backend.Models.Tag;
import com.example.finny_backend.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.ArrayList;
import java.util.List;

public interface PostRepo extends PagingAndSortingRepository<Post, Long> {
    
    
    
    default List<Post> findAllByTags(int tag){
        List<Post> posts = new ArrayList<>();
        findAll(Sort.by(Sort.Order.desc("date"))).forEach(post -> {
//            System.out.println(post.getTags());
            post.getTags().stream().toList().forEach(tag1 -> {
//                System.out.println(tag1.getId() == tag);
                if(tag1.getId() == tag) {
                    posts.add(post);
                }
            });
        });
        return posts;
    }
    
    default List<Post> findAllByTagsPage(PageRequest pageRequest, int tag){
        final List<Post> posts = findAllByTags(tag);
        final int start = (int)pageRequest.getOffset();
        final int end = Math.min((start + pageRequest.getPageSize()), posts.size());
        return posts.subList(start, end);
    }
    
    default int findAllByTagsLength(int tag){
        return findAllByTags(tag).size();
    }
}