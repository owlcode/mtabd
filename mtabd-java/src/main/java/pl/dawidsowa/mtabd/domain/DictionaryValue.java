package pl.dawidsowa.mtabd.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "DictionaryValues")
public class DictionaryValue {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @ManyToOne
    private Dictionary dict;

    @ManyToOne
    private Translation translation;

    private String name;

    private String longName;
}
