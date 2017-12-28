package pl.dawidsowa.mtabd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.dto.UserAddDTO;
import pl.dawidsowa.mtabd.dto.UserDTO;
import pl.dawidsowa.mtabd.repository.MessageRepository;
import pl.dawidsowa.mtabd.repository.UserRepository;

import java.util.Collection;
import java.util.Random;

@Controller
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;
    private final PasswordEncoder passwordEncoder;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    @ResponseBody
    public Collection<UserDTO> getUsers(Pageable pageable) {
        return userRepository.findAllUserDTO(pageable).getContent();
    }

    @RequestMapping(value = {"", "/"}, method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void addUser(@RequestBody UserAddDTO dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setBirth(dto.getBirth());
        userRepository.save(user);
    }

    @RequestMapping(value = "/random", method = RequestMethod.GET)
    @ResponseBody
    public UserDTO getRandomUser() {
        long count = userRepository.count();
        int page = new Random().nextInt((int)count);
        Page<UserDTO> user = userRepository.findAllUserDTO(new PageRequest(page, 1));
        if (user.hasContent())
            return user.getContent().get(0);
        else
            return null;
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    @ResponseBody
    public UserDTO getUser(@PathVariable("id") Long id) {
        return userRepository.findOneUserDTO(id);
    }



    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin
    @Transactional
    @Modifying
    public void deleteUser(@PathVariable("id") Long id) {
        User user = userRepository.findOne(id);
        messageRepository.deleteAllByUser(user);
        userRepository.delete(user);
    }

    @RequestMapping(value = {"/names"}, method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    @Transactional
    public String getUsernames() {
        return userRepository.getUsernames();
    }

}
