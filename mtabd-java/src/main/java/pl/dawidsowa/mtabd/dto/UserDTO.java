package pl.dawidsowa.mtabd.dto;

import java.time.LocalDateTime;

public interface UserDTO {
    Long getId();
    String getUsername();
    String getFirstName();
    String getLastName();
    String getEmail();
    LocalDateTime getBirth();
    LocalDateTime getCreatedAt();
}
