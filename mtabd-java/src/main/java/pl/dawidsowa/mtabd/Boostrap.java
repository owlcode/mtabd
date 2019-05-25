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
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class Boostrap {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;
    private final ChatRepository chatRepository;

    @PostConstruct
    public void boostrap() {
        User user1 = new User();
        user1.setFirstName("Jan");
        user1.setLastName("Kowalski");
        user1.setEmail("jankowalski@example.com");
        user1.setBirth(LocalDate.of(1984, 12, 12));
        user1.setUsername("user");
        user1.setPassword(passwordEncoder.encode("password"));

        userRepository.save(user1);


        User user2 = new User();
        user2.setFirstName("Zbigniew");
        user2.setLastName("Nowak");
        user2.setEmail("znowak@google.com");
        user2.setBirth(LocalDate.of(1974, 01, 30));
        user2.setUsername("nowak");
        user2.setPassword(passwordEncoder.encode("12345678"));

        userRepository.save(user2);
        Chat chat = createChat();

        createMessage("Cześć", chat, user1);
        createMessage("Hello", chat, user2);
        createMessage("Nopppppee", chat, user1);
        createMessage("AAAAAAAA", chat, user1);
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
        msg = messageRepository.save(msg);
        chat.getMessages().add(msg);
        chatRepository.save(chat);
        //messageRepository.save(msg);
    }
}
