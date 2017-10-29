package pl.dawidsowa.mtabd.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public interface UserDTO {
    Long getId();
    String getUsername();
    String getFirstName();
    String getLastName();
    String getEmail();
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime getBirth();
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime getCreatedAt();
}
