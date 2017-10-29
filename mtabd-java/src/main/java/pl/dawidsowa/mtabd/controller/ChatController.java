package pl.dawidsowa.mtabd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.dawidsowa.mtabd.domain.Chat;
import pl.dawidsowa.mtabd.repository.ChatRepository;

import java.util.Collection;

@Controller
@RequestMapping("/api/talk")
@RequiredArgsConstructor
public class ChatController {
    public final ChatRepository chatRepository;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    @ResponseBody
    public Collection<Chat> getChats(Pageable pageable) {
        return chatRepository.findAll(pageable).getContent();
    }
}
