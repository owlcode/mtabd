package pl.dawidsowa.mtabd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.dawidsowa.mtabd.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findTopByUsername(String username);
}
