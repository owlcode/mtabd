package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "performers")
public class Performer {
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

    private Integer age;
}
