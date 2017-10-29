package pl.dawidsowa.mtabd;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.dawidsowa.mtabd.domain.Chat;
import pl.dawidsowa.mtabd.domain.Message;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.repository.ChatRepository;
import pl.dawidsowa.mtabd.repository.MessageRepository;
import pl.dawidsowa.mtabd.repository.UserRepository;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class Boostrap {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;
    private final ChatRepository chatRepository;

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

        Chat chat = createChat();

        createMessage("Cześć", chat, user);
        createMessage("Hello", chat, user);
        createMessage("Nopppppee", chat, user);
    }

    private Chat createChat() {
        Chat chat = new Chat();
        return chatRepository.save(chat);
    }

    private void createMessage(String text, Chat chat, User user) {
        Message msg = new Message();
        msg.setText(text);
        msg.setUser(user);
        msg.setIpv4("1.2.3.4");
        msg.setUserAgent("Mozilla 69/666 [Linuxxx]");
        chat.getMessages().add(msg);
        chatRepository.save(chat);
        //messageRepository.save(msg);
    }
}
