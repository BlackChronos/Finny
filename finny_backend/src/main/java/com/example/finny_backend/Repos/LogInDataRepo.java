package com.example.finny_backend.Repos;

import com.example.finny_backend.Models.LogInData;
import com.example.finny_backend.Models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface LogInDataRepo extends JpaRepository<LogInData, Long> {
    
    @Query("SELECT u FROM LogInData u WHERE u.email = ?1 and u.password = ?2")
    LogInData findLogInDataByEmailAndPassword(String email, String password);
    
}