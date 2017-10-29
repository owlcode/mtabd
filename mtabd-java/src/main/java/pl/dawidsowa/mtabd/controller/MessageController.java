package pl.dawidsowa.mtabd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.dawidsowa.mtabd.domain.Message;
import pl.dawidsowa.mtabd.repository.MessageRepository;

import java.util.Collection;

@Controller
@RequestMapping("/api/message")
@RequiredArgsConstructor
public class MessageController {

    private final MessageRepository messageRepository;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    @ResponseBody
    public Collection<Message> getMessages(Pageable pageable) {
        return messageRepository.findAll(pageable).getContent();
    }
}
