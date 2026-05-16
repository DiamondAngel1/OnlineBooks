package org.example.mappers;

import org.example.dto.BookItemDTO;
import org.example.entities.Book;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface BookMapper {
    BookItemDTO toDTO(Book entity);
}
