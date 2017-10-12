package pl.dawidsowa.mtabd.domain;

import lombok.Data;
import org.hibernate.annotations.Type;
import org.joda.money.BigMoney;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
    @SequenceGenerator(name = "hibernate_sequence", sequenceName = "hibernate_sequence")
    private Long id;

    @NotNull
    private String name;

    private String description;

    @Type(type = "org.jadira.usertype.moneyandcurrency.joda.PersistentMoneyAmount",
          parameters = {@org.hibernate.annotations.Parameter(name = "currencyCode", value = "USD")})
    private BigMoney price;
}
