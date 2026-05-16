package org.example.services;

import java.util.List;
import java.util.stream.Collectors;

import org.example.dto.BookItemDTO;
import org.example.mappers.BookMapper;
import org.example.repositories.IBookRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {
    private final IBookRepository bookRepository;
    private final BookMapper bookMapper;

    public List<BookItemDTO> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(bookMapper::toDTO)
                .collect(Collectors.toList());
    }
}
