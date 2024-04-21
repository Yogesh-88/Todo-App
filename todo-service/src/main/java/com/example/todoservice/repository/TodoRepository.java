package com.example.todoservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todoservice.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
  public List<Todo> findByUsername(String username);
}
