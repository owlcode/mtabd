package pl.dawidsowa.mtabd.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UserAddDTO {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birth;
}
