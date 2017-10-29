package pl.dawidsowa.mtabd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.dawidsowa.mtabd.domain.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
