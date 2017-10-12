package pl.dawidsowa.mtabd.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "dictionaries")
public class Dictionary {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    private String name;
}
