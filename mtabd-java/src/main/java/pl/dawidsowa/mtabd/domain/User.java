package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @NotNull
    @Column(unique = true)
    private String username;

    private String firstName;

    private String lastName;

    @Email
    private String email;

    private LocalDateTime birth;

    @CreatedDate
    private LocalDateTime createdAt;

}
