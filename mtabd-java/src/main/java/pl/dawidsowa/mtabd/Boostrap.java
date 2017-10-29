package pl.dawidsowa.mtabd;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.repository.UserRepository;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class Boostrap {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @PostConstruct
    public void boostrap() {
        User user = new User();
        user.setFirstName("Jan");
        user.setLastName("Kowalski");
        user.setEmail("jan.kowalski@example.com");
        user.setBirth(LocalDateTime.of(1984, 12, 12, 12, 12));
        user.setUsername("user");
        user.setPassword(passwordEncoder.encode("password"));

        userRepository.save(user);
    }
}
