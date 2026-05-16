package org.example.controllers;

import java.util.List;

import org.example.dto.BookItemDTO;
import org.example.services.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
@Tag(name = "Books", description = "Керування книгами")
@CrossOrigin(origins = "http://localhost:5174")
public class BookController {
    private final BookService bookService;

    @RequestMapping("/all")
    public ResponseEntity<List<BookItemDTO>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }
}
