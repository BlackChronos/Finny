package com.example.finny_backend.Repos;

import com.example.finny_backend.Models.Post;
import com.example.finny_backend.Models.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PostRepo extends PagingAndSortingRepository<Post, Long> {
}