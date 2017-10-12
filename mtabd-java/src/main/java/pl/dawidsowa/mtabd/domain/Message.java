package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @ManyToOne
    private User user;

    private String userAgent;

    private String ipv4;

    @NotNull
    private String text;

    @CreatedDate
    private LocalDateTime createdAt;

}
