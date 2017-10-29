package pl.dawidsowa.mtabd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.dawidsowa.mtabd.domain.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
