package org.example.dto;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class BookItemDTO {
    private String id;
    private String title;
    private String author;
    private String text;
    private LocalDateTime createdAt;
}





   