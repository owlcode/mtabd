package pl.dawidsowa.mtabd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.dawidsowa.mtabd.domain.Message;
import pl.dawidsowa.mtabd.domain.User;

public interface MessageRepository extends JpaRepository<Message, Long> {
    void deleteAllByUser(User user);
}
