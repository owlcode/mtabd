package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @NotNull
    @Column(unique = true)
    private String username;

    private String password;

    private String firstName;

    private String lastName;

    @Email
    private String email;

    private LocalDate birth;

    @CreatedDate
    private LocalDateTime createdAt;

}
