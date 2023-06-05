package com.example.finny_backend.Repos;

import com.example.finny_backend.Models.Tag;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TagRepo extends PagingAndSortingRepository<Tag, Long> {
}