package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Performer performer;

    @CreatedDate
    private LocalDateTime createdAt;

    private LocalDateTime startDate;

    private LocalDateTime finishDate;

    private String description;
}
